import React from 'react';
import '../page.css'
import './page11.css'

class Page11 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            flowerStyle: "flower",
            leadStyle: "page11-lead"
        }
        this.twinkleFlower = this.twinkleFlower.bind(this);
        this.twinkleLead = this.twinkleLead.bind(this);
        this.startAction = this.startAction.bind(this);
        this.endAction = this.endAction.bind(this);
    }

    startAction(event) {
        event.preventDefault();
        this.flowerInterval = setInterval(()=> this.twinkleFlower(), 1500);
        this.leadInterval = setInterval(()=> this.twinkleLead(), 1000);
    }

    endAction(event) {
        event.preventDefault();
        clearInterval(this.flowerInterval);
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

    twinkleLead() {
        if (this.state.leadStyle == "page11-lead") {
            this.setState({
                leadStyle: "transparent-page11-lead"
            })
        } else {
            this.setState({
                leadStyle: "page11-lead"
            })
        }
    }

    render() {
        return (
            <div className="page">
                <img className="background" src={require('./page11_background.jpg')} alt="page11"></img>
                <img className={this.state.flowerStyle} src={require('./page11_flower.png')}></img>
                <img id="word11" className="transparent-background" src={require('./page11_word.png')}></img>
                <img className={this.state.leadStyle} src={require('./page11_lead.png')}></img>
                <div id="start-action11" onClick={this.startAction}></div>
                <div id="end-action11" onClick={this.endAction}></div>
            </div>
        )
    }
    
}

export default Page11;