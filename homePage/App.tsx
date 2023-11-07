import * as React from 'react';
import './app.less';
import Home from './page/Home';
import Showhow from './page/Showhow';
import Api from './page/Api';
import { hot } from 'react-hot-loader/root';
import { inject, observer, Provider } from 'mobx-react';
import homeStore from './store/homeStore';
import { HashRouter, Route, Routes } from 'react-router-dom';
import Header from './common/header/Header';
import Usage from './page/usage/Usage';
import DialogboxProvider from '../lib/src/components/provider/Provider';
import { ConfigProvider } from 'antd';
import { I18nextProvider, initReactI18next } from 'react-i18next';
import i18n from 'i18next';
import XHR from 'i18next-xhr-backend';
import en from './language/en.json';

const App = () => {
    return <Provider homeStore={homeStore}>
        <HashRouter>
            <Router />
        </HashRouter>
    </Provider>
}

// const browserLanguage = navigator.language || 'zh-CN';
const browserLanguage = 'en-us';

i18n
    .use(XHR)
    .use(initReactI18next)
    .init({
        resources: {
            en: { translation: en },
        },
        fallbackLng: browserLanguage, // 默认语言  
    });

const Router = inject('homeStore')(observer((props) => {
    const { theme } = props.homeStore;
    return <ConfigProvider
        theme={{
            token: {
                colorPrimary: '#9E339F',
            },
            components: {
                Button: {
                    borderRadius: 8,
                }
            },
            algorithm: theme === 'light' ? theme.defaultAlgorithm : theme.darkAlgorithm
        }}
    >
        <I18nextProvider i18n={i18n}>
            <Header />
            <DialogboxProvider>
                <div className="content">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path='/home' element={<Home />} />
                        <Route path='/usage' element={<Usage />} />
                        <Route path='/api' element={<Api />} />
                        <Route path='/showhow' element={<Showhow />} />
                    </Routes>
                </div>
            </DialogboxProvider>
        </I18nextProvider>

    </ConfigProvider>
}))

export default hot(App)