import React from 'react';
import './page9Sub.css'

import ReactIScroll from 'react-iscroll';
import IScroll from 'iscroll/build/iscroll'
import Message from './Message'
import MessageDetail from './MessageDetail'

class MessageBar extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            deTailId: -1
        }
        this.showDetail = this.showDetail.bind(this);
        this.closeDetail = this.closeDetail.bind(this);
    }

    showDetail(messageId) {
        // alert(messageId);
        this.setState({
            deTailId: messageId
        })
    }

    closeDetail() {
        this.setState({
            deTailId: -1
        })
    }

    render() {
        const temp = [];

        let data = this.props.data;

        for (let i = 0; i < data.length; i++) {
            temp.push(
                <Message data={data[i].message} messageId={i} showDetail={this.showDetail}></Message>
            )
        }


        let options = {
            disablePointer: false, // important to disable the pointer events that causes the issues
            disableTouch: false, // false if you want the slider to be usable with touch devices
            disableMouse: true // false if you want the slider to be usable with a mouse (desktop)
        };

        return (
            <div>
                <div className="message-wall">
                    {/* 在head中禁用了指针加速 */}
                    <ReactIScroll iScroll={IScroll}
                        // options={this.props.options}
                        options={options}
                        onScrollStart={this.onScrollStart}>
                        <ul>
                            {temp}
                        </ul>
                    </ReactIScroll>
                </div>
                {this.state.deTailId === -1 ? <div/> : <MessageDetail data={data[this.state.deTailId]} closeDetail={this.closeDetail}/>}
            </div>
        )
    }
}

export default MessageBar;