import {useSplitRoute} from "../../Router";
import { setAnimationActive } from "../../loadingAnimationGlobal";
import {createEffect, createMemo, JSX} from "solid-js";
import { language } from "../../globalValues";
import { Subjects } from "./Subjects";
import {Title} from "../../components/Title";
import marked from "marked";

const loadingElement = (
    <div>
        <Title title={"Loading subject..."}/>
    </div>
);

const errorElement = (
    <div>
        <Title title={"404: Subject not fond"}/>
    </div>
);

async function loadMDData(path: string, container: JSX.Element) {
    const el = container as unknown as HTMLElement;

    console.log("Loading MD");
    console.log(path);

    // Replace content with a loading message
    while (el.lastChild) {
        el.removeChild(el.lastChild);
    }
    el.appendChild(loadingElement as unknown as HTMLElement);

    const request = await fetch(path);
    const md = await request.text();
    const html = marked(md);

    // DEV: if it is an html document, show error
    if (html.startsWith("<!DOCTYPE html>")) {
        while (el.lastChild) {
            el.removeChild(el.lastChild);
        }
        el.appendChild(errorElement as unknown as HTMLElement);
        return;
    } else {
        // Replace loading message with content
        while (el.lastChild) {
            el.removeChild(el.lastChild);
        }
        el.innerHTML = html;
    }
}

export function Content(props: {subjects: Subjects}) {
    const routeParts = useSplitRoute();
    const version = createMemo(() => routeParts()[1]);
    const parentSubject = createMemo(() => routeParts()[2]);
    const subject = createMemo(() => routeParts()[3]);

    const elementoContenedor = <div className={"marked"}></div>;

    createEffect(async () => {
        const parent = parentSubject();
        const sub = subject();

        setAnimationActive(true);

        if (!parent && !sub) {
            if (props.subjects[0] === undefined) {
                const el = elementoContenedor as unknown as HTMLDivElement;
                while (el.lastChild) {
                    el.removeChild(el.lastChild);
                }
                el.appendChild(loadingElement as unknown as HTMLElement);
            } else {
                const startPagePath = props.subjects[0].path;
                const indexUrl = `/txt/${language()}/docs/${version()}/${startPagePath}.md`;
                await loadMDData(indexUrl, elementoContenedor);
            }
        } else if (parent && !sub) {
            const indexUrl = `/txt/${language()}/docs/${version()}/${parent}.md`;
            await loadMDData(indexUrl, elementoContenedor);
        } else {
            const indexUrl = `/txt/${language()}/docs/${version()}/${parentSubject()}/${subject()}.md`;
            await loadMDData(indexUrl, elementoContenedor);
        }

        setAnimationActive(false);
    });

    return (
        <div>
            {elementoContenedor}
        </div>
    )
}
