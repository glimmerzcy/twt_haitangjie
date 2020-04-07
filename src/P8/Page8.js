import React from 'react';
import '../page.css'
import './page8.css'

class Page8 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            busStyle: "right-bus",
            leftArrowStyle: "page8-arrow"
            // bus1Style: "right-bus"
        }
        this.moveBus = this.moveBus.bind(this);
        this.startAction = this.startAction.bind(this);
        this.endAction = this.endAction.bind(this);
    
        this.twinkleLeftArrow = this.twinkleLeftArrow.bind(this);
    }

    startAction(event) {
        event.preventDefault();
        this.busInterval = setInterval(()=> this.moveBus(), 2000);
        this.leftArrowInterval = setInterval(()=> this.twinkleLeftArrow(), 1000);
    }

    endAction(event) {
        event.preventDefault();
        clearInterval(this.busInterval);
        clearInterval(this.leftArrowInterval);
    }

    moveBus() {
        if (this.state.busStyle == "left-bus") {
            setTimeout(()=>{
                this.setState({
                    busStyle: "right-bus"
                })
            }, 1000);
            // this.setState({
            //     busStyle: "right-bus"
            // })
        } else {
            this.setState({
                busStyle: "left-bus"
            })
        }
    }

    twinkleLeftArrow() {
        if (this.state.leftArrowStyle == "page8-arrow") {
            this.setState({
                leftArrowStyle: "transparent-page8-arrow"
            })
        } else {
            this.setState({
                leftArrowStyle: "page8-arrow"
            })
        }
    }

    render() {
        return (
        <div className="page">
            <img className="background" src={require('./page8_background.jpg')} alt="page8"></img>
            <img id="bus" className={this.state.busStyle} src={require('./page8_bus.png')} alt="bus"></img>
            <img className={this.state.leftArrowStyle} src={require('./leftArrow.png')} alt="leftArrow"></img>
            <div id="start-action8" onClick={this.startAction}></div>
            <div id="end-action8" onClick={this.endAction}></div>
        </div>
    )
    }
    
}

export default Page8;