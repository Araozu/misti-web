import { lazy, Suspense, Switch, Match, createSignal, createEffect, untrack, createMemo } from "solid-js";
import { useRoute } from "./Router";
import Index from "./Pages/Index";
import { Header } from "./Header";
import { StyleSheet, css } from "aphrodite/no-important";
import { animationActive, setAnimationActive } from "./loadingAnimationGlobal";

const time = (t: number) => new Promise(resolve => {
    setTimeout(resolve, t)
});

const Learn = lazy(async () => import("./Pages/Learn"));

const Grammar = lazy(() => import("./Pages/Grammar"));

function Separator() {
    const route = useRoute();

    const e = createMemo(() => {
        const isMainPage = route() === "/";
        return StyleSheet.create({
            container: {
                width: "100%",
                overflow: "hidden",
                position: isMainPage ? "sticky" : "fixed",
                top: isMainPage ? "-0.75rem" : "1.4rem",
            },
            separator: {
                height: isMainPage ? "1rem" : "0.2rem",
                width: "200%",
                animationName: "gradientBG",
                animationTimingFunction: "linear",
                animationIterationCount: "infinite"
            }
        });
    });

    const [position, setPosition] = createSignal(0);
    const [animationActiveLocal, setAnimationActiveLocal] = createSignal(true);

    const animate = async () => {
        untrack(async () => {
            const tick = 30;
            let pos = position();

            let variance = 0.06;

            // accelerate
            while (true) {
                if (pos >= 50) pos = 0;

                setPosition(pos + variance);
                if (variance < 1) {
                    variance *= 1.5;
                } else {
                    variance = 1;
                }
                pos += variance;
                await time(tick);
                if (!animationActive()) break;
            }

            // deaccelerate
            while (variance > 0.09) {
                if (pos >= 50) pos = 0;

                setPosition(pos + variance);
                variance /= 1.5;
                pos += variance;
                await time(tick);
            }
        });
    }

    createEffect(() => {
        if (animationActive()) {
            animate();
        }
    });

    const animateHelper = () => {
        if (animationActive()) {
            setAnimationActive(false);
        } else {
            animate();
        }
    }

    return (
        <div className={css(e().container)} onClick={animateHelper}>
            <div
                className={css(e().separator) + " rainbow-separator"}
                style={{transform: `translateX(-${position()}%)`}}
            />
        </div>
    )
}

function App() {
    const route = useRoute();
    const [colorMode, setColorMode] = createSignal(localStorage?.getItem("color-mode") ?? "dark");

    createEffect(() => {
        const mode = colorMode();
        document.body.className = `${mode}-theme`;
    });

    const whiteSpaceStyles = createMemo(() => {
        return route() === "/"
            ? {
                display: "none"
            }
            : {
                width: "100%",
                height: "1.6rem"
            };
    });

    return (
        <div>
            <Header setColorMode={setColorMode}/>
            <div style={whiteSpaceStyles()}/>
            <Separator/>

            <Suspense fallback={<p>Loading...</p>}>
                <Switch fallback={<p>404!</p>}>
                    <Match when={route() === "/"}>
                        <Index/>
                    </Match>
                    <Match when={route() === "/learn/"}>
                        <Learn/>
                    </Match>
                    <Match when={route() === "/grammar/"}>
                        <Grammar/>
                    </Match>
                </Switch>
            </Suspense>
        </div>
    );
}

export default App;
