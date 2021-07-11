import { css, StyleSheet } from "aphrodite/no-important";
import { RouterLink, useRoute } from "./Router";
import { setAnimationActive } from "./loadingAnimationGlobal";
import { createMemo, Show } from "solid-js";
import { currentVersions } from "./globalValues";

const e = StyleSheet.create({
    titleContainer: {
        backgroundColor: "#212121",
        color: "#fefefe"
    },
    motto: {
        paddingTop: "3rem",
        paddingBottom: "1rem",
        fontSize: "3rem"
    },
    motto2: {
        padding: "0 4rem",
        fontSize: "1.25rem"
    },
    padded: {
        paddingLeft: "4rem",
        paddingRight: "4rem",
    },
    header2: {
        position: "fixed",
        top: 0,
        left: 0,
        height: "1.4rem",
        width: "100%",
        zIndex: 100,
        backgroundColor: "var(--bg-color)",
        display: "flex",
        alignItems: "center",
    },
    headerLink: {
        display: "flex",
        height: "1.4rem",
        alignItems: "center",
        justifyContent: "center"
    },
    headerMainLink: {
        fontWeight: "bold",
        textDecoration: "none",
        color: "var(--color)",
        padding: "0 1rem",
        fontSize: "0.9rem",
        ":hover": {
            textDecoration: "underline"
        }
    },
    headerNormalLink: {
        textDecoration: "none",
        color: "var(--color)",
        padding: "0 0.5rem",
        fontSize: "0.8rem",
        ":hover": {
            textDecoration: "underline"
        }
    }
});

function MainButton(props: { text: string, color: string, onClick?: () => void }) {
    const e = StyleSheet.create({
        e: {
            padding: "0.6rem 1rem",
            fontSize: "1rem",
            // fontWeight: "bold",
            marginRight: "1rem",
            marginBottom: "2rem",
            marginTop: "2rem",
            border: `solid 3px ${props.color}`,
            textDecorationLine: "underline",
            backgroundColor: "var(--bg-color)",
            color: "var(--color)",
            borderRadius: "2px",
            cursor: "pointer",
            ":hover": {
                color: "white",
                backgroundColor: props.color,
            }
        }
    });
    const c = css(e.e);

    return (
        <button className={c} onClick={props.onClick}>
            {props.text}
        </button>
    )
}

export function Header(props: { setColorMode: (v: string) => string }) {
    const route = useRoute();

    const changeColorScheme = () => {
        const currentMode = localStorage?.getItem("color-mode") ?? "dark";
        const newMode = currentMode === "dark" ? "light" : "dark";
        localStorage.setItem("color-mode", newMode);
        props.setColorMode(newMode);
    };

    const docsCurrentVersion = createMemo(() => currentVersions().versions[0] || "next");

    return (
        <div>
            <div>
                <Show when={route() === "/"}>
                    <div className={css(e.motto, e.padded)}>
                        A&nbsp;
                        <span style={{color: "#e7b711", "font-weight": "bold"}}>F</span>
                        <span style={{color: "#04abfc", "font-weight": "bold"}}>A</span>
                        <span style={{color: "#fca8d1", "font-weight": "bold"}}>N</span>
                        <span style={{color: "#f44336", "font-weight": "bold"}}>C</span>
                        <span style={{color: "#39b487", "font-weight": "bold"}}>Y</span>
                        &nbsp;programming language
                        <br/>
                        that compiles to JavaScript
                    </div>

                    <p className={css(e.motto2)}>That's Misti</p>

                    <div className={css(e.padded)}>
                        <RouterLink to={`/learn/${docsCurrentVersion()}/`} onClick={() => setAnimationActive(true)}>
                            <MainButton text={"Learn"} color={"#04abfc"}/>
                        </RouterLink>
                        <MainButton text={"Install"} color={"#e7b711"}/>
                        <RouterLink to={"/grammar/"} onClick={() => setAnimationActive(true)}>
                            <MainButton text={"Grammar"} color={"#39b487"}/>
                        </RouterLink>
                        <MainButton text={"Change colors"} color={"var(--c3)"} onClick={changeColorScheme}/>
                    </div>
                </Show>
                <Show when={route() !== "/"}>
                    <div className={css(e.header2)}>
                        <div className={css(e.headerLink)}>
                            <RouterLink className={css(e.headerMainLink)} to={"/"}>Misti</RouterLink>
                        </div>
                        <div className={css(e.headerLink)}>
                            <RouterLink className={css(e.headerNormalLink)} to={`/learn/${docsCurrentVersion()}/`}>Learn</RouterLink>
                        </div>
                        <div className={css(e.headerLink)}>
                            <RouterLink className={css(e.headerNormalLink)} to={"/learn/"}>Install</RouterLink>
                        </div>
                        <div className={css(e.headerLink)}>
                            <RouterLink className={css(e.headerNormalLink)} to={"/api/"}>API</RouterLink>
                        </div>
                        <div className={css(e.headerLink)}>
                            <RouterLink className={css(e.headerNormalLink)} to={"/grammar/"}>Grammar</RouterLink>
                        </div>
                        <div className={css(e.headerLink)}>
                            <RouterLink className={css(e.headerNormalLink)} to={"/grammar/"}>GitHub</RouterLink>
                        </div>
                        <div
                            className={css(e.headerLink, e.headerNormalLink)}
                            style={{cursor: "pointer"}}
                            onClick={changeColorScheme}
                        >
                            Color scheme
                        </div>
                    </div>
                </Show>
            </div>
        </div>
    )

}
