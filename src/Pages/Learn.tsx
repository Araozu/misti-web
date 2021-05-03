import { setAnimationActive } from "../loadingAnimationGlobal";
import { globalStyles } from "../globalStyles";
import { Title } from "../components/Title";
import { Sidebar } from "./Learn/Sidebar";
import Split from "split-grid";
import { StyleSheet, css } from "aphrodite/no-important";

const e = StyleSheet.create({
    container: {
        display: "grid",
        gridTemplateColumns: "1fr 5px 4fr"
    },
    gutter: {
        gridRow: "1/-1",
        cursor: "col-resize",
        gridColumn: "2",
        backgroundColor: "var(--color)",
    }
});

export default function () {

    setAnimationActive(false);

    const sidebarGutter = <div className={css(e.gutter)}/>

    setTimeout(() => {
        Split({
            dragInterval: 20,
            columnGutters: [
                {
                    element: sidebarGutter as unknown as HTMLElement,
                    track: 1
                }
            ]
        })
    }, 0);

    return (
        <div className={css(e.container)}>

            <Sidebar/>
            {sidebarGutter}
            <div className={css(globalStyles.padded)}>
                <Title title={"Learn Misti"}/>
            </div>

        </div>
    )
}
