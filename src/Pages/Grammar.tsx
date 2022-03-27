import { setAnimationActive } from "../loadingAnimationGlobal"
import { globalStyles } from "../globalStyles"
import { css, StyleSheet } from "aphrodite/no-important"
import { Title } from "../components/Title"
import type Prism from "prismjs"
import { marked } from "marked"
import { language } from "../globalValues"
import { createEffect, createMemo, createSignal, onMount } from "solid-js"
import { useSplitRoute } from "../Router"
import Split from "split-grid"
import { Subjects } from "./Learn/Subjects"
import YAML from "yaml"
import { Sidebar } from "./Learn/Sidebar"
import { Content } from "./Learn/Content"

const e = StyleSheet.create({
    container: {
        display: "grid",
        gridTemplateColumns: "1fr 5px 4fr",
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

    const routeParts = useSplitRoute()
    const version = createMemo(() => {
        const parts = routeParts()
        return parts[1]
    })

    if (!version()) {
        console.log("no version")
        window.location.replace(`/#/${routeParts()[0]}/next/`)
    }

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
        const subjects = YAML.parse(dataTxt) as {subjects: Subjects}
        console.log(subjects)
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

    /*
    setAnimationActive(false)

    const mdEl = document.createElement("div")

    fetch(`/txt/${language()}/spec.md`)
        .then((res) => res.text())
        .then((mdTxt) => {
            mdEl.innerHTML = marked.parse(mdTxt)
            window.Prism.highlightAllUnder(mdEl)
        })

    const el = <div className="main-container" />

    onMount(() => {
        const elem = el as HTMLElement
        window.Prism.highlightAllUnder(el as HTMLElement)
        elem.appendChild(mdEl)
    })
    return el

     */
}
