import { setAnimationActive } from "../loadingAnimationGlobal"
import { globalStyles } from "../globalStyles"
import { css } from "aphrodite/no-important"
import { Title } from "../components/Title"
import type Prism from "prismjs"
import { marked } from "marked"
import { language } from "../globalValues"
import { onMount } from "solid-js"

export default function() {
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
}
