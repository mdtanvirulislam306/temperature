import React from "react";
import BoilingVerdict from "./BoilingVerdict";
import TemperatureInput from "./TemperatureInput";
import {convert,toCelsius,toFarhenheid} from "../lib/Convertor";
export default class Calculator extends React.Component{
    state={
        temperature:"",
        scale:null
    }
    inputHandler=(e,scale)=>{
        this.setState({
            temperature:e.target.value,
            scale,
        });
    }
    render(){
        const {temperature,scale}= this.state;
        const celsius = scale=='f'?convert(temperature,toCelsius):temperature;
        const ferhenheid = scale=='c'?convert(temperature,toFarhenheid):temperature;
       
        return(
            <div className="col-md-6 m-auto p-5 bg-info text-center mt-5">
            <TemperatureInput temperature={celsius} scale={'c'} onTemperatureChange={this.inputHandler}/>
            <TemperatureInput temperature={ferhenheid} scale={'f'} onTemperatureChange={this.inputHandler}/>
            <div className="text-danger">
            <BoilingVerdict temp={celsius} />
            </div>
            </div>
        );
    }
}