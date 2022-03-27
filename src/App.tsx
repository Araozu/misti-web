import { lazy, Suspense, Switch, Match, createSignal, createEffect, untrack, createMemo } from "solid-js"
import { useRoute } from "./Router"
import Index from "./Pages/Index"
import { Header } from "./Header"
import { StyleSheet, css } from "aphrodite/no-important"
import { animationActive, setAnimationActive } from "./loadingAnimationGlobal"

const time = (t: number) => new Promise((resolve) => {
    setTimeout(resolve, t)
})

const Learn = lazy(async() => import("./Pages/Learn"))

const Grammar = lazy(async() => import("./Pages/Grammar"))

function Separator() {
    const route = useRoute()

    const e = createMemo(() => {
        const isMainPage = route() === "/"
        return StyleSheet.create({
            container: {
                width: "100%",
                overflow: "hidden",
                position: isMainPage ? "sticky" : "fixed",
                top: isMainPage ? "-0.75rem" : "1.4rem",
                zIndex: 1,
            },
            separator: {
                height: isMainPage ? "1rem" : "0.25rem",
                width: "200%",
            },
        })
    })

    const [position, setPosition] = createSignal(0)

    const animate = async() => {
        untrack(async() => {
            const tick = 35
            let pos = position()

            let variance = 0.06

            // accelerate
            do {
                if (pos >= 50) pos = 0

                setPosition(pos + variance)
                if (variance < 1) {
                    variance *= 1.5
                } else {
                    variance = 1
                }
                pos += variance
                await time(tick)
            } while (animationActive())

            // deaccelerate
            while (variance > 0.09) {
                if (pos >= 50) pos = 0

                setPosition(pos + variance)
                variance /= 1.5
                pos += variance
                await time(tick)
            }
        })
    }

    createEffect(() => {
        if (animationActive()) {
            animate()
        }
    })

    const animateHelper = () => {
        if (animationActive()) {
            setAnimationActive(false)
        } else {
            setAnimationActive(true)
        }
    }

    return (
        <div className={css(e().container)} onClick={animateHelper}>
            <div
                className={`${css(e().separator)} rainbow-separator`}
                style={{transform: `translateX(-${position()}%)`}}
            />
        </div>
    )
}

function App() {
    const route = useRoute()

    const whiteSpaceStyles = createMemo(() => (route() === "/"
        ? {
            display: "none",
        }
        : {
            width: "100%",
            height: "1.6rem",
        }))

    const routeFirstComponent = createMemo(() => {
        const parts = route().substr(1)
            .split("/")
        return parts[0]
    })

    return (
        <div>
            <Header />
            <div style={whiteSpaceStyles()} />
            <Separator />

            <Suspense fallback={<p>Loading...</p>}>
                <Switch fallback={<p>404! Route not found</p>}>
                    <Match when={route() === "/"}>
                        <Index />
                    </Match>
                    <Match when={routeFirstComponent() === "learn"}>
                        <Learn />
                    </Match>
                    <Match when={routeFirstComponent() === "grammar"}>
                        <Grammar />
                    </Match>
                </Switch>
            </Suspense>
        </div>
    )
}

export default App
