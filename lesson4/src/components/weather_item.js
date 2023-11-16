import configData from "../config.json";

function WeatherItem({ }) {
    var cardStyle = {
        textAlign: 'center',
        padding: 20,
        height: 280,
        backgroundColor: "#3399ff",
        filter: "drop-shadow(0px 0px 5px #888)"
    };

    var textStyle = {
        height: 50,
        color: "#FFFFFF"
    };

    var imageStyle = {
        width: 120
    };

    return (
      <div className="card" style={cardStyle}>
        <div style={textStyle}>
          {} °C - {}
        </div>
        <img style={imageStyle}
          alt="tile"
            src={configData.weatherapi + "static/" + "01n.png"} />
        <div className="card-section" style={textStyle}>
            <p>{} - {}</p>
        </div>
      </div>
    );

}

export default WeatherItem;
