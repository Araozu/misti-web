import { StyleSheet, css } from "aphrodite/no-important";
import { createMemo, For } from "solid-js";
import { currentVersions } from "../../globalValues";
import { Subjects } from "./Subjects";
import { Link } from "solid-app-router";

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
        "&:visited": {
            textDecoration: "none",
        },
        ":hover": {
            backgroundColor: "var(--c3-secondary-container)",
            color: "var(--c3-on-secondary-container)",
        },
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
        <div className={css(e.container)}>
            {props.text}
        </div>
    );
}

function SidebarLink(props: { text: string, to: string }) {
    return (
        <Link href={props.to} className={css(sidebarLinkStyle.container)}>
            {props.text}
        </Link>
    );
}

export function Sidebar(props: { subjects: Subjects, contentPath?: string }) {
    const contentPath = props.contentPath ?? "learn";

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
        <div className={css(e.container)}>
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
                                    <SidebarLink to={`/${contentPath}/next/${subject.path!}/${x.path!}`}
                                        text={x.title}
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
                        return <SidebarLink to={`/${contentPath}/next/${subject.path!}`} text={subject.title} />;
                    }
                }}
            </For>

        </div>
    );
}
