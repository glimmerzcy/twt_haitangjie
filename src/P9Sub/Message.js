import React from 'react';
import './page9Sub.css';

class Message extends React.Component {
    constructor(props) {
        super(props);
        this.handleCilck = this.handleCilck.bind(this);
    }

    handleCilck(event) {
        event.preventDefault();
        this.props.showDetail(this.props.messageId);
    }

    render() {
        let message = this.props.data;
        if (message.length > 10) {
            message = message.substr(0, 10) + "...";
        }
        return (
            <div className="message">
                <img className="message-unit" src={require('./message_unit.png')}></img>
                <p className="message-word">{message}</p>
                <img className="page9Sub-check" src={require('./page9Sub_check.png')} onClick={this.handleCilck}></img>
            </div>
            
        );
    }
}

export default Message;