import { globalStyles } from "../globalStyles";
import { Sidebar } from "./Learn/Sidebar";
import Split from "split-grid";
import YAML from "yaml";
import { StyleSheet, css } from "aphrodite/no-important";
import { createMemo, createSignal } from "solid-js";
import { Subjects } from "./Learn/Subjects";
import { language } from "../globalValues";
import { Content } from "./Learn/Content";
import { useParams } from "solid-app-router";

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
    content: {
        // Fix for pre overflow
        minWidth: 0,
    },
});

export default function() {
    const routeParams = useParams();

    const version = createMemo(() => routeParams.version);

    const sidebarGutter = <div class={css(e.gutter)} />;

    Split({
        dragInterval: 20,
        columnGutters: [
            {
                element: sidebarGutter as unknown as HTMLElement,
                track: 1,
            },
        ],
    });

    const [subjects, setSubjects] = createSignal<Subjects>([]);

    (async() => {
        const indexUrl = `/txt/${language()}/docs/${version()}/index.yaml`;
        const dataRaw = await fetch(indexUrl);
        const dataTxt = await dataRaw.text();
        const subjects = YAML.parse(dataTxt) as {subjects: Subjects};
        setSubjects(subjects.subjects);
    })();

    return (
        <div class={css(e.container)}>

            <Sidebar subjects={subjects()} />
            {sidebarGutter}

            <div class={css(globalStyles.padded, e.content)}>
                <Content subjects={subjects()} />
            </div>

        </div>
    );
}
