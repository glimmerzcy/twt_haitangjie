import React from 'react';
import '../page.css'
import './page10Sub.css'
import { Link, NavLink } from 'react-router-dom'

class Page10Sub extends React.Component {

    constructor(props) {
        super(props);
        let id = Math.floor(Math.random() * 4) + 1;
        this.state = {
            wordId: id
        }
        this.showWord = this.showWord.bind(this);
    }

    showWord() {
        let word = document.getElementById("page10_word");
        setTimeout(() => {
            word.className = "word";
        }, 500)
    }

    render() {
        let wordId = Math.floor(Math.random() * 4) + 1;
        let wordSrc = require('./bless' + wordId + '.png');
        return (
            <div className="section">
                <div className="page">
                    <img className="page10Sub-background" src={require('./page10Sub_background.jpg')} alt="page10" onLoad={this.showWord}></img>
                    <img id="page10_word" className="transparent-word" src={wordSrc} alt="word"></img>
                    {/* {temp} */}
                    <Link to="/#Page/10"><img className="page10Sub-button" src={require('./page10Sub_back.png')} alt="返回浏览"></img></Link>
                </div>
            </div>
        );
    }

}

export default Page10Sub;