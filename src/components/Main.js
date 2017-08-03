import React from 'react';
import {Switch, Route} from "react-router-dom";
import EmployeeList from "./EmployeeList";
import Dashboard from "./Dashboard";
import Contact from "./Contact";

class Main extends React.Component {
    render() {
        return (
            <Switch>
                <Route exact path='/' component={Dashboard}/>
                <Route path='/loki' component={EmployeeList}/>
                <Route path='/description'>
                    <h1 style={{marginLeft: '10%'}}>Description page is under progress</h1>
                </Route>
                <Route path='/contact' component={Contact}/>
            </Switch>
        )
    }
}

export default Main