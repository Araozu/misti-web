import { css, StyleSheet } from "aphrodite/no-important"
import { setAnimationActive } from "./loadingAnimationGlobal"
import { createMemo, Show } from "solid-js"
import { currentVersions } from "./globalValues"
import { Link, useLocation } from "solid-app-router"

const e = StyleSheet.create({
    titleContainer: {
        backgroundColor: "#212121",
        color: "#fefefe",
    },
    motto: {
        paddingTop: "4rem",
        paddingBottom: "1rem",
        fontSize: "4rem",
        fontWeight: 600,
        "@media (max-width: 800px)": {
            paddingTop: "1rem",
            paddingBottom: "0.5rem",
            fontSize: "2.5rem",
            wordBreak: "break-word",
        },
    },
    motto2: {
        fontSize: "1.25rem",
    },
    padded: {
        paddingLeft: "5rem",
        paddingRight: "5rem",
        "@media (max-width: 800px)": {
            paddingLeft: "1rem",
            paddingRight: "1rem",
        },
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
        justifyContent: "center",
    },
    headerMainLink: {
        fontWeight: 600,
        textDecoration: "none",
        color: "var(--color)",
        padding: "0 1rem",
        fontSize: "0.9rem",
        ":hover": {
            textDecoration: "underline",
        },
    },
    headerNormalLink: {
        textDecoration: "none",
        color: "var(--color)",
        padding: "0 0.5rem",
        fontSize: "0.8rem",
        ":hover": {
            textDecoration: "underline",
        },
    },
})

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
            },
            "@media (max-width: 800px)": {
                padding: "0.5rem 0.75rem",
                marginRight: "0.5rem",
                marginBottom: "1rem",
                marginTop: "1rem",
            },
        },
    })
    const c = css(e.e)

    return (
        <button className={c} onClick={props.onClick}>
            {props.text}
        </button>
    )
}

export function Header() {
    const route = useLocation()

    const docsCurrentVersion = createMemo(() => currentVersions().versions[0] || "next")

    return (
        <div>
            <Show when={route.pathname === "/"}>
                <div className={css(e.motto, e.padded)}>
                    A&nbsp;
                    <span style={{color: "var(--c1)", "font-weight": "bold"}}>F</span>
                    <span style={{color: "var(--c2)", "font-weight": "bold"}}>A</span>
                    <span style={{color: "var(--c3)", "font-weight": "bold"}}>N</span>
                    <span style={{color: "var(--c4)", "font-weight": "bold"}}>C</span>
                    <span style={{color: "var(--c5)", "font-weight": "bold"}}>Y</span>
                    <span>
                        &nbsp;language&nbsp;
                    </span>
                    <br className="hide-on-small" />
                    for Web Assembly
                </div>

                <p className={css(e.motto2, e.padded)}>That's Misti</p>

                <div className={css(e.padded)}>
                    <Link href={`/learn/${docsCurrentVersion()}/`} onClick={() => setAnimationActive(true)}>
                        <MainButton text={"Learn"} color={"var(--c2)"} />
                    </Link>
                    <MainButton text={"Install"} color={"var(--c1)"} />
                    <Link href={`/spec/${docsCurrentVersion()}/`} onClick={() => setAnimationActive(true)}>
                        <MainButton text={"Spec"} color={"var(--c5)"} />
                    </Link>
                </div>
            </Show>
            <Show when={route.pathname !== "/"}>
                <div className={css(e.header2)}>
                    <div className={css(e.headerLink)}>
                        <Link className={css(e.headerMainLink)} href={"/"}>Misti</Link>
                    </div>
                    <div className={css(e.headerLink)}>
                        <Link className={css(e.headerNormalLink)}
                            href={`/learn/${docsCurrentVersion()}/`}
                        >Learn
                        </Link>
                    </div>
                    <div className={css(e.headerLink)}>
                        <Link className={css(e.headerNormalLink)} href={"/learn/"}>Install</Link>
                    </div>
                    <div className={css(e.headerLink)}>
                        <Link className={css(e.headerNormalLink)} href={"/api/"}>API</Link>
                    </div>
                    <div className={css(e.headerLink)}>
                        <Link className={css(e.headerNormalLink)}
                            href={`/spec/${docsCurrentVersion()}/`}
                        >Spec
                        </Link>
                    </div>
                    <div className={css(e.headerLink)}>
                        <Link className={css(e.headerNormalLink)}
                            href={`/grammar/${docsCurrentVersion()}/`}
                        >GitHub
                        </Link>
                    </div>
                </div>
            </Show>
        </div>
    )

}
