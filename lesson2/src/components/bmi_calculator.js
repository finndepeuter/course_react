import { React, useState } from "react";

function Label({ text, value }) {
    var labelStyle = {
        fontFamily: "Verdana",
        fontSize : 20
    };

    return (
        <text style={labelStyle}>
            {text} {value}
        </text>

    );
}

function Slider({ value, min, max, onChange }) {
    return (
        <input type="range"
               value={value}
               min={min}
               max={max}
               onChange={(e) => onChange(parseFloat(e.target.value))} />
    );
}

function BmiSlider({text, value, min, max, onChange}) {
    return(
        <div>
        <Label text={text} value={value}/>
        <br/>
        <Slider value={value} min={min} max={max} onChange={onChange}/>
        </div>
    )
}

export default function BmiCalculator() {
        var backgroundStyle = {
            paddingLeft: 40,
            paddingRight: 40,
            paddingTop: 20,
            paddingBottom: 20,
            border: "#333 2px dotted",
            width: 450,
            borderRadius: 10,
            textAlign: "left"
        };

        var labelStyle = {
            fontFamily: "Verdana",
            fontSize : 40
        };


        const [height, setHeight] = useState(166);
        const [weight, setWeight] = useState(75);

        const calculateBMI = () => {
            return(
                weight/ ((height/100) * (height/100))
            ).toFixed(2);
        }

        const handleHeight = (newHeight) => {
            setHeight(newHeight);
        }
        const handleWeight = (newWeight) => {
            setWeight(newWeight);
        }

        return (
            <div style={backgroundStyle}>
                <div style={labelStyle}>BMI Calculator</div>
                <br />
                <BmiSlider text="Height:" value={height} min="0" max="200" onChange={handleHeight} />
                <br/>
                <BmiSlider text="Weight:" value={weight} min="0" max="300" onChange={handleWeight} />
                <br/>
                <BmiSlider text="BMI:" value={calculateBMI()} />
            </div>
        );
}