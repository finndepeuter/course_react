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

function Button({value}) {
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
        <button style={buttonStyle}>{value}</button>
    )
}

export default function Calculator() {
        var backgroundStyle = {
            paddingLeft: 40,
            paddingRight: 40,
            paddingTop: 20,
            paddingBottom: 20,
            backgroundColor: "#00ace6",
            width: 260,
            borderRadius: 10,
            textAlign: "left"
        };

        var numbers = ["7", "8", "9", "4", "5", "6", "1", "2", "3", "C", "0", "Del"];
        const rows = [];
        for (let i = 0; i < numbers.length; i += 3) {
            const row = numbers.slice(i, i + 3);
            rows.push(row);
        }
        return (
            <div style={backgroundStyle}>
                <Label text="2453"/>
                {rows.map((row, rowIndex) => (
                <div key={rowIndex}>
                    {row.map((number, index) => (
                        <Button key={index} value={number} />
                    ))}
                </div>
            ))}
            </div>
        );
}