import { LoadingState } from "../App";


export default function (props: { setLoadingState: (v: LoadingState) => LoadingState }) {

    props.setLoadingState(LoadingState.NORMAL);

    return (
        <div>
            <h1>Learn!</h1>
        </div>
    )
}
