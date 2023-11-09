import React from 'react';
import './home.less';
import { Button } from 'antd';
import { inject, observer } from 'mobx-react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Home = inject('homeStore')(observer((props) => {
    const navigate = useNavigate();
    const { t } = useTranslation();
    return <div className="home">
        <div className="container">
            <div className="logo"></div>
            <div className="title">
                React-Dialogbox 3.0
            </div>
            <div className="sub-text">
                {t('基于 React18 的悬浮层窗口组件')}
            </div>
            <div className="button-list">
                <Button type='primary' size='large' onClick={() => navigate('/usage')}>{t('开始使用')}</Button>
            </div>
        </div>
    </div>
}))

export default Home