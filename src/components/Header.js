import React from 'react'
import {Link} from 'react-router-dom'
import $ from 'jquery'

class Header extends React.Component {
    constructor(props, context){
        super(props, context)

    }
    render() {
        $(".menu-nav li").click(function(e) {
            $('.menu-nav li').removeClass('active');
            $(this).addClass('active');
        })
        return (
            <nav className="menu-nav">
                <ul>
                    <li className="active"><Link to="/">Home</Link></li>
                    <li><Link to="/loki">Loki DB</Link></li>
                    <li><Link to="/dashboard">Dashboard</Link></li>
                    <li style={{float: "right"}}><Link to="/contact">Contact</Link></li>
                </ul>
            </nav>
        )
    }
}

export default Header
