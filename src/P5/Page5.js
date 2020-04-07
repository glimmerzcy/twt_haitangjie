import React from 'react';
import '../page.css';
import './page5.css';
import {Link, NavLink} from 'react-router-dom';

class Page5 extends React.Component {
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
                <img className="background" src={require('./page5_background.jpg')} alt="page5"></img>
                <img id="word5" className="transparent-background" src={require('./page5_word.png')}></img>
                <Link to="leaveMessage"><img className="page5_button" src={require('./page5_button.png')} alt="点击留言"></img></Link>
                <img className={this.state.leftArrowStyle} src={require('../leftArrow.png')} alt="leftArrow"></img>
                <div id="start-action4" onClick={this.startAction}></div>
                <div id="end-action4" onClick={this.endAction}></div>
            </div>
        );
    }
}

export default Page5;