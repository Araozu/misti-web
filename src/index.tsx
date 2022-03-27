/* @refresh reload */
import { render } from "solid-js/web"
import "solid-js"
import App from "./App"
import "normalize.css"
import "./styles/global.css"
import "railroad-diagrams/railroad-diagrams.css"
import { language } from "./globalValues"
import {Router} from "solid-app-router"

console.log(`Using language=${language()}`)

render(
    () => <Router><App /></Router>,
    document.getElementById("root") as Node,
)
