import { setAnimationActive } from "../loadingAnimationGlobal"
import { globalStyles } from "../globalStyles"
import { Title } from "../components/Title"
import { Sidebar } from "./Learn/Sidebar"
import Split from "split-grid"
import YAML from "yaml"
import { StyleSheet, css } from "aphrodite/no-important"
import { useSplitRoute } from "../Router"
import { createMemo, createSignal } from "solid-js"
import { Subjects } from "./Learn/Subjects"
import { language } from "../globalValues"
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
    const version = createMemo(() => routeParts()[1])

    if (!version()) {
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

    const [subjects, setSubjects] = createSignal<Subjects>([]);

    (async() => {
        const indexUrl = `/txt/${language()}/docs/${version()}/index.yaml`
        const dataRaw = await fetch(indexUrl)
        const dataTxt = await dataRaw.text()
        const subjects = YAML.parse(dataTxt) as {subjects: Subjects}
        console.log(subjects)
        setSubjects(subjects.subjects)
    })()

    return (
        <div className={css(e.container)}>

            <Sidebar subjects={subjects()} />
            {sidebarGutter}

            <div className={css(globalStyles.padded)}>
                <Content subjects={subjects()} />
            </div>

        </div>
    )
}
