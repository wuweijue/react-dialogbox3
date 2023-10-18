import * as React from 'react';
import Tab from './common/tab/Tab';
import Options from './components/Options';
import Show from './components/Show';
import Api from './components/Api';
import { ConfigProvider, theme } from 'antd';
import Explain from './components/Explain';
import Home from './components/Home';
import Provider from '../lib/src/components/provider/Provider';
import Usage from './components/Usage';

class DialogDemo extends React.Component {

    state = {
        activeKey: '1',
        theme: 'dark'
    }

    handleEditorChange = (newValue, e) => {
        try {
            let code = JSON.parse(newValue)
            this.setState({ ...code })
        } catch (error) {

        }
    }

    componentDidMount(): void {
        window.globalActions && window.globalActions.onGlobalStateChange((newState, oldState) => {
            // 根据新的全局状态更新本地状态  
            this.setState({
                theme: newState.theme || 'dark'
                // theme: 'light'
            })
        });
    }

    render() {
        const { activeKey } = this.state;

        const tabList = [
            {
                key: '-1',
                title: <div className="logo">React-dialogbox</div>,
                component: <Home theme={this.state.theme} />
            },
            {
                key: '0',
                title: '使用指南',
                component: <Usage theme={this.state.theme} />
            },
            {
                key: '1',
                title: '配置示例',
                component: <Options theme={this.state.theme} />
            },
           
            {
                key: '2',
                title: '功能演示',
                component: <Show theme={this.state.theme} />
            },
            {
                key: '3',
                title: '文档详细',
                component: <Api />
            },
            {
                key: '4',
                title: '补充说明',
                component: <Explain />
            }
        ]

        return <div className={`dialogDemo ${this.state.theme}`} >
            <Provider>
                <ConfigProvider
                    theme={{
                        token: {
                            colorPrimary: '#9E339F',

                        },
                        components: {
                            Button: {
                                borderRadius: 8,
                            }
                        },
                        algorithm: this.state.theme === 'dark' ? theme.darkAlgorithm : undefined
                    }}
                >
                    <Tab tabList={tabList} activeKey={activeKey} onChange={(key) => this.setState({ activeKey: key })} />
                    
                </ConfigProvider>
            </Provider>
        </div>
    }
}

export default DialogDemo;

