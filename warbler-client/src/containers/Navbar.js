import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import Logo from "../images/warbler-logo.png";
import { logout } from "../store/actions/auth";


class Navbar extends Component {
    logout = e => {
        e.preventDefault();
        this.props.logout();
    }
    render() {
        const { currentUser } = this.props;

        return (
            <nav className="navbar navbar-expand">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <Link to="/" className="navbar-brand">
                            <img src={Logo} alt="Warbler Home" />
                        </Link>
                    </div>
                    {!currentUser.isAuthenticated ? (
                        <ul className="nav navbar-nav nav-right">
                            <li>
                                <Link to="/signup" className="nav-link">Sign Up</Link>
                            </li>
                            <li>
                                <Link to="/signin" className="nav-link">Sign In</Link>
                            </li>
                        </ul>
                    ) : (
                            <ul className="nav navbar-nav nav-right">
                                <li>
                                    <Link to="/" className="nav-link">{currentUser.username}</Link>
                                </li>
                                <li>
                                    <Link to={`/users/${currentUser.user.id}/messages/new`} className="nav-link">New Message</Link>
                                </li>
                                <li>
                                    <a onClick={this.logout} className="nav-link">Logout</a>
                                </li>
                            </ul>
                        )}

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

export default connect(mapStateToProps, { logout })(Navbar);