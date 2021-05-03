import { css, StyleSheet } from "aphrodite/no-important";
import { RouterLink, useRoute } from "./Router";
import { setAnimationActive } from "./loadingAnimationGlobal";
import { Show } from "solid-js";

const e = StyleSheet.create({
    titleContainer: {
        backgroundColor: "#212121",
        color: "#fefefe"
    },
    motto: {
        paddingTop: "3rem",
        paddingBottom: "1rem",
        fontSize: "3rem"
    },
    motto2: {
        padding: "0 4rem",
        fontSize: "1.25rem"
    },
    padded: {
        paddingLeft: "4rem",
        paddingRight: "4rem",
    },
});

function MainButton(props: { text: string, color: string, onClick?: () => void }) {
    const e = StyleSheet.create({
        e: {
            padding: "0.6rem 1rem",
            fontSize: "1rem",
            // fontWeight: "bold",
            marginRight: "1rem",
            marginBottom: "2rem",
            marginTop: "2rem",
            border: `solid 3px ${props.color}`,
            textDecorationLine: "underline",
            backgroundColor: "var(--bg-color)",
            color: "var(--color)",
            borderRadius: "2px",
            cursor: "pointer",
            ":hover": {
                color: "white",
                backgroundColor: props.color,
            }
        }
    });
    const c = css(e.e);

    return (
        <button className={c} onClick={props.onClick}>
            {props.text}
        </button>
    )
}

export function Header(props: { setColorMode: (v: string) => string }) {
    const route = useRoute();

    const changeColorScheme = () => {
        const currentMode = localStorage?.getItem("color-mode") ?? "dark";
        const newMode = currentMode === "dark" ? "light" : "dark";
        localStorage.setItem("color-mode", newMode);
        props.setColorMode(newMode);
    };

    return (
        <div>
            <div>
                <Show when={route() === "/"}>
                    <div className={css(e.motto, e.padded)}>
                        A&nbsp;
                        <span style={{color: "#e7b711", "font-weight": "bold"}}>F</span>
                        <span style={{color: "#04abfc", "font-weight": "bold"}}>A</span>
                        <span style={{color: "#fca8d1", "font-weight": "bold"}}>N</span>
                        <span style={{color: "#f44336", "font-weight": "bold"}}>C</span>
                        <span style={{color: "#39b487", "font-weight": "bold"}}>Y</span>
                        &nbsp;programming language
                        <br/>
                        that increases productivity
                    </div>

                    <p className={css(e.motto2)}>Convert your JavaScript today!</p>
                </Show>

                <div className={css(e.padded)}>
                    <RouterLink to={"/learn/"} onClick={() => setAnimationActive(true)}>
                        <MainButton text={"Learn"} color={"#04abfc"}/>
                    </RouterLink>
                    <MainButton text={"Install"} color={"#e7b711"}/>
                    <RouterLink to={"/grammar/"} onClick={() => setAnimationActive(true)}>
                        <MainButton text={"Grammar"} color={"#39b487"}/>
                    </RouterLink>
                    <MainButton text={"Change colors"} color={"var(--c3)"} onClick={changeColorScheme}/>
                </div>
            </div>
        </div>
    )

}
