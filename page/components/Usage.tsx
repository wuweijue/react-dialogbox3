import './usage.less';
import React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import * as codeStyle from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { Sandpack, SandpackPreview, SandpackProvider } from "@codesandbox/sandpack-react";

// const Embedde

const EmbeddedFunctionComponentCode = (
    `import React, { useState } from 'react';
import { Dialogbox } from 'react-dialogbox';
    
const App = () => {
    const [ visible, setVisible ] = useState(false);

    return <div>
        <button onClick={() => setVisible(true)}> react-dialogbox </button>
        <Dialogbox visible={visible} onCancel={() => setVisible(true)} >
            对话框内容
        </Dialogbox>
    </div>        
}

export default App`
)

const showDialogboxClassComponentCode = (
    `
    import { Dialogbox, showDialogbox, hideDialogbox } from 'react-dialogbox';
    import React from 'react';
    
    class App extends React.Component {

        dialogboxInstance

        close = () => {
            // 利用实例关闭
            this.dialogboxInstance.close(); 

            // 通过 hideDialogbox 方法关闭
            hideDialogbox(this.dialogboxInstance.dialogboxId);

            // 上述二选一
        }

        show = () => {
            // 方法返回一个实例对象
            this.dialogboxInstance = showDialogbox(<Dialogbox 
                title='showDialogbox'
                visible={true}
                onCancel={this.close}
            />)
        }

        render(){
            return <button onClick={this.show}> react-dialogbox </button>
        }
    }

`
)

const showDialogboxFunctionComponentCode = (
    `
    import { Dialogbox, showDialogbox, hideDialogbox } from 'react-dialogbox';
    import React, { useRef } from 'react';
    
    const App = () => {
        const dialogboxInstance = useRef();

        const close = () => {
            // 利用实例关闭 
            dialogboxInstance.current.close();

            // 通过 hideDialogbox 方法关闭 
            hideDialogbox(dialogboxInstance.current.dialogboxId);

            // 上述二选一
        }

        const show = () => {
            // 方法返回一个实例对象
            dialogboxInstance.current = showDialogbox(<Dialogbox 
                title='showDialogbox'
                visible={true}
                onCancel={close}
            />);
        }

        return <button onClick={show}> react-dialogbox </button>      
    }

`
)

const hideAllCode = (
    `
    import { hideAllDialogbox } from 'react-dialogbox';

    hideAllDialogbox();

`
)

const CodeView = (props) => {
    const style = props.theme === 'dark' ? codeStyle.vs2015 : codeStyle.xcode
    return <div className="codeView">
        <div id='install'>
            <h1 className='title'>Install</h1>
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

        <div id="embedded">
            <h2>内嵌组件</h2>
            <div className="embedded-content">
                <Sandpack
                    template="vite-react"
                    theme={'dark'}
                    files={{
                        "App.jsx": EmbeddedFunctionComponentCode,
                    }}
                    customSetup={{
                        dependencies: {
                            "react-dialogbox": "latest"
                        }
                    }}
                />
            </div>
        </div>

        <div className="embedded">
            <h3>showDialogbox Api</h3>
            <div className="embedded-content">
                <div className="left">
                    <h4>类组件</h4>
                    <SyntaxHighlighter language="javascript" style={style}>
                        {showDialogboxClassComponentCode}
                    </SyntaxHighlighter>
                </div>
                <div className="right">
                    <h4>函数组件</h4>
                    <SyntaxHighlighter language="javascript" style={style}>
                        {showDialogboxFunctionComponentCode}
                    </SyntaxHighlighter>
                </div>
            </div>
        </div>

        <div className='install'>
            <h3 className='title'>关闭所有对话框 close all dialogboxes </h3>
            <SyntaxHighlighter language="javascript" style={style}>
                {hideAllCode}
            </SyntaxHighlighter>
        </div>
    </div>
}

export default CodeView