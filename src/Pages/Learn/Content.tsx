import { createEffect, createMemo, JSX } from "solid-js";
import { language } from "../../globalValues";
import { Subjects } from "./Subjects";
import { Title } from "../../components/Title";
import { marked } from "marked";
import { useParams } from "solid-app-router";

const loadingElement = (
    <div>
        <Title title={"Loading subject..."} />
    </div>
);

const errorElement = (
    <div>
        <Title title={"404: Page not found"} />
        <p>This page couldn't be found.</p>
        <p>You can use the sidebar to see the available pages.</p>
    </div>
);

function loadMDData(path: string, container: JSX.Element) {
    const el = container as unknown as HTMLElement;

    // Replace content with a loading message
    while (el.lastChild) {
        el.removeChild(el.lastChild);
    }
    el.appendChild(loadingElement as unknown as HTMLElement);

    fetch(path)
        .then((request) => {
            if (!request.ok) throw new Error("Error loading");
            return request.text();
        })
        .then((md) => {
            //const md = await request.text();
            const html = marked(md);

            // DEV: if it is an html document, show error
            if (html.startsWith("<!DOCTYPE html>")) {
                throw new Error("Error loading.");
            } else {
                // Replace loading message with content
                while (el.lastChild) {
                    el.removeChild(el.lastChild);
                }
                el.innerHTML = html;
                // Apply syntax highlight
                window.Prism.highlightAllUnder(el);
                // Search for railroad-diagram code, and execute
                const railroadElems = el.querySelectorAll(".railroad-code");
                for (let i = 0; i < railroadElems.length; i += 1) {
                    const railroadElem = railroadElems[i] as HTMLElement;
                    const railroadCode = railroadElem.innerText;
                    railroadElem.innerHTML = "";
                    railroadElem.style.display = "block";

                    // Temporarily create a global variable that contains a reference to the railroad container
                    /// @ts-ignore
                    window.railroadContainer = railroadElem;

                    // Try to eval the railroad code
                    try {
                        eval(`${railroadCode}.addTo(window.railroadContainer)`);
                    } catch (e) {
                        console.log(e);
                    }

                    // Remove the global variable
                    /// @ts-ignore
                    delete window.railroadContainer;
                }
            }
        })
        .catch(() => {
            while (el.lastChild) {
                el.removeChild(el.lastChild);
            }
            el.appendChild(errorElement as unknown as HTMLElement);
        });
}

export function Content(props: { subjects: Subjects, contentPath?: string }) {
    const params = useParams();
    const version = createMemo(() => params.version);
    const paramsPath = createMemo(() => params.subject.split("/"));
    const parentSubject = createMemo(() => paramsPath()[0]);
    const subject = createMemo(() => paramsPath()[1]);
    const contentPath = props.contentPath ?? "docs";

    const elementoContenedor = <div class={"marked"} />;

    createEffect(() => {
        const parent = parentSubject();
        const sub = subject();

        if (!parent && !sub) {
            if (props.subjects[0] === undefined) {
                const el = elementoContenedor as unknown as HTMLDivElement;
                while (el.lastChild) {
                    el.removeChild(el.lastChild);
                }
                el.appendChild(loadingElement as unknown as HTMLElement);
            } else {
                const startPagePath = props.subjects[0].path;
                const indexUrl = `/txt/${language()}/${contentPath}/${version()}/${startPagePath}.md`;
                loadMDData(indexUrl, elementoContenedor);
            }
        } else if (parent && !sub) {
            const indexUrl = `/txt/${language()}/${contentPath}/${version()}/${parent}.md`;
            loadMDData(indexUrl, elementoContenedor);
        } else {
            const indexUrl = `/txt/${language()}/${contentPath}/${version()}/${parentSubject()}/${subject()}.md`;
            loadMDData(indexUrl, elementoContenedor);
        }
    });

    return (
        <div>
            {elementoContenedor}
            <div style={{"min-height": "25vh"}} />
        </div>
    );
}
