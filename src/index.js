import React from 'react'
import ReactDOM from 'react-dom'
import './json/empdb'
import {BrowserRouter} from 'react-router-dom'

import App from './App'

ReactDOM.render(
    <BrowserRouter >
        <App/>
    </BrowserRouter>,
    document.getElementById('container'))
