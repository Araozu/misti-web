import { StyleSheet, css } from "aphrodite/no-important";
import { JSX } from "solid-js";

const e = StyleSheet.create({
    padded: {
        paddingLeft: "4rem",
        paddingRight: "4rem",
    },
    reasonsTitle: {
        fontSize: "2rem",
        fontWeight: "bold",
        paddingTop: "2rem",
        paddingBottom: "4rem"
    },
    reason: {
        fontSize: "2rem"
    },
    reasonDescription: {
        fontSize: "1.5rem"
    },
    separator: {
        height: "1rem",
        width: "200%",
        animation: "gradientBG 60s linear infinite"
    }
});

function R(props: { children: JSX.Element }) {
    return (
        <span style={{"color": "var(--c4)", "font-weight": "bold"}}>{props.children}</span>
    )
}

function JSFizzBuzz() {
    const e = StyleSheet.create({
        container: {
            padding: "2rem",
            backgroundColor: "var(--code-bg-color)",
            borderRadius: "10px"
        },
        e: {
            whiteSpace: "pre",
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: "1rem",
            lineHeight: "1.5rem",
            color: "var(--code-color)",
        }
    })
    const container = css(e.container);
    const c = css(e.e);
    return (
        <div className={container}>
            <code className={c}>
                for <R>(</R>let i = 1; i &lt;= 100; i++<R>)</R> <R>{"{"}</R> <br/>
                &nbsp;&nbsp;&nbsp;&nbsp;if <R>(</R>(i % 3 === 0) && (i % 5 === 0)<R>)</R> <R>{"{"}</R> <br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;console.log<R>(</R>"FizzBuzz"<R>)</R><R>;</R> <br/>
                &nbsp;&nbsp;&nbsp;&nbsp;<R>{"}"}</R> else if <R>(</R>i % 3 === 0<R>)</R> <R>{"{"}</R> <br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;console.log<R>(</R>"Fizz"<R>)</R><R>;</R> <br/>
                &nbsp;&nbsp;&nbsp;&nbsp;<R>{"}"}</R> else if <R>(</R>i % 5 === 0<R>)</R> <R>{"{"}</R> <br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;console.log<R>(</R>"Buzz"<R>)</R><R>;</R> <br/>
                &nbsp;&nbsp;&nbsp;&nbsp;<R>{"}"}</R> else <R>{"{"}</R> <br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;console.log<R>(</R>i<R>)</R><R>;</R> <br/>
                &nbsp;&nbsp;&nbsp;&nbsp;<R>{"}"}</R> <br/>
                <R>{"}"}</R> <br/>
            </code>
        </div>
    )
}

function JSSwitch() {

}

export default function Index() {
    return (
        <div>
            <div className={css(e.padded)}>
                <div className={css(e.reasonsTitle)}>Why?</div>
                <br/>

                <div className={css(e.reason)}>
                    To make JavaScript
                    <span style={{color: "var(--c4)", "font-weight": "bold"}}> less cluttered</span>
                </div>
                <br/>
                <JSFizzBuzz/>

                <br/>

                <div className={css(e.reason)}>
                    To make JavaScript
                    <span style={{color: "var(--c1)", "font-weight": "bold"}}> less weird</span>
                </div>

                <br/>

                <div className={css(e.reason)}>
                    To make JavaScript
                    <span style={{color: "var(--c2)", "font-weight": "bold"}}> more expressive</span>
                </div>

                <br/>

                <div className={css(e.reason)}>
                    To make JavaScript
                    <span style={{color: "var(--c3)", "font-weight": "bold"}}> more functional</span>
                </div>

                <br/>

                <div className={css(e.reason)}>
                    To make JavaScript
                    <span style={{color: "var(--c5)", "font-weight": "bold"}}> more fun</span>
                </div>
            </div>
        </div>
    )
}
