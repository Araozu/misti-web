import {useSplitRoute} from "../../Router";
import {createEffect, createMemo} from "solid-js";
import { language } from "../../globalValues";
import { Subjects } from "./Subjects";
import {Title} from "../../components/Title";
import marked from "marked";

const loadingElement = (
    <div>
        <Title title={"Loading subject..."}/>
    </div>
);

export function Content(props: {subjects: Subjects}) {
    const routeParts = useSplitRoute();
    const version = createMemo(() => routeParts()[1]);
    const parentSubject = createMemo(() => routeParts()[2]);
    const subject = createMemo(() => routeParts()[3]);
    
    const elementoContenedor = <div className={"marked"}></div>;

    createEffect(async () => {
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
                console.log("Path:")
                const indexUrl = `/txt/${language()}/docs/${version()}/${startPagePath}.md`;
                console.log(indexUrl);

                const request = await fetch(indexUrl);
                const md = await request.text();
                const html = marked(md);

                const el = elementoContenedor as unknown as HTMLDivElement;
                while (el.lastChild) {
                    el.removeChild(el.lastChild);
                }

                el.innerHTML = html;
            }
            return;
        }

        const indexUrl = `/txt/${language()}/docs/${version()}/${parentSubject()}/${subject()}/`;
        console.log(indexUrl);
        console.log("Parent:");
        console.log(parentSubject());
        console.log("subject:");
        console.log(subject());
    });

    return (
        <div>
            {elementoContenedor}
        </div>
    )
}
