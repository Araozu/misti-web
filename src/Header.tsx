import { css, StyleSheet } from "aphrodite/no-important";
import { RouterLink } from "./Router";
import { LoadingState } from "./App";

const e = StyleSheet.create({
    titleContainer: {
        backgroundColor: "#212121",
        color: "#fefefe"
    },
    motto: {
        paddingTop: "4rem",
        paddingBottom: "1rem",
        fontSize: "4rem"
    },
    motto2: {
        padding: "0 4rem",
        fontSize: "2rem"
    },
    padded: {
        paddingLeft: "4rem",
        paddingRight: "4rem",
    },
});

function MainButton(props: { text: string, color: string }) {
    const e = StyleSheet.create({
        e: {
            padding: "0.8rem 1.25rem",
            fontSize: "1.25rem",
            // fontWeight: "bold",
            marginRight: "1rem",
            marginBottom: "5rem",
            border: `solid 3px ${props.color}`,
            textDecorationLine: "underline",
            // textDecorationColor: props.color,
            borderRadius: "2px",
            cursor: "pointer",
            ":hover": {
                color: "white"
            }
        }
    });
    const c = css(e.e);

    return (
        <button className={c}>
            {props.text}
        </button>
    )
}

export function Header(props: { setLoadingState: (v: LoadingState) => LoadingState }) {
    return (
        <div>
            <div>
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
                <br/>

                <div className={css(e.padded)}>
                    <RouterLink to={"/learn/"} onClick={() => props.setLoadingState(LoadingState.LOADING)}>
                        <MainButton text={"Learn"} color={"#04abfc"}/>
                    </RouterLink>
                    <MainButton text={"Install"} color={"#e7b711"}/>
                    <MainButton text={"Grammar"} color={"#39b487"}/>
                </div>
            </div>
        </div>
    )

}
