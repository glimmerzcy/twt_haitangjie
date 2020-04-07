import React from 'react';
import '../page.css'
import './page4.css'

class Page4 extends React.Component {
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
                <img className="background" src={require('./page4_background.jpg')} alt="page4"></img>
                <img id="word4" className="transparent-background" src={require('./page4_word.png')} alt="word"></img>
                <img className={this.state.leftArrowStyle} src={require('../leftArrow.png')} alt="leftArrow"></img>
                <div id="start-action4" onClick={this.startAction}></div>
                <div id="end-action4" onClick={this.endAction}></div>
            </div>
        )
    }
}

export default Page4;