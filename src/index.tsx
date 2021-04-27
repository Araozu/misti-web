import "solid-js";
import { render } from 'solid-js/web';
import App from './App';
import "normalize.css";
import "./styles/global.css";
import "railroad-diagrams/railroad-diagrams.css";
import "highlight.js/styles/solarized-dark.css";
// import "highlight.js/styles/solarized-light.css";

render(App, document.getElementById('root') as Node);
