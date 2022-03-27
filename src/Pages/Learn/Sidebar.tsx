import { StyleSheet, css } from "aphrodite/no-important"
import { createMemo, For } from "solid-js"
import { currentVersions } from "../../globalValues"
import { Subjects } from "./Subjects"
import {RouterLink} from "../../Router"

const e = StyleSheet.create({
    container: {
        padding: "1.5rem 1rem",
        overflowY: "scroll",
        height: "calc(100vh - 1.6rem)",
        boxSizing: "border-box",
        position: "sticky",
        top: "1.6rem",
    },
})

const sidebarkLinkStyle = StyleSheet.create({
    container: {
        padding: "0.5rem 0.25rem",
        borderRadius: "2px",
        cursor: "pointer",
        display: "inline-block",
        width: "100%",
        textDecoration: "none",
        color: "var(--color)",
        "&:visited": {
            textDecoration: "none",
        },
        ":hover": {
            backgroundColor: "var(--c3-transparent)",
        },
    },
})

function SectionTitle(props: { text: string }) {
    const e = StyleSheet.create({
        container: {
            textTransform: "uppercase",
            opacity: 0.8,
            padding: "1.75rem 0.25rem 0.5rem 0.25rem",
        },
    })

    return (
        <div className={css(e.container)}>
            {props.text}
        </div>
    )
}

function SidebarLink(props: { text: string, to: string }) {
    return (
        <RouterLink to={props.to} className={css(sidebarkLinkStyle.container)}>
            {props.text}
        </RouterLink>
    )
}

export function Sidebar(props: {subjects: Subjects}) {
    const versionsElement = createMemo(() => {
        const v = currentVersions()

        if (v.versions.length === 0) {
            return <p style={{opacity: 0.5}}>Loading...</p>
        } else {
            return (
                <For each={v.versions}>
                    {(x) => <p>{x}</p>}
                </For>
            )
        }
    })

    // TODO: calcular la ruta correcta D:
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
                                {(x) => <SidebarLink to={`/learn/next/${subject.path!}/${x.path!}`} text={x.title} />}
                            </For>
                        )
                        return (
                            <>
                                <SectionTitle text={subject.title} />
                                {children}
                            </>
                        )
                    } else {
                        return <SidebarLink to={`/learn/next/${subject.path!}`} text={subject.title} />
                    }
                }}
            </For>

        </div>
    )
}
