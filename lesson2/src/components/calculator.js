import React, { useState } from 'react';


function Label({text}) {
    var labelStyle = {
        fontFamily: "Verdana",
        color: "#FFF",
        fontSize : 30
    };
    return(
        <p style={labelStyle}>{text}</p>
    )
}

function Button({value, onClick}) {
    var buttonStyle = {
        fontFamily: "Verdana",
        fontSize: 20,
        margin: 5,
        fontWeight: "bold",
        backgroundColor: "#CCCCCC",
        color: "#FFF",
        borderStyle: "solid",
        borderColor: "#CCCCCC",
        borderRadius: 5,
        width: 70,
        height: 70
    };
    return(
        <button style={buttonStyle} onClick={() => onClick(value)}>{value}</button>
    )
}

export default function Calculator() {
        var backgroundStyle = {
            paddingLeft: 40,
            paddingRight: 40,
            paddingTop: 20,
            paddingBottom: 20,
            backgroundColor: "#00ace6",
            width: 330,
            borderRadius: 10,
            textAlign: "left"
        };

        const [shownValue, setShownValue] = useState("");

        const handleClick = (v) => {
            switch (v) {
                case 'C':
                    setShownValue(""); //set to empty
                    break;
                case '=':
                    setShownValue(eval(shownValue)); // remove the last number
                    break;
                default:
                    setShownValue(shownValue + v);
                    break;
            }
        }

        var numbers = ["7", "8", "9", "+", "4", "5", "6", "-", "1", "2", "3", "*", "C", "0", "=", "/"];
        const rows = [];
        for (let i = 0; i < numbers.length; i += 4) {
            const row = numbers.slice(i, i + 4);
            rows.push(row);
        }
        return (
            <div style={backgroundStyle}>
                <Label text={shownValue}/>
                {rows.map((row, rowIndex) => (
                <div key={rowIndex}>
                    {row.map((number, index) => (
                        <Button key={index} value={number} onClick={handleClick} />
                    ))}
                </div>
            ))}
            </div>
        );
}