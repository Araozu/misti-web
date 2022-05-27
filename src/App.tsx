import { lazy, createSignal, createEffect, untrack, createMemo } from "solid-js";
import { Header } from "./Header";
import { StyleSheet, css } from "aphrodite/no-important";
import { animationActive, setAnimationActive } from "./loadingAnimationGlobal";
import { RouteDefinition, useRoutes, useLocation } from "solid-app-router";

const routes = [
    {
        path: "/learn/:version/*subject",
        component: lazy(() => import("./Pages/Learn")),
    },
    {
        path: "/spec/:version/*subject",
        component: lazy(() => import("./Pages/Spec")),
    },
    {
        path: "/",
        component: lazy(() => import("./Pages/Index")),
    },
];

const time = (t: number) => new Promise((resolve) => {
    setTimeout(resolve, t);
});

function Separator() {
    const e = createMemo(() => {
        const route = useLocation();
        const isMainPage = route.pathname === "/";
        return StyleSheet.create({
            container: {
                width: "100%",
                overflow: "hidden",
                position: isMainPage ? "sticky" : "fixed",
                top: isMainPage ? "-0.75rem" : "0.6rem",
                zIndex: 1,
            },
            separator: {
                height: "1rem",
                width: "200%",
            },
        });
    });

    const [position, setPosition] = createSignal(0);

    const animate = async() => {
        untrack(async() => {
            const tick = 35;
            let pos = position();

            let variance = 0.06;

            // accelerate
            do {
                if (pos >= 50) pos = 0;

                setPosition(pos + variance);
                if (variance < 1) {
                    variance *= 1.5;
                } else {
                    variance = 1;
                }
                pos += variance;
                await time(tick);
            } while (animationActive());

            // deaccelerate
            while (variance > 0.09) {
                if (pos >= 50) pos = 0;

                setPosition(pos + variance);
                variance /= 1.5;
                pos += variance;
                await time(tick);
            }
        });
    };

    createEffect(() => {
        if (animationActive()) {
            animate();
        }
    });

    const animateHelper = () => {
        if (animationActive()) {
            setAnimationActive(false);
        } else {
            setAnimationActive(true);
        }
    };

    return (
        <div class={css(e().container)} onClick={animateHelper}>
            <div
                class={`${css(e().separator)} rainbow-separator`}
                style={{transform: `translateX(-${position()}%)`}}
            />
        </div>
    );
}

function App() {
    const Routes = useRoutes(routes as RouteDefinition[]);

    return (
        <div>
            <Header />
            <Separator />
            <Routes />
        </div>
    );
}

export default App;
