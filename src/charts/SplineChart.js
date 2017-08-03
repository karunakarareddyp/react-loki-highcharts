import React from 'react'
import Chart from './BaseChart'

var options =  {

    chart: {
        borderRadius: 5,
        borderColor: 'white',
        borderWidth: 0.3,
        backgroundColor: {
            linearGradient: { x1: 0, y1: 0, x2: 1, y2: 1 },
            stops: [
                [0, '#2a2a2b'],
                [1, '#3e3e40']
            ]
        }
    },
    title: {
        text: 'Employment Growth',
        style: {
            color: '#E0E0E3',
            textTransform: 'uppercase',
            fontSize: '20px'
        }
    },
    credits: {
        enabled: false
    },
    xAxis: {
        gridLineColor: '#707073',
        labels: {
            style: {
                color: '#E0E0E3'
            }
        },
        lineColor: '#707073',
        minorGridLineColor: '#505053',
        tickColor: '#707073',
        title: {
            style: {
                color: '#A0A0A3'

            }
        }
    },
    yAxis: {
        gridLineColor: '#707073',
        labels: {
            style: {
                color: '#E0E0E3'
            }
        },
        lineColor: '#707073',
        minorGridLineColor: '#505053',
        tickColor: '#707073',
        title: {
            text: 'Number of Employees',
            style: {
                color: '#A0A0A3'
            }
        }
    },
    legend: {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'middle',
        itemStyle: {
            color: '#E0E0E3'
        },
        itemHoverStyle: {
            color: '#FFF'
        },
        itemHiddenStyle: {
            color: '#606063'
        }
    },

    plotOptions: {
        series: {
            pointStart: 2010,
            dataLabels: {
                color: '#B0B0B3'
            }
        }
    },

    series: [{
        name: 'Installation',
        data: [43934, 52503, 57177, 69658, 97031, 119931, 137133, 154175]
    }, {
        name: 'Manufacturing',
        data: [24916, 24064, 29742, 29851, 32490, 30282, 38121, 40434]
    }, {
        name: 'Sales & Distribution',
        data: [11744, 17722, 16005, 19771, 20185, 24377, 32147, 39387]
    }, {
        name: 'Project Development',
        data: [null, null, 7988, 12169, 15112, 22452, 34400, 34227]
    }, {
        name: 'Other',
        data: [12908, 5948, 8105, 11248, 8989, 11816, 18274, 18111]
    }]

}

class SplineChart extends React.Component {
    render() {
        return (
            <Chart container={this.props.container} options = {options}/>
        )
    }
}

export default SplineChart
