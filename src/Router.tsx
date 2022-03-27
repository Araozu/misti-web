import { createMemo, createSignal, JSX } from "solid-js"
import { setAnimationActive } from "./loadingAnimationGlobal"

const route = (() => {
    let rutaPrevia = window.location.hash

    if (rutaPrevia === "") {
        window.history.pushState({}, "Misti", "#/")
        rutaPrevia = "/"
    } else {
        rutaPrevia = rutaPrevia.substr(1)
    }

    const [rutaActual, setRutaActual] = createSignal(rutaPrevia)

    const fnEffect = () => {
        const nuevaRuta = window.location.hash.substr(1)
        setRutaActual(nuevaRuta)
    }

    window.addEventListener("hashchange", fnEffect)

    return rutaActual
})()

export const useRoute = () => route

export const useSplitRoute = () => createMemo(() => {
    const parts = route().substr(1)
        .split("/")
    if (parts[parts.length - 1] === "") parts.pop()
    return parts
})

interface RouterLinkProps {
    to: string,
    children: JSX.Element,
    className?: string,
    onClick?: () => void
}

export function RouterLink(props: RouterLinkProps) {
    const onClickFn = () => {
        setAnimationActive(true)
        props.onClick?.()
    }
    return (
        <a className={props.className || ""} href={`/#${props.to}`} onClick={onClickFn}>
            {props.children}
        </a>
    )
}
