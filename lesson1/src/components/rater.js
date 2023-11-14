function Label(props) {
    return(
        <div>{props.score}</div>
    );
}

function Star(props) {
    const starImage = props.mode === "On" ? require("../images/StarOn.png") : require("../images/StarOff.png");
    return (
        <img src={starImage} alt={`star${props.mode}`} width="20" height="20" />
    );
}

function Rater(props) {
    var raterStyle = {
        borderRadius: 20,
        backgroundColor: "white",
        width: 200,
        height: 50
    }
    let score = props.rating / props.max;
    
    let stars = [];
    for (var i = 1; i<= props.max; i++) {
        const mode = i <= props.rating ? "On" : "Off";
        stars.push(<Star key={i} mode={mode} />);
    }

    let text = "";
    switch (true) {
        default:
            text = "score";
            break;
        case (score < 0.1):
            text = "disaster" ;
            break;
        case (score < 0.3):
            text = "insufficient";
            break;
        case (score < 0.5 ):
            text = "sufficient" ;
            break;
        case (score < 0.6):
            text = "average" ;
            break;      
        case (score < 0.8):
            text = "good" ;
            break;
        case (score < 0.9):
            text = "very good" ;
            break;  
        case (score > 0.9):
            text = "excellent" ;
            break;      
    }

    return(
        <div style={raterStyle}>
            <Label score={text}/>
            {stars}
        </div>
    );
}

export default Rater;