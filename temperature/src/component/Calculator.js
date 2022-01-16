import React from "react";
import BoilingVerdict from "./BoilingVerdict";
import TemperatureInput from "./TemperatureInput";
export default class Calculator extends React.Component{
    state={
        temperature:"",
        scale:'c'
    }
    inputHandler=(e,scale)=>{
        this.setState({
            temperature:e.target.value,
            scale
        });
    }
    render(){
        const {temperature,scale}= this.state;
        return(
            <>
            <TemperatureInput temperature={temperature} scale={scale} onTemperatureChange={}/>
            <BoilingVerdict celsius={parseFloat(temperature)} />
            </>
        );
    }
}