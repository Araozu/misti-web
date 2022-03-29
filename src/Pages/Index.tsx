import { StyleSheet, css } from "aphrodite/no-important"
import { setAnimationActive } from "../loadingAnimationGlobal"


const e = StyleSheet.create({
    padded: {
        paddingLeft: "4rem",
        paddingRight: "4rem",
    },
    reasonsTitle: {
        fontSize: "2rem",
        fontWeight: "bold",
        paddingTop: "2rem",
        paddingBottom: "4rem",
    },
    reason: {
        fontSize: "2rem",
    },
    reasonDescription: {
        fontSize: "1.5rem",
    },
    separator: {
        height: "1rem",
        width: "200%",
        animation: "gradientBG 60s linear infinite",
    },
})

export default function Index() {
    setAnimationActive(false)
    return (
        <div>
            Index page
        </div>
    )
}
