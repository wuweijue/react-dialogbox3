import * as React from 'react';
import { Switch } from "antd";
import { useTranslation } from 'react-i18next';
import { inject, observer } from 'mobx-react';
import { CheckOutlined, LeftOutlined } from '@ant-design/icons';
import './control.less';

const Control = inject('homeStore')(observer((props) => {
    const store = props.homeStore;
    const { language, theme } = store
    const { i18n } = useTranslation();

    const handleSelectLanguage = (key) => {
        if (language === key) return;
        i18n.changeLanguage(key);
        store.switchLanguage()
    }

    return <div className="header-control">
        <div className="control-wrapper">
            <div className='themeControl'>
                <div className='round-wrapper' onClick={store.switchTheme}>
                    {theme ? <i className='iconfont icon-light'></i> : <i className='iconfont icon-dark'></i>}
                </div>
            </div>
            <div className='languageControl'>
                <div className='round-wrapper' onClick={handleSelectLanguage}>
                    {language === 'en-US' ? 'En' : '中'}
                </div>
            </div>
        </div>

    </div>
}))

export default Control;