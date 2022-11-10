import { lazy, createMemo } from "solid-js";
import { Header } from "./Header";
import { StyleSheet, css } from "aphrodite/no-important";
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
            },
        });
    });

    return (
        <div class={css(e().container)}>
            <div class={`${css(e().separator)} rainbow-separator`} />
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
