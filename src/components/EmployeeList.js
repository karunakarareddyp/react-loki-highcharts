import React from 'react'
import {empdb} from '../json/empdb'
import Employee from './Employee'
import {AutoComplete, AutoSearch} from './AutoComplete'


class EmployeeList extends React.Component {
    //var data =  empdb.data
    constructor(props, context) {
        super(props, context);
        this.state = {
            data: empdb.data
        };
        this.onMouseKeyChange = this.onMouseKeyChange.bind(this)
    }

    onMouseKeyChange(evt) {
        var txt = evt.target.value
        //console.log(this.refs.autoSearch.value)
        var tmpList = empdb.data.filter(emp =>
               emp.name.includes(txt))
        this.setState({data: tmpList})
    }

    render() {
        return (
            <div>
                <div className="filter-div">
                    <AutoComplete
                        id="auto-search"
                        options={this.state.data}>
                    </AutoComplete>
                    <input ref="autoSearch" type="text" className="auto-search" placeholder="filter data ..."
                           onKeyUp={this.onMouseKeyChange.bind(this)}/>
                </div>
                <table>
                    <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Age</th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.state.data.map((emp, index) =>
                        <Employee
                            key={index}
                            id={emp.id}
                            name={emp.name}
                            age={emp.age}>
                        </Employee>
                    )}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default EmployeeList