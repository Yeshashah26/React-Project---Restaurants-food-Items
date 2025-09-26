import { useState } from "react"


function Listing(){
    const list = ["hello", 'Y', 23, 4.5, 'null',90,undefined,null];
    return (
        <div>
            <h2>Importing Listing Component to display the data of List</h2>
            ListItem: [ { list.map((value,index) => (
                     <span key={index}>
                       {index} : {value},
                    </span>
                ))} ]
        </div>
    );
}

export default Listing;