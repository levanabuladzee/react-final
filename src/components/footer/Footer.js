import React from 'react';
import './footer.css'

class Footer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() { 
        return (
            <div className="footer">
                <p style={{color: '#f5f5f1'}} className="footer-creator">&#169; Levan Abuladze</p>
            </div>
        );
    }
}
 
export default Footer;