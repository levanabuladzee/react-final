import React from 'react';
import { Link } from 'react-router-dom';
import "./home.css";

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isMouseInside: false,
        }
    }

    handleMouseEnter = () => {
        this.setState({isMouseInside: true});
    }

    handleMouseOut = () => {
        this.setState({isMouseInside: false})
    }

    render() { 
        return (
            <div className="home">
                <div className="browse-container">
                    <div onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseOut} className="browse">
                        {this.state.isMouseInside ?
                        <Link to="/movies" className="browse-link is-white">BROWSE</Link> 
                        : <Link to="/movies" className="browse-link">BROWSE</Link> }

                        {this.state.isMouseInside ?
                        <div className="background-button is-hover"></div> 
                        : <div className="background-button"></div>}
                    </div>
                </div>
            </div>
        );
    }
}
 
export default Home;