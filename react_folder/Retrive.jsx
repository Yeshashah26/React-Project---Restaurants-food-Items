import {useState} from "react"
import Listing from "./Listing.jsx"

function Retrive() {
    const [fetch, setFetch] = useState(null)
    function Data(){
        const student = {
            name: "ABC", age: 34
        }
        setFetch(student)
    }
    return (
        <>
            <h2>Importing Retrive component to fetch data from the object </h2>
            <button onClick={Data}>Retrive data from object</button>
            <small>Click on the button to fetch the data</small>
            {fetch && (
            <div>
                {Object.entries(fetch).map(([key,value]) => (
                <h2 key={key}>
                    {key} : {value}
                </h2>
                ))}
            </div>
            )}<hr></hr>
             {<Listing /> }<hr></hr>
        </>
    );
}
    
export default Retrive;