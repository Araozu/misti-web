import { lazy, Suspense, Switch, Match, createSignal, createEffect, createMemo } from "solid-js";
import { useRouter } from "./Router";
import Index from "./Pages/Index";
import { Header } from "./Header";
import { StyleSheet, css } from "aphrodite/no-important";

const time = (t: number) => new Promise(resolve => {
    setTimeout(resolve, t)
})

const Learn = lazy(async () => {
    await time(2000)
    return import("./Pages/Learn")
});

function LoadingScreen() {
    return (
        <div>
            Loading...
        </div>
    )
}

export enum LoadingState {
    LOADING,
    NORMAL
}

function Separator(props: { loadingState: LoadingState }) {
    const [isAnimating, setIsAnimating] = createSignal(false);

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

    const beginLoadingCycle = () => {
        // TODO: Implement animation in JS
        // setIsAnimating(true);
    };

    const endLoadingCycle = () => {
        // setIsAnimating(false);
    };

    createEffect(() => {
        const v = props.loadingState;
        if (v === LoadingState.NORMAL) endLoadingCycle();
        else beginLoadingCycle();
    });

    return (
        <div className={css(e.container)}>
            <div className={css(e.separator) + " rainbow-separator"}/>
        </div>
    )
}

function App() {
    const route = useRouter();
    const [loadingState, setLoadingState] = createSignal(LoadingState.NORMAL);

    return (
        <div>
            <Header setLoadingState={setLoadingState}/>
            <Separator loadingState={loadingState()}/>

            <Suspense fallback={<LoadingScreen/>}>
                <Switch fallback={<p>404!</p>}>
                    <Match when={route() === "/"}>
                        <Index/>
                    </Match>
                    <Match when={route() === "/learn/"}>
                        <Learn setLoadingState={setLoadingState}/>
                    </Match>
                </Switch>
            </Suspense>
        </div>
    );
}

export default App;
