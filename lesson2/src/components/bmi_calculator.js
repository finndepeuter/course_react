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

function Slider({ value, min, max, onChange }) => {
    return (
        <input type="range"
               value={value}
               min={min}
               max={max}
               onChange={onChange} />
    );
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

        return (
            <div style={backgroundStyle}>
                <div style={labelStyle}>BMI Calculator</div>
                <br />

            </div>
        );
}