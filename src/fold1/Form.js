
import React, {useState} from "react"

// import './hn2.css';
import Data from "./Data"

function Form(){

    var [state,setState]=useState({
        name:"",
        department:"",
        rating:"",
        empdata : []
    })
    var [toggle,togState]=useState(true)
       
    
    var changedata=(event)=>{
        setState({...state,[event.target.name]:event.target.value})
        
    }
    
    var handlesubmit=(e)=>{
        e.preventDefault()
        var tempobj={
            name:state.name,
            department:state.department,
            rating:state.rating
        }
        var tmp=[...state.empdata,tempobj]
        // state.empdata.push(tempobj)
        // console.log(state.empdata)
        setState({
            
            name:"",
            department:"",
            rating:"",
            empdata:tmp,
            
        })  
        togState(!toggle)
    }
    var TogglePage=()=>{
        togState({toggle:!toggle})
        
    }
    
   
        return(
            <>
            <h1>EMPLOYEE FEEDBACK FORM</h1>
            {toggle?<form>
                <label htmlFor="name">Name :
                </label>
                <input type="text" id="name" name="name" value={state.name} onChange={changedata} /><br/>
                <br/>
                <label htmlFor="department">Department :
                </label>
                <input  type="text" id="department" name="department" value={state.department} onChange={changedata} /><br/>
                <br/>
                <label htmlFor="rating">Rating :
                </label>
                <input type="number"  id="rating" name="rating" value={state.rating}  onChange={changedata}/><br/>
                <br/>
                <button onClick={handlesubmit}>submit</button>
            </form>:<Data value={{state,setState}} togFunc={TogglePage} />}            
            
            </>
        )
    }



export default Form