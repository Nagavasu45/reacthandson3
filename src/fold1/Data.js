import React, { Component } from "react";
import './Hn3.css'

class Data extends Component {
    constructor(props){
        super(props)
        console.log(this.props) 
    }        
        render(){
            return (  

                <>
                <div className="one">
                {this.props.value.state.empdata.map((item)=>{
                    return(
                        <div className="two">
                            <span>Name:{item.name}</span> | <span>Department:{item.department}</span>| <span>Rating:{item.rating}</span>  
                        {/* <div>{item.name}
                        </div>
                        <div>{item.department}
                        </div>
                        <div>{item.rating}
                        </div> */}
                        </div>
                )
                })}
                
                
                </div>
                <button onClick={this.props.togFunc}>Goback</button>
                
                </>
    
            )

        }

        
}

export default Data
