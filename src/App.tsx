import { lazy, Suspense, Switch, Match, createSignal, createEffect, createMemo } from "solid-js";
import { useRouter } from "./Router";
import Index from "./Pages/Index";
import { Header } from "./Header";
import { StyleSheet, css } from "aphrodite/no-important";
import { LoadingScreen, LoadingScreenStatus } from "./LoadingScreen";

const time = (t: number) => new Promise(resolve => {
    setTimeout(resolve, t)
})

const Learn = lazy(async () => {
    await time(2000)
    return import("./Pages/Learn")
});

const Grammar = lazy(async () => {
    await time(1000);
    return import("./Pages/Grammar")
})

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

    return (
        <div className={css(e.container)}>
            <div className={css(e.separator) + " rainbow-separator"}/>
        </div>
    )
}

function App() {
    const route = useRouter();
    const [loadingState, setLoadingState] = createSignal(LoadingScreenStatus.DISABLED);

    const [colorMode, setColorMode] = createSignal(localStorage?.getItem("color-mode") ?? "dark");

    createEffect(() => {
        const mode = colorMode();
        document.body.className = `${mode}-theme`;
    });

    return (
        <div>
            <LoadingScreen status={loadingState()}/>
            <Header setLoadingState={setLoadingState} setColorMode={setColorMode}/>
            <Separator/>

            <Suspense fallback={<LoadingScreen status={loadingState()}/>}>
                <Switch fallback={<p>404!</p>}>
                    <Match when={route() === "/"}>
                        <Index/>
                    </Match>
                    <Match when={route() === "/learn/"}>
                        <Learn setLoadingState={setLoadingState}/>
                    </Match>
                    <Match when={route() === "/grammar/"}>
                        <Grammar setLoadingState={setLoadingState}/>
                    </Match>
                </Switch>
            </Suspense>
        </div>
    );
}

export default App;
