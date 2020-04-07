import React from 'react';
import '../page.css'
import './page9.css'
import {Link, NavLink} from 'react-router-dom';

class Page9 extends React.Component {

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
                <img className="background" src={require('./page9_background.jpg')}></img>
                <img id="word9" className="transparent-background" src={require('./page9_word.png')}></img>
                <Link to="checkMessage"><img className="page9-button" src={require('./page9_button.png')} alt="查看留言"></img></Link>
                <img className={this.state.leftArrowStyle} src={require('../leftArrow.png')} alt="向左滑动"></img>
                <div id="start-action9" onClick={this.startAction}></div>
                <div id="end-action9" onClick={this.endAction}></div>
            </div>
        );
    }
    
}

export default Page9;