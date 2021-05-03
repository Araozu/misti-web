import { StyleSheet, css } from "aphrodite/no-important";

const e = StyleSheet.create({
    container: {
        padding: "1.5rem 1rem"
    }
});

export function Sidebar() {
    return (
        <div className={css(e.container)}>
            Language version:
            <br/>
            0.0.41
            <hr/>
            Misti tutorial:
            <br/>
            <br/>
            Motivation
            <br/>

            Basics
            <br/>
            Variables/Constants
            <br/>
            Datatypes
            <br/>
            Function calls
            <br/>
            Operators
            <br/>
            Tuples
            <br/>

            Flow control
            <br/>
            Conditionals
            <br/>
            Arrays
            <br/>
            Loops
            <br/>

            Functions
            <br/>
            Definition
            <br/>
            Parameters
            <br/>
            Custom operators
            <br/>
            Lambdas
            <br/>
            Utilities
            <br/>

            Objects
            <br/>

            Classes
            <br/>

            Modules
            <br/>
        </div>
    )
}
