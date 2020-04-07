import React from 'react';
import '../page.css'
import '../section.css'
import './page9Sub.css'
import { Link, NavLink } from 'react-router-dom'
import MessageBar from './MessageBar'

class Page9Sub extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            data: []
        };

    }

    componentDidMount() {
        const settings = {
            method: 'GET',
            mode: 'no-cors',
        };
        var url = `https://haitang.twt.edu.cn/api/mg`;
        var ans = [];
        fetch(url, settings).then(function (response) {
            if (response.ok) {
                return response.json();
            }
        })
        .then((data) => {
            ans = data.data.message;
            this.setState({
                data: ans
            })
            // alert('请求成功');
        }
        ).catch(function (error) {

            alert('无法获取留言,请重试');
        });

        // let ans = [
        //     {
        //         "nickname": "静态测试1",
        //         "message": "1.海棠好美呀海棠好美呀海棠好美呀海棠好美呀海棠好美呀"
        //     },
        //     {
        //         "nickname": "静态测试2",
        //         "message": "2.海棠好美呀海棠好美呀海棠好美呀海棠好美呀海棠好美呀"
        //     },
        //     {
        //         "nickname": "静态测试3",
        //         "message": "3.海棠好美呀海棠好美呀海棠好美呀海棠好美呀海棠好美呀"
        //     },
        //     {
        //         "nickname": "静态测试4",
        //         "message": "4.海棠好美呀海棠好美呀海棠好美呀海棠好美呀海棠好美呀"
        //     },
        //     {
        //         "nickname": "静态测试5",
        //         "message": "5.海棠好美呀海棠好美呀海棠好美呀海棠好美呀海棠好美呀"
        //     },
        //     {
        //         "nickname": "静态测试6",
        //         "message": "6.海棠好美呀海棠好美呀海棠好美呀海棠好美呀海棠好美呀"
        //     }
        // ]
        // this.setState({
        //     data: ans
        // })
    }



    render() {

        return (
            <div className="section">
                <div className="page">
                    <img className="page9Sub-background" src={require('./page9Sub_background.jpg')} alt=""></img>
                    <Link to="/#Page/9"><img className="page9Sub-back" src={require('./page9Sub_back.png')} alt="返回浏览"></img></Link>
                    <MessageBar data={this.state.data}></MessageBar>
                </div>
            </div>
        );
    }

}

export default Page9Sub;