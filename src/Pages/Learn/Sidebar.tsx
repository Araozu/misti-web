import { StyleSheet, css } from "aphrodite/no-important";
import { createMemo, For } from "solid-js";
import { currentVersions } from "../../globalValues";
import { Subjects } from "./Subjects";
import { Link, useLocation } from "solid-app-router";

import "../../styles/sidebar.css";

const e = StyleSheet.create({
    container: {
        padding: "1.5rem 0.25rem",
        overflowY: "scroll",
        height: "calc(100vh - 1.6rem)",
        boxSizing: "border-box",
        position: "sticky",
        top: "1.6rem",
    },
});

const sidebarLinkStyle = StyleSheet.create({
    container: {
        boxSizing: "border-box",
        padding: "0.5rem 0.75rem",
        borderRadius: "1rem",
        cursor: "pointer",
        display: "inline-block",
        width: "100%",
        textDecoration: "none",
        color: "var(--color)",
        border: "solid 2px transparent",
        "&:visited": {
            textDecoration: "none",
        },
        ":hover": {
            color: "var(--highlighted-color)",
            borderColor: "var(--highlighted-border-color_hover)",
        },
    },
    highlighted: {
        borderColor: "var(--highlighted-border-color) !important",
        backgroundColor: "var(--highlighted-bg-color) !important",
        color: "var(--highlighted-color) !important",
    },
});

function SectionTitle(props: { text: string }) {
    const e = StyleSheet.create({
        container: {
            textTransform: "uppercase",
            opacity: 0.8,
            padding: "2rem 0.25rem 0.5rem 0.75rem",
            fontWeight: 600,
        },
    });

    return (
        <div class={css(e.container)}>
            {props.text}
        </div>
    );
}

function SidebarLink(props: { text: string, to: string, subjectPath: string, childrenPath: string, currentPath: () => [string, string] }) {
    const additionalCssClass = createMemo(() => {
        const [subject, children] = props.currentPath();
        if (subject === props.subjectPath && children === props.childrenPath) {
            return css(sidebarLinkStyle.container, sidebarLinkStyle.highlighted);
        } else {
            return css(sidebarLinkStyle.container);
        }
    });
    return (
        <Link
            href={`${props.to}${props.subjectPath}/${props.childrenPath}`}
            class={additionalCssClass()}
        >
            {props.text}
        </Link>
    );
}

export function Sidebar(props: { subjects: Subjects, contentPath?: string }) {
    const contentPath = props.contentPath ?? "learn";
    const location = useLocation();
    const currentPath = createMemo<[string, string]>(() => {
        const pathArray = location.pathname.split("/");
        return [pathArray[3], pathArray[4] ?? ""];
    });

    const versionsElement = createMemo(() => {
        const v = currentVersions();

        if (v.versions.length === 0) {
            return <p style={{opacity: 0.5}}>Loading...</p>;
        } else {
            return (
                <For each={v.versions}>
                    {(x) => <p>{x}</p>}
                </For>
            );
        }
    });

    return (
        <div id="sidebar-container" class={css(e.container)}>
            Language version:
            <br />
            {versionsElement()}
            <hr />

            <For each={props.subjects}>
                {(subject) => {
                    if (subject.children) {
                        const children = (
                            <For each={subject.children}>
                                {(x) => (
                                    <SidebarLink
                                        to={`/${contentPath}/next/`}
                                        text={x.title}
                                        currentPath={currentPath}
                                        subjectPath={subject.path!}
                                        childrenPath={x.path!}
                                    />
                                )}
                            </For>
                        );
                        return (
                            <>
                                <SectionTitle text={subject.title} />
                                {children}
                            </>
                        );
                    } else {
                        return (
                            <SidebarLink
                                to={`/${contentPath}/next/`}
                                text={subject.title}
                                currentPath={currentPath}
                                subjectPath={subject.path!}
                                childrenPath={""}
                            />
                        );
                    }
                }}
            </For>

        </div>
    );
}
