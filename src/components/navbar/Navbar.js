import React from 'react';
import "./navbar.css";
import {Link} from 'react-router-dom';

class Navbar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() { 
        return (
            <div className="navigation">
                <div className="navbar">
                    <Link to="/home">Home</Link>
                    <Link to="/about">About Me</Link>
                    <Link to="/movies">Movies</Link>
                    <Link to="/contact">Contact</Link>
                </div>
            </div>
        );
    }
}
 
export default Navbar;