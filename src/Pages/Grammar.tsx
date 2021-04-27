import { LoadingScreenStatus } from "../LoadingScreen";

export default function (props: { setLoadingState: (v: LoadingScreenStatus) => LoadingScreenStatus }) {

    props.setLoadingState(LoadingScreenStatus.DISABLING);

    return (
        <div>
            Grammar
        </div>
    )
}
