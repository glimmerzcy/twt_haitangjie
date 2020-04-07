import React from 'react';
import ReactFullpage from '@fullpage/react-fullpage';

import Page1 from './P1/Page1';
import Page2 from './P2/Page2';
import Page3 from './P3/Page3';
import Page4 from './P4/Page4';
import Page5 from './P5/Page5';
import Page6 from './P6/Page6';
import Page7 from './P7/Page7';
import Page8 from './P8/Page8';
import Page9 from './P9/Page9';
import Page10 from './P10/Page10';
import Page11 from './P11/Page11';

import './section.css'

const Fullpage = () => (
    <ReactFullpage
        licenseKey={'YOUR_KEY_HERE'}
        scrollingSpeed={1500} /* Options here */

        // 取消左右滑动的箭头
        controlArrows={false}
        
        // 关闭首尾循环
        loopHorizontal={false}

        animateAnchor={false}

        // 锚
        anchors={['Page']}

        afterSlideLoad={(section, origin, destination, direction)=> {
            // alert(destination.index + 1)
            let pageId = (String)(destination.index + 1);

            let word = document.getElementById("word" + pageId);
            if (word != null) {
                word.className = "background";
            }

            let actions = document.getElementById("start-action" + pageId);
            if (actions != null) {
                actions.click();
            }

        }}
        
        // 反复进入页面都可以淡入文字
        onSlideLeave={(section, origin, destination, direction)=> {
            let pageId = (String)(destination.index + 1);
            let word = document.getElementById("word" + pageId);
            if (word != null) {
                word.className = "transparent-background";
            }

            pageId = (String)(origin.index + 1);
            let actions = document.getElementById("end-action" + pageId);
            if (actions != null) {
                actions.click();
            }
        }}

        

        render={({ state, fullpageApi }) => {
            return (
                <ReactFullpage.Wrapper>
                    <div className="section">
                        {/* 第一张 在技术上是 section，没有自己的二级锚 */}
                        <div className="slide" data-anchor="1">
                            <Page1 nextSlide={() => fullpageApi.moveSlideRight()}/>
                        </div>
                        <div className="slide" data-anchor="2">
                            <Page2 nextSlide={() => fullpageApi.moveSlideRight()}/>
                        </div>
                        <div className="slide" data-anchor="3">
                            <Page3 />
                        </div>
                        <div className="slide" data-anchor="4">
                            <Page4 />
                        </div>
                        <div className="slide" data-anchor="5">
                            <Page5 />
                        </div>
                        <div className="slide" data-anchor="6">
                            <Page6 />
                        </div>
                        <div className="slide" data-anchor="7">
                            <Page7 />
                        </div>
                        <div className="slide" data-anchor="8">
                            <Page8 />
                        </div>
                        <div className="slide" data-anchor="9">
                            <Page9 />
                        </div>
                        <div className="slide" data-anchor="10">
                            <Page10 />
                        </div>
                        <div className="slide" data-anchor="11">
                            <Page11 />
                        </div>
                    </div>
                </ReactFullpage.Wrapper>
            );
        }}
    />
);

export default Fullpage;
