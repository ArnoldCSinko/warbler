import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import Logo from "../images/warbler-logo.png";


class Navbar extends Component {
    
    render() {
        return ( 
            <nav className="navbar navbar-expand">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <Link to="/" className="navbar-brand">
                            <img src={Logo} alt="Warbler Home" /> 
                        </Link>
                    </div>                    
                
                    <ul className="nav navbar-nav nav-right">
                        <li>
                            <Link to="/signup" className="nav-link">Sign Up</Link>
                        </li>
                        <li>
                            <Link to="/signin" className="nav-link">Sign In</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}

function mapStateToProps(state) {
    return {
        currentUser: state.currentUser
    }
}

export default connect(mapStateToProps, null)(Navbar);