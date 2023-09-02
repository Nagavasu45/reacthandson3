import React from "react";
function Second(props){
   
  console.log(props)
    return (
      <>
        <h1>My name is </h1>
        <p>My favorite design tool is </p>
        <button onClick={props.togFunc}>Goback</button>
      </>
    );
}
export default Second