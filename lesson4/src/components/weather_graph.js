import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines';
import { useState} from 'react';

function WeatherGraph({data, city}) {
      const lineStyle = {
        fill: 'lightblue',
        stroke: 'blue', // Set your desired color here
        strokeWidth: 2, // Set the line width if needed
      };

    return (
      <div>
        <Sparklines data={data} style={{ width: '300px', height: '150px'}}>
            <SparklinesLine style={lineStyle} />
            <SparklinesReferenceLine type="mean" />
        </Sparklines>
      </div>
    )
}

export default WeatherGraph;