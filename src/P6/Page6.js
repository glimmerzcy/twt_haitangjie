import React from 'react';
import {Link, NavLink} from 'react-router-dom';
import '../page.css';
import './page6.css';

class Page6 extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            leftArrowStyle: "leftArrow"
        }
        this.twinkleLeftArrow = this.twinkleLeftArrow.bind(this);
        this.startAction = this.startAction.bind(this);
        this.endAction = this.endAction.bind(this);
    }

    startAction(event) {
        event.preventDefault();
        this.leftArrowInterval = setInterval(()=> this.twinkleLeftArrow(), 1000);
    }

    endAction(event) {
        event.preventDefault();
        clearInterval(this.leftArrowInterval);
    }

    twinkleLeftArrow() {
        if (this.state.leftArrowStyle == "leftArrow") {
            this.setState({
                leftArrowStyle: "transparent-leftArrow"
            })
        } else {
            this.setState({
                leftArrowStyle: "leftArrow"
            })
        }
    }

    render() {
        
        return (
            <div className="page">
                <img className="background" src={require('./page6_background.jpg')} alt="page6"></img>
                <img id="word6" className="transparent-background" src={require('./page6_word.png')}></img>
                <img className={this.state.leftArrowStyle} src={require('../leftArrow.png')} alt="向左滑动"></img>
                <div id="start-action6" onClick={this.startAction}></div>
                <div id="end-action6" onClick={this.endAction}></div>
                <Link to="headImage"><img className="page6-button" src={require('./page6_button.png')} alt="领取头像"></img></Link>
            </div>
        );
    }
}

export default Page6;