var React = require('react')
import Chart from './BaseChart'

var options = {
    chart: {
        type: 'column'
    },
    title: {
        text: 'Fruit Consumption'
    },
    xAxis: {
        categories: ['Apples', 'Bananas', 'Oranges']
    },
    yAxis: {
        title: {
            text: 'Fruit 1'
        }
    },
    series: [{
        name: 'Jane',
        data: [1, 0, 4, 10, 29, 55, 5]
    }, {
        name: 'John',
        data: [5, 7, 3, 46, 44, 32, 9]
    }]
}

class BarChart extends React.Component {
    render() {
        return (
            <Chart container={this.props.container} options = {options}/>
        )
    }
}

export default BarChart
