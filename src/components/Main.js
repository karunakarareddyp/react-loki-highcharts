import React from 'react';
import {Switch, Route} from "react-router-dom";
import EmployeeList from "./EmployeeList";
import Dashboard from "./Dashboard";
import Contact from "./Contact";

class Main extends React.Component {
    render() {
        return (
            <Switch>
                <Route exact path='/'>
                    <h1 style={{marginLeft: '10%'}}>Home page - Building first React application</h1>
                </Route>
                <Route path='/loki' component={EmployeeList}/>
                <Route path='/dashboard' component={Dashboard}/>
                <Route path='/contact' component={Contact}/>
            </Switch>
        )
    }
}

export default Main