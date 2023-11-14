function Header(props) {
    var headerStyle = {
        fontSize: 50,
        color: "#e65100",
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        backgroundColor: "#ff9800"
    };

    return(
        <div style={headerStyle}>{props.number}</div>
    );
}

function numberToWord(number) {
    const words = ["Zero", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine"];
    return words[number];
}

function Row(props) {
    var cellStyle = {
        fontSize : 20,
        color: "#455a64"
    };

    let output = props.factor1 * props.factor2;
    
    return(
        <div style={cellStyle}>{props.factor1} x {props.factor2} = {output}</div>
    );
}

function MultiplicationTable(props) {
    var tableStyle = {
        fontFamily : "Comic Sans MS",
        textAlign: "center",
        width: 200,
        padding: 0,
        borderRadius: 20,
        backgroundColor: "#ffe0b2",
        filter: "drop-shadow(0px 0px 5px #666)"
    };

    let output = [];
    for (var i = 1; i <= 10; i++) {
        output.push(<Row factor1={i} factor2={props.number}/>)
    }


    return(
        <div style={tableStyle}>
            <Header number={numberToWord(props.number)}/>
            {output}
        </div>
    );
    
}

export default MultiplicationTable;