import { setAnimationActive } from "../loadingAnimationGlobal"
import { globalStyles } from "../globalStyles"
import { css, StyleSheet } from "aphrodite/no-important"
import type Prism from "prismjs"
import { language } from "../globalValues"
import { createEffect, createMemo, createSignal } from "solid-js"
import Split from "split-grid"
import { Subjects } from "./Learn/Subjects"
import YAML from "yaml"
import { Sidebar } from "./Learn/Sidebar"
import { Content } from "./Learn/Content"
import { useParams } from "solid-app-router"

const e = StyleSheet.create({
    container: {
        display: "grid",
        gridTemplateColumns: "1fr 5px 4fr",
        paddingTop: "1.5rem",
    },
    gutter: {
        gridRow: "1/-1",
        cursor: "col-resize",
        gridColumn: "2",
        backgroundColor: "var(--color)",
    },
})

export default function() {
    setAnimationActive(false)

    const routeParams = useParams()
    console.log(routeParams.version)

    const version = createMemo(() => routeParams.version)

    const sidebarGutter = <div className={css(e.gutter)} />

    Split({
        dragInterval: 20,
        columnGutters: [
            {
                element: sidebarGutter as unknown as HTMLElement,
                track: 1,
            },
        ],
    })

    const [subjects, setSubjects] = createSignal<Subjects>([])

    createEffect(async() => {
        const v = version()
        if (!v) return

        const indexUrl = `/txt/${language()}/spec/${v}/index.yaml`
        const dataRaw = await fetch(indexUrl)
        const dataTxt = await dataRaw.text()
        const subjects = YAML.parse(dataTxt) as { subjects: Subjects }
        setSubjects(subjects.subjects)
    })

    return (
        <div className={css(e.container)}>

            <Sidebar subjects={subjects()} contentPath={"spec"} />
            {sidebarGutter}

            <div className={css(globalStyles.padded)}>
                <Content subjects={subjects()} contentPath={"spec"} />
            </div>

        </div>
    )
}
