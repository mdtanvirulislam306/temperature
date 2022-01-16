const tempScale = {
    c:'celsius',
    f:'Fahrenheid',
}
export default function TemperatureInput({temperature,onTemperatureChange,scale}){
    return(
        <fieldset>
                <legend>Input temperature in {tempScale[scale]}</legend>
                <input type="text" value={temperature} onChange={this.inputHandler}/>
            </fieldset>
    );
}