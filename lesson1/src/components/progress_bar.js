function Label(props) {
    var labelStyle = {
        fontSize: 25,
        fontFamily: "Verdana",
        fontWeight: "bold",
        
    };
    return (
        <text x="180" y="25" fill={props.color} style={labelStyle}>{props.percentage} %</text>
    )
}

function Bar(props) {
    return(
        <g fill="none" stroke={props.color} stroke-width="25">
            <path stroke-linecap="round" d={`M20 55 l${props.percentage * 3.6} 0`} />
        </g>
    )
}

function ProgressBar(props) {
    return(
        <svg width="400" height="100">
        <g fill="none" stroke="lightgrey" stroke-width="25">
            <path stroke-linecap="round" d="M20 55 l360 0" />
        </g>
        <Bar percentage={props.percentage} color={props.color}/>
        <Label percentage={props.percentage} color={props.color}/>
        </svg>
    )
}

export default ProgressBar;