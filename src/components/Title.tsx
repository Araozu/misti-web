import { StyleSheet, css } from "aphrodite/no-important";

const e = StyleSheet.create({
    title: {
        fontWeight: "normal",
        fontSize: "2.5rem"
    }
});

export function Title(props: { title: string }) {
    return (
        <h1 className={css(e.title)}>
            {props.title}
        </h1>
    )
}
