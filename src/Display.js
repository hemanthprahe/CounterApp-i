import React from "react";
class Display extends React.Component{
    render(){
        return(
            <div>
                <p class="dis">{this.props.displayValue}</p>
            </div>
        );
    }
}
export default Display;