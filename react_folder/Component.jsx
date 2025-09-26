import {useState} from "react" 
import Retrive from "./Retrive.jsx"

function Component(){
    const [count, setCount] = useState(0);
    return (
    <div>
      <h2>Component: It is a Small, reusable building blocks </h2>
      <h3>Count: {count} </h3>
      <button onClick={() => setCount(count + 1)}>Increase</button><small>Click on the "Increase" button to increment  count number</small><hr></hr>
        {<Retrive />}
    </div>
) 
}

export default Component;