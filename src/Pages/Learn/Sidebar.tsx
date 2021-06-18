import { StyleSheet, css } from "aphrodite/no-important";
import { createMemo, For } from "solid-js";
import { currentVersions } from "../../globalValues";

const e = StyleSheet.create({
    container: {
        padding: "1.5rem 1rem",
        overflowY: "scroll",
        height: "calc(100vh - 1.6rem)",
        boxSizing: "border-box"
    }
});

function SectionTitle(props: { text: string }) {
    const e = StyleSheet.create({
        container: {
            textTransform: "uppercase",
            opacity: 0.8,
            padding: "1.75rem 0.25rem 0.5rem 0.25rem",
        }
    });

    return (
        <div className={css(e.container)}>
            {props.text}
        </div>
    );
}

function SidebarLink(props: { text: string }) {
    const e = StyleSheet.create({
        container: {
            padding: "0.5rem 0.25rem",
            borderRadius: "2px",
            cursor: "pointer",
            ":hover": {
                backgroundColor: "var(--c3-transparent)"
            }
        }
    });

    return (
        <div className={css(e.container)}>
            {props.text}
        </div>
    );
}

export function Sidebar() {
    const versionsElement = createMemo(() => {
        const v = currentVersions();

        if (v.versions.length === 0) {
            return <p style={{opacity: 0.5}}>Loading...</p>
        } else {
            return (
                <For each={v.versions}>
                    {x => <p>{x}</p>}
                </For>
            );
        }
    });

    return (
        <div className={css(e.container)}>
            Language version:
            <br/>
            {versionsElement()}
            <hr/>

            <SectionTitle text={"Basics"}/>

            <SidebarLink text={"Variables & Constants"}/>
            <SidebarLink text={"Datatypes"}/>
            <SidebarLink text={"Function Calls"}/>
            <SidebarLink text={"Operators"}/>
            <SidebarLink text={"Tuples"}/>

            <SectionTitle text={"Flow control"}/>

            <SidebarLink text={"Conditionals"}/>
            <SidebarLink text={"Arrays"}/>
            <SidebarLink text={"Loops"}/>

            <SectionTitle text={"Functions"}/>

            <SidebarLink text={"Definition"}/>
            <SidebarLink text={"Parameters"}/>
            <SidebarLink text={"Lambdas"}/>
            <SidebarLink text={"Utilities"}/>
            <SidebarLink text={"Partial Application"}/>
            <SidebarLink text={"Custom operators"}/>

            <SectionTitle text={"Objects"}/>

            <SidebarLink text={"Definition"}/>
            <SidebarLink text={"Methods"}/>
            <SidebarLink text={"get & set"}/>
            <SidebarLink text={"this"}/>

            <SectionTitle text={"Classes"}/>

            <SidebarLink text={"Definition"}/>
            <SidebarLink text={"Inheritance"}/>

            <SectionTitle text={"Error Handling"}/>

            <SidebarLink text={"Exceptions"}/>

            <SectionTitle text={"Pattern Matching"}/>

            <SidebarLink text={"Switch"}/>
            <SidebarLink text={"Destructuring declarations"}/>
            <SidebarLink text={"Destructuring function parameters"}/>

            <SectionTitle text={"Modules"}/>

            <SidebarLink text={"Import"}/>
            <SidebarLink text={"Export"}/>

            <SectionTitle text={"JSX"}/>

            <SidebarLink text={"Definition"}/>

            <SectionTitle text={"Contracts"}/>

            <SidebarLink text={"Guards"}/>
            <SidebarLink text={"Preconditions"}/>
            <SidebarLink text={"Postconditions"}/>
            <SidebarLink text={"Invariants"}/>


        </div>
    )
}
