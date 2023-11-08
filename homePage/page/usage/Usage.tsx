import './usage.less';
import * as React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import * as codeStyle from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { Sandpack, SandpackPreview, SandpackProvider } from "@codesandbox/sandpack-react";
import Layout from '../../common/layout/Layout';
import { useState, useTransition } from 'react';
import { Radio, Switch } from 'antd';
import { inject, observer } from 'mobx-react';
import classNames from 'classNames';
import { useTranslation } from 'react-i18next';

// const Embedde



const asideList = [
    {
        value: 'install',
        title: 'Install 安装'
    },
    {
        value: 'provider',
        title: 'Provider 容器'
    },
    {
        value: 'embedded',
        title: '内嵌组件'
    },
    {
        value: 'api',
        title: 'API 调用'
    },
]

const Usage = inject('homeStore')(observer((props) => {
    const { t } = useTranslation();
    const store = props.homeStore;

    const EmbeddedFunctionComponentCode = (
        `import React, { useState } from 'react';
import { Dialogbox } from 'react-dialogbox';
        
const App = () => {
    const [ visible, setVisible ] = useState(false);
    
    return <div>
        <button onClick={() => setVisible(true)}> react-dialogbox </button>
        <Dialogbox visible={visible} onCancel={() => setVisible(true)} >
            children
        </Dialogbox>
    </div>        
}
    
export default App`
    )

    const EmbeddedClassComponentCode = (
        `import React from 'react';
import { Dialogbox } from 'react-dialogbox';
        
class App extends React.Component {
    state = {
        visible: false
    }
    
    return <div>
        <button onClick={() => this.setState({visible: true})}> react-dialogbox </button>
        <Dialogbox visible={visible} onCancel={() => this.setState({visible: false})} >
            children
        </Dialogbox>
    </div>        
}
    
export default App`
    )

    const ProviderFunctionComponentCode = (
        `import React from 'react';
// ${t('api 生成的对话框将渲染在 Provider 容器内部')} 
import { Provider as DialogboxProvider } from 'react-dialogbox';
    
// ${t('如果已经引用 redux 或 mobx Provider，可以使用 as 替代名，并将 DialogboxProvider 放置在它们的内部')} 
import { Provider } from 'react-redux';
    
const App = () => {
    return <Provider>
        <DialogboxProvider> 
            children
        </DialogboxProvider>
    </Provider>        
}
    
export default App`
    )

    const ProviderClassComponentCode = (
        `import React from 'react';
// ${t('api 生成的对话框将渲染在 Provider 容器内部')} 
import { Provider as DialogboxProvider } from 'react-dialogbox';
    
// ${t('如果已经引用 redux 或 mobx Provider，可以使用 as 替代名，并将 DialogboxProvider 放置在它们的内部')} 
import { Provider } from 'react-redux';
    
const App extends React.Component {
    render(){
        return <Provider>
            <DialogboxProvider> 
                children
            </DialogboxProvider>
        </Provider>  
    }         
}
    
export default App`
    )

    const openDialogboxClassComponentCode = (
        `import {     
    openDialogbox,    // ${t('打开一个新的对话框')} 
    closeDialogbox,   // ${t('关闭指定的对话框')} 
    showDialogbox,    // ${t('显示指定的对话框，如果它处于隐藏状态')}  
    hideDialogbox,    // ${t('隐藏指定的对话框，如果它处于显示状态')}  
    hideAllDialogbox  // ${t('隐藏所有对话框')} 
    closeAllDialogbox // ${t('关闭所有对话框')}  
} from 'react-dialogbox';
import React from 'react';
        
class App extends React.Component {
    dialogboxInstance
    
    close = () => {
        // ${t('通过实例的 close 方法关闭对话框（卸载）')}  
        this.dialogboxInstance.close(); 
    
        // ${t('通过 closeDialogbox 函数关闭对话框')}  
        closeDialogbox(this.dialogboxInstance.dialogboxId);
    
        // ${t('上述二选一')} 
    }
    
    open = () => {
        // ${t('openDialogbox 函数将打开一个新的对话框返回一个实例对象，可以通过组件属性将其缓存')} 
        this.dialogboxInstance = openDialogbox({
            title: 'openDialogbox'
            visible: true
        })
    }
    
    show = () => {
        // ${t('通过实例的 show 方法显示对话框')}
        this.dialogboxInstance.show(); 
    
        // ${t('通过 showDialogbox 函数显示对话框')}
        showDialogbox(this.dialogboxInstance.dialogboxId);
    
        // ${t('上述二选一')} 
    }
    
    hide = () => {
        // ${t('通过实例的 hide 隐藏对话框（不卸载）')} 
        this.dialogboxInstance.hide(); 
    
        // ${t('通过 hideDialogbox 函数隐藏对话框')}  
        hideDialogbox(this.dialogboxInstance.dialogboxId);
    
        // ${t('上述二选一')} 
    }
    
    hideAll = () => {
        hideAllDialogbox(); // ${t('隐藏所有对话框')}
    }
    
    closeAll = () => {
        closeAllDialogbox(); // ${t('关闭所有对话框')} 
    }
    
    render(){
        return <button onClick={this.open}> openDialogbox </button>
    }
}`
    )

    const openDialogboxFunctionComponentCode = (
    `import {     
    openDialogbox,    // ${t('打开一个新的对话框')} 
    closeDialogbox,   // ${t('关闭指定的对话框')} 
    showDialogbox,    // ${t('显示指定的对话框，如果它处于隐藏状态')}  
    hideDialogbox,    // ${t('隐藏指定的对话框，如果它处于显示状态')}  
    hideAllDialogbox  // ${t('隐藏所有对话框')} 
    closeAllDialogbox // ${t('关闭所有对话框')}  
} from 'react-dialogbox';
import React, { useRef } from 'react';
        
const App = () => {
    const dialogboxInstance = useRef();
    
    const close = () => {
        // ${t('通过实例的 close 方法关闭对话框（卸载）')}  
        dialogboxInstance.current.close();
    
        // ${t('通过 closeDialogbox 函数关闭对话框')}  
        closeDialogbox(dialogboxInstance.current.dialogboxId);
    
        // ${t('上述二选一')} 
    }
    
    const open = () => {
        // ${t('openDialogbox 函数打开一个对话框并返回一个实例对象，可以通过 ref 将其缓存')}
        dialogboxInstance.current = openDialogbox({
            title: 'openDialogbox'
            visible: true
        })
    }
    
    const show = () => {
        // ${t('通过实例的 show 方法显示对话框')} 
        dialogboxInstance.show(); 
    
        // ${t('通过 showDialogbox 函数显示对话框')}
        showDialogbox(dialogboxInstance.current.dialogboxId);
    
        // ${t('上述二选一')} 
    }
    
    const hide = () => {
        // ${t('通过实例的 hide 隐藏对话框（不卸载）')} 
        dialogboxInstance.hide(); 
    
        // ${t('通过 hideDialogbox 函数隐藏对话框')}  
        hideDialogbox(dialogboxInstance.current.dialogboxId);
    
        // ${t('上述二选一')} 
    }
    
    const hideAll = () => {
        hideAllDialogbox(); // ${t('隐藏所有对话框')}
    }
    
    const closeAll = () => {
        closeAllDialogbox(); // ${t('关闭所有对话框 ')}
    }
    
    return <button onClick={open}> openDialogbox </button>      
}`
    )

    const style = store.theme === 'dark' ? codeStyle.vs2015 : codeStyle.lioshi;

    return <div className="usage">
        <Layout className="usage-container scroll" asideList={asideList} asideTop={
            <div className='componentType'>
                <div key='function' className={classNames("tab-item", { 'active': store.componentType })} onClick={()=>{
                    store.switchComponentType()
                }}>
                    {t('函数组件')}
                </div>
                <div key='class' className={classNames("tab-item", { 'active': !store.componentType })} onClick={store.switchComponentType}>
                    {t('类组件')}
                </div>
            </div>
        }>
            <div id='install' className='item-content'>
                <h2 className='title'>{t('Install 安装')}</h2>
                <div className="code-wrapper">
                    <div className='code'>
                        <span>yarn</span>
                        <span>add</span>
                        <span>react-dialogbox</span>
                    </div>
                    <div className='code'>
                        <span>npm</span>
                        <span>install</span>
                        <span>react-dialogbox</span>
                    </div>
                </div>
            </div>

            <div id="provider" className='item-content'>
                <h2 className='title'>{t('Provider 容器')}</h2>
                <div className="code-wrapper">
                    {
                        <SyntaxHighlighter language="javascript" style={style}>
                            {store.componentType ? ProviderFunctionComponentCode : ProviderClassComponentCode}
                        </SyntaxHighlighter>
                    }
                </div>
            </div>

            <div id="embedded" className='item-content'>
                <h2 className='title'>{t('内嵌组件')}</h2>
                <div className="code-wrapper">
                    {
                        <SyntaxHighlighter language="javascript" style={style}>
                            {store.componentType ? EmbeddedFunctionComponentCode : EmbeddedClassComponentCode}
                        </SyntaxHighlighter>
                    }
                </div>
            </div>

            <div id='api' className='item-content'>
                <h2>{t('API 调用')}</h2>
                <div className="code-wrapper">
                    <SyntaxHighlighter language="javascript" style={style}>
                        {store.componentType ? openDialogboxFunctionComponentCode : openDialogboxClassComponentCode}
                    </SyntaxHighlighter>
                </div>
            </div>
        </Layout>
    </div>
}))

export default Usage