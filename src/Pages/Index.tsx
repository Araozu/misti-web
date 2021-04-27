import { StyleSheet, css } from "aphrodite/no-important";
import { JSX } from "solid-js";
import { RouterLink } from "../Router";

const e = StyleSheet.create({
    padded: {
        paddingLeft: "4rem",
        paddingRight: "4rem",
    },
    reasonsTitle: {
        fontSize: "2.5rem",
        fontWeight: "bold",
        paddingTop: "2rem",
        paddingBottom: "4rem"
    },
    reason: {
        fontSize: "3.5rem"
    },
    reasonDescription: {
        fontSize: "2rem"
    },
    separator: {
        height: "1rem",
        width: "200%",
        animation: "gradientBG 60s linear infinite"
    }
});

function R(props: { children: JSX.Element }) {
    return (
        <span style={{"color": "#f44336", "font-weight": "bold"}}>{props.children}</span>
    )
}

function JSFizzBuzz() {
    const e = StyleSheet.create({
        container: {
            padding: "2rem",
            backgroundColor: "#151515",
            borderRadius: "10px"
        },
        e: {
            whiteSpace: "pre",
            fontFamily: "Ubuntu Mono, monospace",
            fontSize: "1.5rem",
            lineHeight: "2rem",
            color: "#bababa",
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
                <div className={css(e.reasonsTitle)}>But why?</div>
                <br/>

                <div className={css(e.reason)}>
                    JavaScript is&nbsp;
                    <span style={{color: "#f44336", "font-weight": "bold"}}>cluttered</span>
                </div>
                <br/>
                <JSFizzBuzz/>
                <p className={css(e.reasonDescription)}>
                    There's a lot of punctuation marks that obfuscate the logic of our programs
                </p>

                <br/>
                <br/>
                <br/>

                <div className={css(e.reason)}>
                    JavaScript is not fully&nbsp;
                    <span style={{color: "#04abfc", "font-weight": "bold"}}>expressive</span>
                </div>
                <p className={css(e.reasonDescription)}>
                    Our code isn't easily composable, and we are slowed down
                </p>
            </div>
        </div>
    )
}
