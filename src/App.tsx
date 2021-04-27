import { lazy, Suspense, Switch, Match, createSignal, createEffect, untrack } from "solid-js";
import { useRouter } from "./Router";
import Index from "./Pages/Index";
import { Header } from "./Header";
import { StyleSheet, css } from "aphrodite/no-important";
import { animationActive, setAnimationActive } from "./loadingAnimationGlobal";

const time = (t: number) => new Promise(resolve => {
    setTimeout(resolve, t)
});

const Learn = lazy(async () => {
    await time(2000)
    return import("./Pages/Learn")
});

const Grammar = lazy(() => import("./Pages/Grammar"));

function Separator() {
    const e = StyleSheet.create({
        container: {
            width: "100%",
            overflow: "hidden",
            position: "sticky",
            top: "-0.75rem",
        },
        separator: {
            height: "1rem",
            width: "200%",
            animationName: "gradientBG",
            animationTimingFunction: "linear",
            animationIterationCount: "infinite"
        }
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
        <div className={css(e.container)} onClick={animateHelper}>
            <div
                className={css(e.separator) + " rainbow-separator"}
                style={{transform: `translateX(-${position()}%)`}}
            />
        </div>
    )
}

function App() {
    const route = useRouter();
    const [colorMode, setColorMode] = createSignal(localStorage?.getItem("color-mode") ?? "dark");

    createEffect(() => {
        const mode = colorMode();
        document.body.className = `${mode}-theme`;
    });

    return (
        <div>
            <Header setColorMode={setColorMode}/>
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
