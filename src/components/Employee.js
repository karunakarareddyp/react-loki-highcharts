import React from 'react'
import PropTypes from 'prop-types'

class Employee extends React.Component{
    render() {
        let emp = this.props
        return(
            <tr>
                <td>{emp.id}</td>
                <td>{emp.name}</td>
                <td>{emp.age}</td>
            </tr>
        )
    }
}

Employee.propTypes = {
    id: PropTypes.number,
    name: PropTypes.string,
    age: PropTypes.number
}

export default Employee
