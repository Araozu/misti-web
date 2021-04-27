import { setAnimationActive } from "../loadingAnimationGlobal";
import { globalStyles } from "../globalStyles";
import { css } from "aphrodite/no-important";
import { Title } from "../components/Title";

const R = require("railroad-diagrams/railroad-diagrams");
const hljs = require("highlight.js/lib/core");
const ebnf = require("highlight.js/lib/languages/ebnf");
hljs.registerLanguage("ebnf", ebnf);

function Number() {
    const el = <div/>
    const diagram = R.Diagram(
        R.Sequence(
            R.OneOrMore("digit"),
            R.Optional(
                R.Sequence(
                    ".",
                    R.OneOrMore("digit")
                )
            )
        )
    );

    return <div>
        {diagram.toSVG()}
    </div>
}

export default function () {
    setAnimationActive(false);

    setTimeout(() => {
        hljs.highlightAll();
    }, 0);

    return (
        <div>
            <div className={css(globalStyles.padded)}>
                <Title title={"Grammar"}/>

                <p>This is no formal grammar, this justs represents the language.</p>

                <p>When grouping many rules:</p>

                <p><code>{" [ ]  "}</code> means zero or one</p>
                <p><code>{"[| |]"}</code> means one or more</p>
                <p><code>{" { }  "}</code> means zero or more</p>

                <h2>Number</h2>

                <pre>
                    <code class="language-ebnf">
                        digit = "0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9"
                        <br/>
                        number = {`{digit} ["." {digit}]`}
                    </code>
                </pre>

                <Number/>

                <h2>String</h2>
                <pre>
                    <code class="language-ebnf">
                        string = "\\\"" {`{any_character_except "\\\\""}`} "\\\""
                    </code>
                </pre>

                <h2>Boolean</h2>
                <pre>
                    <code className="language-ebnf">
                        boolean = "true" | "false"
                    </code>
                </pre>

                <h2>Unit</h2>
                <pre>
                    <code className="language-ebnf">
                        unit = "()"
                    </code>
                </pre>

                <h2>Undefined</h2>
                <pre>
                    <code className="language-ebnf">
                        undefined = unit | "undefined"
                    </code>
                </pre>

                <h2>Identifier</h2>

                <pre>
                    <code className="language-ebnf">
                        uppercase = "A" | "B" | "C" | "D" | "E" | "F" | "G" | "H" | "I" | "J" | "K" | "L" | "M" | "N" | "O" | "P" | "Q" | "R" | "S" | "T" | "U" | "V" | "W" | "X" | "Y" | "Z" | "Ñ"
                        <br/>
                        lowercase = "a" | "b" | "c" | "d" | "e" | "f" | "g" | "h" | "i" | "j" | "k" | "l" | "m" | "n" | "o" | "p" | "q" | "r" | "s" | "t" | "u" | "v" | "w" | "x" | "y" | "z" | "ñ"
                        <br/>
                        first_char = "_" | uppercase | lowercase | "$"
                        <br/>
                        rest = "'" | digit | first_char
                        <br/>
                        <br/>
                        identifier = first_char rest
                    </code>
                </pre>

                <h2>Operator</h2>
                <pre>
                    <code className="language-ebnf">
                        symbol = "+" | "-" | "=" | "*" | "!" | "\" | "/" | "'" | "|" | "@" | "#" | "·" | "$" | "~" | "%" | "¦" | "&" | "?" | "¿" | "¡" | "&lt;" | "&gt;" | "€" | "^" | "-" | "." | ":" | " |" | ";"
                        <br/>
                        operator = [|symbol|]
                    </code>
                </pre>

                <h2>Constant</h2>
                <pre>
                    <code className="language-ebnf">
                        constant = "val" identifier "=" (expression | block)
                    </code>
                </pre>

                <h2>Variable</h2>
                <pre>
                    <code className="language-ebnf">
                        variable = "var" identifier "=" (expression | block)
                    </code>
                </pre>

                <h2>Function declaration</h2>
                <pre>
                    <code className="language-ebnf">
                        function_declaration = "fun" identifier (unit | identifier+) "=" (expression | block)
                    </code>
                </pre>

                <h2>Function call</h2>
                <pre>
                    <code className="language-ebnf">
                        function_call = expression expression
                    </code>
                </pre>

                <h2>Operator application</h2>
                <pre>
                    <code className="language-ebnf">
                        operator_application = expression operator expression
                    </code>
                </pre>

                <h2>Block</h2>
                <p>Here all identation must have the same length.</p>
                <pre>
                    <code className="language-ebnf">
                        block = [|indentation (constant | variable | function_declaration | expression)|]
                    </code>
                </pre>

                <h2>Conditional</h2>
                <pre>
                    <code className="language-ebnf">
                        (* inline conditional *)
                        <br/>
                        conditional1 = "if" expression "do" (expression | block)
                        <br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        {`{"elif" expression "do" (expression | block)}`}
                        <br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        {`["else" (expression | block)]`}
                        <br/>
                        <br/>
                        (* block conditional - indentation implies new line *)
                        <br/>
                        conditional2 = indentation "if" expression "do" (expression | block)
                        <br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        indentation {`{"elif" expression "do" (expression | block)}`}
                        <br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        indentation {`["else" (expression | block)]`}
                        <br/>
                        <br/>
                        conditional = conditional1 | conditional2
                    </code>
                </pre>

                <h2>Loops</h2>
                <pre>
                    <code className="language-ebnf">
                        while_loop = "while" expression "do" (expression | block)
                        <br/>
                        for_in = "for" expression "in" expression "do" (expression | block)
                        <br/>
                        for_of = "for" expression "of" expression "do" (expression | block)
                    </code>
                </pre>

            </div>
        </div>
    )
}
