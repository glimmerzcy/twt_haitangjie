import React from 'react';
import '../page.css'
import './page2.css'

class Page2 extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="page">
                <img className="background" src={require('./page2_background.jpg')} alt="page2"></img>
                <img className="page2_button" src={require('./page2_button.png')} alt="button" onClick={this.props.nextSlide}></img>
            </div>
        )
    }
}

export default Page2;