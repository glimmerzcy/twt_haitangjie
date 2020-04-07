import React from 'react';
import '../page.css'
import './page10.css'
import {Link, NavLink} from 'react-router-dom'

class Page10Sub extends React.Component {

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
                <img className="background" src={require('./page10_background.jpg')}></img>
                <img id="word10" className="transparent-background" src={require('./page10_word.png')} alt="word"></img>
                <Link to="blessingMessage"><img className="page10_button" src={require('./page10_button.png')} alt="随机取祝福"></img></Link>
                <img className={this.state.leftArrowStyle} src={require('../leftArrow.png')} alt="向左滑动"></img>
                <div id="start-action10" onClick={this.startAction}></div>
                <div id="end-action10" onClick={this.endAction}></div>
            </div>
        );
    }

}

export default Page10Sub;