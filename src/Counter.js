import React from "react";
import Header from "./Header";
import Button from "./Button";
import Display from "./Display";
class  Counter extends React.Component{
    constructor(){
        super();
        this.state={
            count:2,
        }
    }
    handleIncrement=()=>{
        this.setState((prevState)=>{
            return{count:prevState.count+1}
        });
    }
    handleDecrement=()=>{
        this.setState((prevState)=>{
            return{count:prevState.count-1}
        });
    }
      

    
    render(){
        return(
            <div>
            <Header/>
            <Button onClick={this.handleIncrement}btnText="+"/>
            <Display displayValue={this.state.count}/>
            <Button onClick={this.handleDecrement} btnText="-"/>

            
 
            </div>
            
        );
    }
}

export default Counter;