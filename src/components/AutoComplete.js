import React from 'react'

export class AutoComplete extends React.Component {
    render() {
        return(
            <div>
                <input type="text" list="employees" className="auto-complete"></input>
                <datalist id="employees">
                    {this.props.options.map((opt, i) =>
                            <option key={i}>{opt.name}</option>)}
                </datalist>
            </div>
        )
    }
}

export class AutoSearch extends React.Component {
    render() {
        return(
            <div>
                <input type="text" className="auto-search" placeholder="filter data ..." onKeyUp={onMouseKeyChange}></input>
            </div>
        )
    }
}
//export default AutoComplete
