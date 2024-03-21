import { useRouteError } from "react-router-dom";
const Error = () => {
    const error = useRouteError();
    return (
        <div>
            <h1>Error happened while routing</h1>
            <h2> Please Try again!!!</h2>
            <h3>{error.status} - {error.data}</h3>
        </div>
    )
}
export default Error;