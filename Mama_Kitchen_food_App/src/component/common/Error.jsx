import { useRouteError } from "react-router";

const Error = () => {
    const  err = useRouteError();
    console.log(err);
    return (
        <div>
            <h1>Oops!!</h1>
            <h3>We got an Error...!!</h3>
            <h4>{err.status} : {err.statusText}</h4>
            {/* <p>{err.error.message}</p> */}
        </div>
    )
}

export default Error;