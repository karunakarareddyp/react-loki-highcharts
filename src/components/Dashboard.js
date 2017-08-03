import React from 'react'
import BarChart from '../charts/BarChart'
import SplineChart from "../charts/SplineChart";

const Dashboard = () => {
    return (<div className="chart-container">
            <SplineChart container="spline1"/>
            <BarChart container="column"/>
            <SplineChart container="spline2"/>
            <SplineChart container="spline3"/>
            <BarChart container="column2"/>
            <SplineChart container="spline4"/>
        </div>
    )
}
export default Dashboard