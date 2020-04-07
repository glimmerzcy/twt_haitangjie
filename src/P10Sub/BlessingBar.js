import React from 'react';
import './page10.css';

class BlessingBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            blessingMessage: "Hellow"
        };
        this.handleClose = this.handleClose.bind(this);
    }

    handleClose(event) {
        event.preventDefault();
        this.props.close();
    }

    render() {
        return (
            <div className="blessingBar">
                <div className="blessingBarCon">
                    <img className="blessingBackground" src={require('./blessingBar.jpg')}></img>
                    <p className="blessingMessage">{this.state.blessingMessage}</p>
                    <img className="completeButton" onClick={this.handleClose} src={require('./addus.png')}></img>
                </div>
            </div>
        );
    }
}

export default BlessingBar;