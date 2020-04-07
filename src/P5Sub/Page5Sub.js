import React from 'react';
import './page5Sub.css';
import {Link, NavLink} from 'react-router-dom'

class Page5Sub extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            // wordCountStyle: "words-count",
            numberOfWords: 0,
            inputText: "",
            nickname: ""
            // showMessageBar: false,
            // pageStyle: "page"
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.maxLength = 150;
        this.handleNickname = this.handleNickname.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();

        if (this.state.nickname.length === 0) {
            alert("您还没有输入昵称哦！");
            return;
        } else if (this.state.inputText.length === 0) {
            alert("您还没有输入留言哦!");
            return;
        }

        let data = new FormData();
        data.append("message", this.state.inputText);
        data.append("nickname", this.state.nickname);
        const settings = {
            method: 'POST',
            mode: 'no-cors',
            body: data,
            
            credentials: "include",
            redirect: 'follow'
        };
        var url = `https://haitang.twt.edu.cn/api/ms`;
        fetch(url, settings).then(function (response) {
            // alert()
            if (response.ok) {
                return response.json();
            } else throw(response.status)
        })
        .then((data) => {
            if (data.error_code === 0) {
                alert("留言成功,请返回浏览");
            } else {
                alert("留言失败,请重试");
            }
            // alert(data.error_code);
            // alert("留言成功！");
        }
        ).catch(function (error) {
            alert("留言失败,请重试");
            // alert("status: " + error)
            // alert('请求失败，请重试QAQ');
        });
        // alert(this.state.inputText);
    }

    handleChange(event) {
        event.preventDefault();
        // alert(event.target.value);
        // 直接统计字符串长度，未对换行、空格等特殊处理
        this.setState({
            inputText: event.target.value,
            numberOfWords: event.target.value.length

        });
        
    }

    handleNickname(event) {
        event.preventDefault();
        this.setState({
            nickname: event.target.value
        });
    }

    render() {
        return (
            <div className="page5Sub-page">
                <img className="message-background" src={require('./page5Sub_background.jpg')} alt=""></img>
                <textarea maxLength={20} className="nickname-input" onChange={this.handleNickname} placeholder="输入昵称,至多20字"></textarea>
                <textarea maxLength={this.maxLength} className="messageInput" onChange={this.handleChange}></textarea>
                <p className="words-count">{this.state.numberOfWords}/{this.maxLength}</p>
                <img className="message-button" src={require('./page5Sub_button.png')} alt="完成" onClick={this.handleSubmit}></img>
                <Link to="/#Page/5"><img className="page5Sub-back" src={require('./page5Sub_back.png')} alt="返回浏览"></img></Link>
            </div>
        );
    }
}

export default Page5Sub;