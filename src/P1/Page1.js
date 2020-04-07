import React from 'react';
import '../page.css'
import './page1.css'

class Page1 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            flowerStyle: "flower",
            rippleStyle: "ripple"
        }
        this.twinkleFlower = this.twinkleFlower.bind(this);
        this.twinkleRipple = this.twinkleRipple.bind(this);
        this.loadWord = this.loadWord.bind(this);
        this.startAction = this.startAction.bind(this);
        this.endAction = this.endAction.bind(this);
    }

    startAction(event) {
        event.preventDefault();
        this.rippleInterval = setInterval(() => this.twinkleRipple(), 1000);
        this.flowerInterval = setInterval(()=> this.twinkleFlower(), 1500);
    }

    endAction(event) {
        event.preventDefault();
        clearInterval(this.rippleInterval);
        clearInterval(this.flowerInterval);
    }

    loadWord() {
        let word = document.getElementById("word1");
        word.className="background";
        let action1 = document.getElementById("start-action1");
        action1.click();
    }

    twinkleRipple() {
        if (this.state.rippleStyle === "transparent-ripple") {
            this.setState({
                rippleStyle: "ripple"
            })
        }
        else {
            this.setState({
                rippleStyle: "transparent-ripple"
            })
        }
    }

    twinkleFlower() {
        if (this.state.flowerStyle == "flower") {
            this.setState({
                flowerStyle: "transparent-flower"
            })
        } else {
            this.setState({
                flowerStyle: "flower"
            })
        }
    }

    render() {
        return (
            <div className="page">
                <img className="background" src={require('./page1_background.jpg')} onLoad={this.loadWord}></img>
                <img id="word1" className="transparent-background" src={require('./page1_word.png')}></img>
                <img className={this.state.flowerStyle} src={require('./page1_flower.png')}></img>
                <img className={this.state.rippleStyle} src={require('./page1_ripple.png')} onClick={this.props.nextSlide}></img>
                <div id="start-action1" onClick={this.startAction}></div>
                <div id="end-action1" onClick={this.endAction}></div>
            </div>
        )
    }
}

export default Page1;