import { createSignal, JSX } from "solid-js";

const [route, setRoute] = (() => {
    let rutaPrevia = window.location.hash

    if (rutaPrevia === "") {
        window.history.pushState({}, "JAM", "#/")
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

    const v: [() => string, (v: string) => string] = [rutaActual, setRutaActual];
    return v;
})();

export const useRoute = () => route;

export function RouterLink(props: { to: string, children: JSX.Element, onClick?: () => void }) {
    return (
        <a href={`/#${props.to}`} onClick={props.onClick}>
            {props.children}
        </a>
    )
}
