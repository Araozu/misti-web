import { setAnimationActive } from "../loadingAnimationGlobal";
import { globalStyles } from "../globalStyles";
import { css } from "aphrodite/no-important";
import { Title } from "../components/Title";

export default function () {
    setAnimationActive(false);

    return (
        <div>
            <div className={css(globalStyles.padded)}>
                <Title title={"Grammar"}/>

                <p>To show the grammar we use Rail Diagrams, similar to the JSON spec.</p>
            </div>
        </div>
    )
}
