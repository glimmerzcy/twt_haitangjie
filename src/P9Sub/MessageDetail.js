import React from 'react';
import './page9Sub.css'

class MessageDetail extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <img className="page9Sub-background" src={require('./detail_background.jpg')} alt=""></img>
                <img className="page9Sub-back" src={require('./page9Sub_back.png')} alt="返回" onClick={this.props.closeDetail}></img>
                <div className="message-detail">
                    <p className="message-detail-nickname">{this.props.data.nickname}:</p>
                    <p className="message-detail-word">{this.props.data.message}</p>
                </div>
                
            </div>
            // <div className="message-detail">
            //     <img className="message-detail-background" src={require('./detail_background.png')}></img>
            //     <p className="message-detail-word">{this.props.data.nickname}:<br/>{this.props.data.message}</p>

            // </div>
        );
    }
}

export default MessageDetail;