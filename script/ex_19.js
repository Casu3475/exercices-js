// -----------------------------------------------------
// PLEASE INSTALL REACT JS :)
// -----------------------------------------------------

import React, {useState} from "react";

// let datePicker = document.querySelector('body > div > div > footer > div')

function DatePick(){
    const [date,setDate]=useState();
    return(
        <div className="main">
        <h1>Selected Date : {date} </h1>
        <input type="date" onChange={e=>setDate(e.target.value)} />
        </div>
    );


}
export default DatePick;



