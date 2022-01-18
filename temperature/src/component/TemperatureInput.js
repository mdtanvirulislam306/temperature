const tempScale = {
    c:'Celsius',
    f:'Fahrenheid'
}
export default function TemperatureInput({temperature,onTemperatureChange,scale}){
    return(
        <div>
        <fieldset>
                <legend className="text-white text-uppercase">Input temperature in {tempScale[scale]}</legend>
                <input type="text" className="form-control" value={temperature} onChange={(e)=>onTemperatureChange(e,scale)}/>
            </fieldset>
            </div>
    );
}