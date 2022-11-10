import { css, StyleSheet } from "aphrodite/no-important";
import { createMemo, Show } from "solid-js";
import { currentVersions } from "./globalValues";
import { Link, useLocation } from "solid-app-router";

import "./styles/header.css";

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
        backgroundColor: "var(--header-main-link-bg-color)",
        color: "var(--header-main-link-color)",
        padding: "0 1rem",
        fontSize: "1.5rem",
        letterSpacing: "0.1rem",
        fontFamily: "Heaters, Inter, sans-serif",
        ":hover": {
            textDecoration: "underline",
        },
    },
    headerNormalLink: {
        textDecoration: "none",
        color: "var(--color)",
        padding: "0 0.5rem",
        fontSize: "0.8rem",
        fontWeight: 500,
        ":hover": {
            textDecoration: "underline",
        },
    },
    coloredLetter: {
        fontWeight: "bold",
        fontFamily: "Heaters, Inter, sans-serif",
        fontSize: "6rem",
        letterSpacing: "0.1rem",
    },
});

function MainButton(props: { text: string, onClick?: () => void }) {
    const e = StyleSheet.create({
        e: {
            padding: "0.6rem 1.25rem",
            fontSize: "1rem",
            // fontWeight: "bold",
            marginRight: "1rem",
            marginBottom: "2rem",
            marginTop: "2rem",
            borderRadius: "1.5rem",
            textDecoration: "none",
            border: "solid 2px var(--js-color)",
            backgroundColor: "var(--bg-color)",
            color: "var(--color)",
            cursor: "pointer",
            ":hover": {
                color: "var(--dark-color)",
                backgroundColor: "var(--js-color)",
            },
            "@media (max-width: 800px)": {
                padding: "0.5rem 0.75rem",
                marginRight: "0.5rem",
                marginBottom: "1rem",
                marginTop: "1rem",
            },
        },
    });
    const c = css(e.e);

    return (
        <button class={c} onClick={props.onClick}>
            {props.text}
        </button>
    );
}

export function Header() {
    const route = useLocation();

    const docsCurrentVersion = createMemo(() => currentVersions().versions[0] || "next");

    return (
        <div>
            <Show when={route.pathname === "/"}>
                <div class={css(e.motto, e.padded)}>
                    A&nbsp;
                    <span class={css(e.coloredLetter)} style={{color: "var(--c1)"}}>F</span>
                    <span class={css(e.coloredLetter)} style={{color: "var(--c2)"}}>A</span>
                    <span class={css(e.coloredLetter)} style={{color: "var(--c3)"}}>N</span>
                    <span class={css(e.coloredLetter)} style={{color: "var(--c4)"}}>C</span>
                    <span class={css(e.coloredLetter)} style={{color: "var(--c5)"}}>Y</span>
                    <span>
                        &nbsp;language&nbsp;
                    </span>
                    <br class="hide-on-small" />
                    for the web
                </div>

                <p class={css(e.motto2, e.padded)}>That's Misti</p>

                <div class={css(e.padded)}>
                    <Link href={`/learn/${docsCurrentVersion()}/`}>
                        <MainButton text={"Learn"} />
                    </Link>
                    {/*
                    <MainButton text={"Install"} colorIndex={"c1"} />
                    */}
                    <Link href={`/spec/${docsCurrentVersion()}/`}>
                        <MainButton text={"Spec"} />
                    </Link>
                </div>
            </Show>
            <Show when={route.pathname !== "/"}>
                <div id="header-no-index" class={css(e.header2)}>
                    <div class={css(e.headerLink)}>
                        <Link class={css(e.headerMainLink)} href={"/"}>Misti</Link>
                    </div>
                    <div class={css(e.headerLink)}>
                        <Link class={css(e.headerNormalLink)}
                            href={`/learn/${docsCurrentVersion()}/`}
                        >Learn
                        </Link>
                    </div>
                    {/*
                    <div class={css(e.headerLink)}>
                        <Link class={css(e.headerNormalLink)} href={"/learn/"}>Install</Link>
                    </div>
                    <div class={css(e.headerLink)}>
                        <Link class={css(e.headerNormalLink)} href={"/api/"}>API</Link>
                    </div>
                    */}
                    <div class={css(e.headerLink)}>
                        <Link class={css(e.headerNormalLink)}
                            href={`/spec/${docsCurrentVersion()}/`}
                        >Spec
                        </Link>
                    </div>
                    <div class={css(e.headerLink)}>
                        <a
                            class={css(e.headerNormalLink)}
                            href={"https://github.com/Araozu/Misti"}
                            target="_blank"
                        >
                            GitHub
                        </a>
                    </div>
                </div>
            </Show>
        </div>
    );

}
