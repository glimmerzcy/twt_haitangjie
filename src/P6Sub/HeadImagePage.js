import React from 'react';
import '../page.css';
import './headImagePage.css';
import {Link, NavLink} from 'react-router-dom';

class HeadImagePage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            leftArrowStyle: "page6Sub-left",
            imgSrc: null
        }

        this.canvas = React.createRef();
        this.canvasSideLength = 800;
        this.drawImage = this.drawImage.bind(this);

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
        if (this.state.leftArrowStyle == "page6Sub-left") {
            this.setState({
                leftArrowStyle: "transparent-page6Sub-left"
            })
        } else {
            this.setState({
                leftArrowStyle: "page6Sub-left"
            })
        }
    }

    componentDidMount() {
        const settings = {
            method: 'GET',
            mode: 'no-cors',
            credentials: 'include'
        };
        var url = `https://haitang.twt.edu.cn/api/hg`;
        fetch(url, settings).then(function (response) {
            if (response.ok) {
                return response.json();
            }
        })
        .then((res) => {
            this.drawImage(res.data.headimg)
        }
        ).catch(function (error) {
            // alert('很抱歉, 无法获取您的头像');
            // if (this.props.imageId == 1) {
                // alert('很抱歉, 无法获取您的头像');
            // }
        });
        // this.drawImage(require('./headImage/12.jpg'))

        if (this.props.imageId == 1) {
            let action = document.getElementById("start-action1");
            action.click();
        }
    }

    drawImage(url) {
        // alert(url);
        let myCanvas = this.canvas.current;
        let ctx = myCanvas.getContext("2d");
        // alert(myCanvas.height);

        let headimg = new Image();
        headimg.setAttribute("crossOrigin",'Anonymous')
        headimg.src = url;

        let pm1 = new Promise((res) => {
            headimg.onload = res;
        });

        let imgBorder = new Image();
        // imgBorder.src = require('./headImage/12.jpg');
        imgBorder.src=require('./headImage/' + this.props.imageId + '.png');

        let pm2 = new Promise((res) => {
            imgBorder.onload = res;
        });

        myCanvas.height = this.canvasSideLength;
        myCanvas.width = this.canvasSideLength;

        Promise.all([pm1, pm2]).then((res) => {
            ctx.drawImage(headimg, 0, 0, this.canvasSideLength, this.canvasSideLength);
            ctx.drawImage(imgBorder, 0, 0, this.canvasSideLength, this.canvasSideLength);
            let img = myCanvas.toDataURL("image/png");
            this.setState({
                imgSrc: img,
            })
        });
    }

    render() {
        return (
            <div className="page">
                <img className="background" src={require('./page6Sub_background.jpg')} alt="背景"></img>
                <canvas className="imageCanvas" ref={this.canvas}></canvas>
                <img className="headImage" src={this.state.imgSrc} alt="加载中"></img>
                <img className={this.state.leftArrowStyle} src={require('./page6Sub_left.png')} alt="向左滑动切换"></img>
                <Link to="/#Page/6"><img className="page6Sub-back" src={require('./page6Sub_back.png')} alt="back"></img></Link>
                <div id={"start-action" + this.props.imageId}  onClick={this.startAction}></div>
                <div id={"end-action" + this.props.imageId} onClick={this.endAction}></div>
            </div>
        );
    }
}

export default HeadImagePage;