import React from 'react';
import './home.less';
import { Button } from 'antd';

const Home = (props) => {
    return <div className="home">
        <div className="container">
            <div className="logo"></div>
            <div className="title">
                React-Dialogbox 3.0
            </div>
            <div className="sub-text">
                基于 React 的悬浮层非模态框组件
            </div>
            <div className="button-list">
                <Button type='primary' size='large'>开始使用</Button>
                {/* <Button>API 参考</Button> */}
            </div>
        </div>
    </div>
}

export default Home