import {StyleSheet, css} from "aphrodite/no-important";
// @ts-ignore
import rustySvg from "../assets/rusty.svg";
// @ts-ignore
import kinkySvg from "../assets/kinky.svg";
import { onMount } from "solid-js";

const s = StyleSheet.create({
    container: {
        color: "var(--light-color)",
        minHeight: "50vh",
        padding: "3rem 2rem",
        position: "relative",
    },
    rustySelection: {
        "::selection": {
            color: "#6E2A00",
            backgroundColor: "var(--light-color)",
        },
    },
    expressiveSelection: {
        "::selection": {
            color: "var(--c5)",
            backgroundColor: "var(--light-color)",
        },
    },
    typedSelection: {
        "::selection": {
            color: "var(--c2)",
            backgroundColor: "var(--light-color)",
        },
    },
    kinkySelection: {
        "::selection": {
            color: "var(--c3)",
            backgroundColor: "var(--dark-color)",
        },
    },
    subtitle: {
        fontFamily: "Inter, sans-serif",
        fontWeight: 500,
        fontSize: "4rem",
        margin: 0,
        color: "var(--light-color)",
    },
    expressive: {
        fontWeight: 200,
        fontFamily: "Heaters",
        fontSize: "6rem",
    },
    kinky: {
        fontWeight: 400,
    },
    typedContainer: {
        display: "grid",
        gridTemplateColumns: "1fr 1fr 1fr",
        gridColumnGap: "0.5rem",
    },
});

export default function Index() {
    const tree = (
        <div>
            <Rusty />
            <Expressive />
            <Kinky />
            <Typed />
        </div>
    );

    onMount(() => {
        window.Prism.highlightAllUnder(tree as unknown as HTMLElement);
    });

    return tree;
}

function Rusty() {
    const code = `
$ time misti index.misti
real\t0m0,004s
user\t0m0,003s
sys \t0m0,001s
    `.trim();
    return (
        <div class={css(s.container)} style={{"background-color": "#6E2A00"}}>
            <img src={rustySvg} alt="Rusty" height={100} />
            <p class={css(s.rustySelection)}>
                Because every software in the world should be (re)written in Rust, amirite?
            </p>
            <pre class="language-sh no-line-numbers" style={{"font-size": "0.85rem"}}>
                <code>{code}</code>
            </pre>
            <p class={css(s.rustySelection)}>
                Improving compile times with a low level systems programming language.
            </p>
            <p style={{position: "absolute", bottom: 0, "font-size": "0.5rem", "user-select": "none"}}>
                *Not actual compile time but target for a simple 1k loc file. Rust is a trademark of
                the Rust Foundation.
            </p>
        </div>
    );
}

function Expressive() {
    return (
        <div class={css(s.container)} style={{"background-color": "var(--c5)"}}>
            <h2 class={css(s.subtitle, s.expressive, s.expressiveSelection)}>Expressive</h2>
            <p class={css(s.expressiveSelection)}>
                Reduce boilerplate.
            </p>
        </div>
    );
}

function Kinky() {
    const code = `
fun legalToDrink(#{Str name, Int age} person) {
    val additional = if age >= 18 {""} else {"not"}
    console.log("{name} is {additional} allowed to drink")
}

val ana = #{"Ana", 35}
val john = #{"John", 14}

legalToDrink(person: ana)
legalToDrink(person: john)
    `.trim();
    return (
        <div class={css(s.container)} style={{"background-color": "var(--c3)", color: "var(--dark-color)"}}>
            <img src={kinkySvg} alt="Kinky" height={100} />
            <p class={css(s.kinkySelection)}>Questionable syntax choices 😳 in the name of consistency</p>
            <pre class="language-misti no-line-numbers" style={{"font-size": "0.85rem"}}>
                <code>{code}</code>
            </pre>
        </div>
    );
}

function Typed() {
    const code1 = `
// file1.d.ts
declare interface User {
    user_id: number,
    username: string,
    name: string,
    last_name: string,
    age: number,
}
    `.trim();

    const code2 = `
// file2.misti
import {User} from "./file1.d.ts"

fun filter(
    Array[User] users, 
    Num minAge, 
    Num maxAge
) -> User {
    // code
}
    `.trim();

    const code3 = `
// file2.d.ts
declare function filter(
    users: User[], 
    minAge: number, 
    maxAge: number
): User;

    `.trim();
    return (
        <div class={css(s.container)} style={{"background-color": "var(--c2)"}}>
            <h2 class={css(s.subtitle, s.typedSelection)}>Typed</h2>
            <p class={css(s.typedSelection)}>(Hopefully some day) Interoperable with TypeScript type definitions</p>
            <div class={css(s.typedContainer)}>
                <pre class="language-javascript no-line-numbers" style={{"font-size": "0.85rem"}}>
                    <code>{code1}</code>
                </pre>
                <pre class="language-misti no-line-numbers" style={{"font-size": "0.85rem"}}>
                    <code>{code2}</code>
                </pre>
                <pre class="language-javascript no-line-numbers" style={{"font-size": "0.85rem"}}>
                    <code>{code3}</code>
                </pre>
            </div>
        </div>
    );
}
