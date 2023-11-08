import * as React from 'react';
import { Select } from 'antd';
import { useLocation, useNavigate } from 'react-router-dom';
import './header.less';
import classNames from 'classNames';
import { inject, observer } from 'mobx-react';
import { useTranslation } from 'react-i18next';

const menuList = [
    {
        title: '使用指南',
        path: '/usage'
    },
    {
        title: '演示',
        path: '/showhow'
    },
    {
        title: 'API 文档',
        path: '/api'
    }
]

const Header = inject('homeStore')(observer((props) => {
    const navigate = useNavigate();
    const location = useLocation();
    const path = location.pathname; // 获取当前路由路径
    const { t, i18n } = useTranslation();
    const store = props.homeStore
    return <div className="header">
        <div className="left">
            <div className="logo" onClick={()=>navigate('/home')}></div>
            <div className="title" onClick={()=>navigate('/home')}>React-dialogbox</div>
        </div>
        <div className="right">
            <div className="menu">
                {
                    menuList.map(item => {
                        return <div
                            onClick={() => {
                                navigate(item.path)
                            }}
                            className={classNames("menu-item", { 'active': path == item.path })}
                            key={item.path}
                        >
                            {t(item.title)}
                        </div>
                    })
                }
            </div>
            <div className="controller">
                {/* <span>Language: </span> */}
                <Select value={store.language} onSelect={value=>{
                    store.switchLanguage(value);
                    i18n.changeLanguage(value)
                }}>
                    <Select.Option value='en-us'>En</Select.Option>
                    <Select.Option value='zh-cn'>中</Select.Option>
                </Select>
            </div>
        </div>
    </div>
}))

export default Header;