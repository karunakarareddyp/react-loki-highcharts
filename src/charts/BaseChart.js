var React = require('react')
import Highcharts from 'highcharts/highstock'

class BaseChart extends React.Component {
    // When the DOM is ready, create the chart.
    componentDidMount() {
        // Extend Highcharts with modules
        if (this.props.modules) {
            this.props.modules.forEach(function (module) {
                module(Highcharts)
            })
        }
        Highcharts.setOptions({
            colors: ["#2b908f", "#90ee7e", "#f45b5b", "#7798BF", "#aaeeee", "#ff0066", "#eeaaee",
                "#55BF3B", "#DF5353", "#7798BF", "#aaeeee"]
        })
        // Set container which the chart should render to.
        this.chart = new Highcharts[this.props.type || 'Chart'](
            this.props.container,
            this.props.options
        )
    }
    // Destroy chart before unmount.
    componentWillUnmount() {
        this.chart.destroy()
    }
    render(){
        return(
            <div className="chart-style" id={this.props.container}/>
        )
    }
}

export default BaseChart

