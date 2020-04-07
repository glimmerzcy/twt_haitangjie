import React from 'react';
import '../page.css'
import './page7.css'

class Page7 extends React.Component {
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
                <img className="background" src={require('./page7_background.jpg')} alt="page5"></img>
                <img id="word7" className="transparent-background" src={require('./page7_word.png')} alt="word"></img>
                <img className={this.state.leftArrowStyle} src={require('../leftArrow.png')} alt="向左滑动"></img>
                <div id="start-action7" onClick={this.startAction}></div>
                <div id="end-action7" onClick={this.endAction}></div>
            </div>
        )
    }
    
}

export default Page7;