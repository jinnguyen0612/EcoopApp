import { LineChart, Grid } from 'react-native-svg-charts';
import React from 'react';
import * as shape from 'd3-shape';
import {View} from 'react-native';


export const createAverageValuesArray = (data) => {
    const averageValue = data.reduce((a, b) => a + b) / data.length;
    return Array(data.length).fill(averageValue);
}

export const LineChartWithAverage = ({data}) => {

    const averageValuesArray = createAverageValuesArray(data);
    const dataWithAverageValue = data.map((value, index) => ({
        value,
        average: averageValuesArray[index]
    }));

    return (
        <>
            <View>
                <LineChart

                    style={{height:150}}
                    gridMin={-50}
                    gridMax={150}
                    data={data}
                    curve={shape.curveNatural}
                    svg={{
                        stroke: '#06B752',
                        strokeWidth:2
                    }}
                    contentInset={{ top: 0, bottom: 10 , left:10}}>
                </LineChart>
            </View>
        </>
    );
}
