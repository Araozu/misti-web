import { StyleSheet, css } from "aphrodite/no-important";
import { createEffect, createSignal } from "solid-js";

export enum LoadingScreenStatus {
    DISABLED,
    ENABLED,
    DISABLING,
}

export function LoadingScreen(props: { status: LoadingScreenStatus }) {
    const e = StyleSheet.create({
        container: {
            display: "flex",
            position: "fixed",
            boxSizing: "border-box",
            zIndex: 100,
            width: "100%",
            height: "100%",
            fontSize: "3rem",
            fontWeight: "bold",
            top: 0,
            left: 0,
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#212121",
            transform: "translateX(-100%)",
            transition: "transform 200ms ease-in-out",
            borderRight: "5px solid",
            borderLeft: "5px solid",
            borderImage: `linear-gradient(
                35deg,
                #e7b711 0%, #e7b711 5%,
                #04abfc 10%, #04abfc 15%,
                #fca8d1 20%, #fca8d1 25%,
                #f44336 30%, #f44336 35%,
                #39b487 40%, #39b487 45%,
                #e7b711 50%, #e7b711 55%,
                #04abfc 60%, #04abfc 65%,
                #fca8d1 70%, #fca8d1 75%,
                #f44336 80%, #f44336 85%,
                #39b487 90%, #39b487 95%,
                #e7b711 100%
            ) 5`
        },
        containerCenter: {
            transform: "translateX(0) !important"
        },
        containerDisabling: {
            transform: "translateX(100%) !important"
        },
        containerHidden: {
            transition: "none !important"
        }
    });

    const [aditionalClass, setAditionalClass] = createSignal("");

    const enabledClass = css(e.containerCenter);
    const disablingClass = css(e.containerDisabling);
    const hiddenClass = css(e.containerHidden);

    createEffect(() => {
        if (props.status == LoadingScreenStatus.DISABLED) {
            setAditionalClass("");
        } else if (props.status == LoadingScreenStatus.ENABLED) {
            setAditionalClass(enabledClass);
        } else {
            setAditionalClass(disablingClass);
            setTimeout(() => {
                setAditionalClass(hiddenClass);
                setTimeout(() => setAditionalClass(""), 100);
            }, 210);
        }
    });

    return (
        <div className={css(e.container) + " " + aditionalClass()}>
            <span style={{color: "#e7b711", "font-weight": "bold"}}>M</span>
            <span style={{color: "#04abfc", "font-weight": "bold"}}>I</span>
            <span style={{color: "#fca8d1", "font-weight": "bold"}}>S</span>
            <span style={{color: "#f44336", "font-weight": "bold"}}>T</span>
            <span style={{color: "#39b487", "font-weight": "bold"}}>I</span>
        </div>
    )
}
