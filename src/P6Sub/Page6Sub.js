import React from 'react';
import ReactFullpage from '@fullpage/react-fullpage';

import HeadImagePage from './HeadImagePage';

import '../section.css'

class Page6Sub extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {

        return (
            <ReactFullpage
                licenseKey={'YOUR_KEY_HERE'}
                scrollingSpeed={1000} /* Options here */

                // 取消左右滑动的箭头
                controlArrows={false}

                // 关闭首尾循环
                // loopHorizontal={false}

                afterSlideLoad={(section, origin, destination, direction) => {
                    // alert(destination.index + 1)
                    let pageId = (String)(destination.index + 1);
                    let actions = document.getElementById("start-action" + pageId);
                    if (actions != null) {
                        actions.click();
                    }
                }}

                onSlideLeave={(section, origin, destination, direction) => {
                    let pageId = (String)(destination.index + 1);


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
                                <div className="slide">
                                    <HeadImagePage imageId="1" />
                                </div>
                                <div className="slide">
                                    <HeadImagePage imageId="2" />
                                </div>
                                <div className="slide">
                                    <HeadImagePage imageId="3" />
                                </div>
                                <div className="slide">
                                    <HeadImagePage imageId="4" />
                                </div>
                                <div className="slide">
                                    <HeadImagePage imageId="5" />
                                </div>
                            </div>
                        </ReactFullpage.Wrapper>
                    );
                }}
            />
        );
    }
}

export default Page6Sub;
