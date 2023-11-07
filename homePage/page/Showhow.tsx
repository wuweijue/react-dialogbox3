import { Button, Form, Input, InputNumber, Radio, Switch } from 'antd';
import React, { useState } from 'react';
import MonacoEditor from 'react-monaco-editor';
import { Sandpack, SandpackPreview, SandpackProvider } from "@codesandbox/sandpack-react";
import * as codeStyle from 'react-syntax-highlighter/dist/esm/styles/hljs';
import './showhow.less';
import { Dialogbox, openDialogbox } from '../../lib/src';
import Layout from '../common/layout/Layout';
import { useTranslation } from 'react-i18next';

type OptionsType = {
    footer?: string | null | boolean;
    [key: string]: any
}

const Options = (props) => {
    const { t } = useTranslation();
    const style = props.theme === 'dark' ? codeStyle.vs2015 : codeStyle.xcode;
    const [visible, setVisible] = useState(false);
    const [state, setState] = useState<OptionsType>({
        title: 'react-dialogbox',
        mask: true,
        maskClosable: false,
        width: 400,
        height: 200,
        fullScreen: false,
        header: true,
        footerNum: 1,
        footerContent: '',
        draggable: true,
        theme: props.theme || 'light',
        okText: '确认',
        cancelText: '取消',
        footer: true,
        children: t('对话框内容'),
    })

    const { theme, title, footerNum, footerContent, mask, maskClosable, width, height, header, draggable, okText, cancelText, children, fullScreen } = state;

    const formatCode = (state) => {
        return (
            `
import { Dialogbox } from 'react-dialogbox';

const App = () => {
    return <Dialogbox
        visible={true}
        title={'${state.title}'}
        mask={${state.mask}}
        maskClosable={${state.maskClosable}}
        width={${state.width}}
        height={${state.height}}
        fullScreen={${state.fullScreen}}
        header={${state.header}}
        footer={${state.footer}}
        draggable={${state.draggable}}
        okText={'${state.okText}'}
        cancelText={'${state.cancelText}'}
    >
        ${state.children}
    <Dialogbox>
}
                
export default App
`
        )
    }

    const _props = {
        onCancel() {
            setVisible(false)
        },
        title,
        mask,
        maskClosable,
        width,
        height,
        fullScreen,
        header,
        theme,
        footer: footerNum === 2 ? false : (footerNum === 1 ? true : footerContent),
        draggable,

    }
    
    return <div className="options" >
        <Layout asideList={[
            {
                title: 'UI 配置',
                value: 'ui'
            },
            {
                title: '功能说明',
                value: 'description'
            },
            {
                title: '沙箱模型',
                value: 'sandbox'
            }
        ]}>

            <div className="options-ui item-content" id='ui'>
                <div className="top">
                    <Dialogbox
                        {..._props}
                        visible={visible}
                    >
                        {children}
                    </Dialogbox>
                    <Button type='primary'
                        onClick={() => {
                            // const { close } = openDialogbox({
                            //     ..._props,
                            //     visible: true,
                            //     onCancel: ()=>{
                            //         close()
                            //     }
                            // })
                            setVisible(true)
                        }}
                    >{t('弹出对话框')}</Button>
                </div>
                <div className="bottom">
                    <div className='form-wrapper' >
                        <h3 className='form-title'>{t('调试面板')}</h3>
                        <Form labelAlign='left'>
                            <Form.Item label={t("对话框标题 (title)")}>
                                <Input value={title} onChange={(e) => { setState({ ...state, ...{ title: e.target.value } }) }} />
                            </Form.Item>

                            <Form.Item label={t("遮罩层阴影 (mask)")}>
                                <Switch checked={mask} onChange={(checked) => { setState({ ...state, ...{ mask: checked } }) }} />
                            </Form.Item>

                            <Form.Item label={t("点击阴影关闭 (maskClosable)")}>
                                <Switch checked={maskClosable} onChange={() => {
                                    let newMask = mask;
                                    if (!maskClosable) {
                                        newMask = true
                                    }
                                    setState({
                                        ...state, ...{
                                            mask: newMask,
                                            maskClosable: !maskClosable
                                        }
                                    })
                                }} />
                            </Form.Item>

                            <Form.Item label={t("初始宽度 (width)")} tooltip={t('取值区间：[ 200px, 浏览器可视宽度 ]，超出最值部分自动调整，支持百分比')}>
                                <InputNumber value={width} onChange={(value) => {
                                    setState({ ...state, ...{ width: Number(value) } })
                                }} />
                            </Form.Item>

                            <Form.Item label={t("初始高度 (height)")} tooltip={t('取值区间：[ 120px, 浏览器可视高度 ]，超出最值部分自动调整，支持百分比')}>
                                <InputNumber value={height} onChange={(value) => {
                                    setState({ ...state, ...{ height: Number(value) } })
                                }} />
                            </Form.Item>

                            <Form.Item label={t("初始全屏 (fullScreen)")}>
                                <Switch checked={fullScreen} onChange={(checked) => {
                                    setState({ ...state, ...{ fullScreen: checked } })
                                }} />
                            </Form.Item>

                            <Form.Item label={t("是否可拖拽 (draggable)")}>
                                <Switch checked={draggable} onChange={(checked) => {
                                    setState({ ...state, ...{ draggable: checked } })
                                }} />
                            </Form.Item>

                            <Form.Item label={t("是否展示头部 (header)")}>
                                <Switch checked={header} onChange={(checked) => {
                                    setState({ ...state, ...{ header: checked } })
                                }} />
                            </Form.Item>

                            <Form.Item label={t("对话框内容 (children)")}>
                                <Input value={children} onChange={(e) => {
                                    setState({ ...state, ...{ children: e.target.value } })
                                }} />
                            </Form.Item>

                            <Form.Item label={t("是否展示底部 (footer)")} tooltip={t('当值为布尔类型时，true 为显示默认的内容，false 为隐藏')}>
                                <Radio.Group value={footerNum} onChange={(e => {
                                    setState({ ...state, ...{ footerNum: e.target.value, footer: e.target.value === 2 ? false : (e.target.value === 1 ? null : footerContent) } })
                                })}>
                                    <Radio value={1} > {t('显示默认底栏')}</Radio>
                                    <Radio value={2} > {t('不显示底栏')}</Radio>
                                    <Radio value={3} > {t('自定义底栏显示内容')}</Radio>
                                </Radio.Group>
                            </Form.Item>

                            <Form.Item label={t("自定义底部内容 (footer)" )}tooltip={t('当值为字符串或者 jsx 类型时，值即是显示的内容')}>
                                <Input disabled={footerNum !== 3} value={footerContent} onChange={(e) => {
                                    setState({ ...state, ...{ footerContent: e.target.value, footer: footerContent } })
                                }} />
                            </Form.Item>

                            {/* <Form.Item label="主题 (theme)">
                        <Radio.Group value={theme} onChange={(e => {
                            setState({ ...state, ...{ theme: e.target.value } })
                        })}>
                            <Radio value={'light'} > light </Radio>
                            <Radio value={'dark'} > dark </Radio>
                        </Radio.Group>
                    </Form.Item> */}

                            <Form.Item label={t("自定义确认按钮内容 (okText)")}>
                                <Input placeholder={'确认'} value={okText} onChange={(e) => {
                                    setState({ ...state, ...{ okText: e.target.value } })
                                }} />
                            </Form.Item>

                            <Form.Item label={t("自定义取消按钮内容 (cancelText)")}>
                                <Input placeholder={'取消'} value={cancelText} onChange={(e) => {
                                    setState({ ...state, ...{ cancelText: e.target.value } })
                                }} />
                            </Form.Item>

                        </Form>
                    </div >

                    <div className='code-wrapper'>
                        <h3>{t('代码示例')}</h3>
                        {/* <SyntaxHighlighter language="javascript" style={style}>
                    {formatCode(state)}
                </SyntaxHighlighter> */}
                        <MonacoEditor
                            width="600"
                            height='512'
                            language="javascript"
                            theme={props.theme === 'dark' ? "vs-dark" : 'vs'}
                            options={{
                                autoIndent: 'brackets',//自动布局
                                automaticLayout: true,
                                tabSize: 4,
                                minimap: {
                                    enabled: false // 不要小地图
                                },
                                readOnly: true,
                            }}
                            // onChange={handleEditorChange}
                            value={formatCode(state)}
                        />
                    </div>
                </div>

            </div>
            <ol className='item-content' id='description'>
                <Button type='primary' onClick={() => {
                    const { close, hide } = openDialogbox(<Dialogbox
                        visible={true}
                        width={600}
                        height={480}
                        onOk={() => {
                            close()
                        }}
                        onCancel={() => hide()}
                        title='窗口1'
                        children={
                            <ol>
                                <li>
                                    <span className='bold'>{t('最大化与还原：')}</span>{t('你还可以通过双击头部或者扩展按钮实现全屏并固定，还原也是同样的操作')}
                                </li>
                                <br></br>
                                <li>
                                    <span className='bold'>{t('半屏固定：')}</span>{t('如果你不想遮挡整块屏幕，你还可以尝试拖动至窗口左右边缘处实现半屏固定，如果拖拽至上下边缘，则等同于全屏')}
                                </li>
                                <br></br>
                                <li>
                                    <span className='bold'>{t('键盘事件：')}</span>{t('如果双手不想离开键盘，React-dialogbox 还提供了键盘事件，其中 esc 代表 cancel 事件，enter 代表 ok 事件')}
                                </li>
                                <br></br>
                                <li>
                                    <span className='bold'>{t('收纳盒：')}</span>{t('React-dialogbox 还提供了收纳盒用来收纳被隐藏的对话框，你可以通过点击收纳盒的列表释放它们')}
                                </li>
                            </ol>
                        }
                    />)

                    const { close: close2, hide: hide2 } = openDialogbox(<Dialogbox
                        visible={true}
                        onOk={() => {
                            close2()
                        }}
                        onCancel={() => hide2()}
                        title='窗口2'
                        width={680}
                        height={480}
                        children={<ol>
                            <li>
                                <span className='bold'>{t('调整尺寸：')}</span>{t('如果窗口预设尺寸不符合需求，可以尝试在对话框边缘处拖动，对话框提供了在二维平面上八个方向（含对角线）上的放大与缩小的操作')}
                            </li>
                            <br></br>
                            <li>
                                <span className='bold'>{t('移动：')}</span>{t('或许你没有发现，界面实际上存在了两个对话框，你可以尝试按住头部移开上面的这个')}
                            </li>
                            <br></br>
                            <li>
                                <span className='bold'>{t('聚焦：')}</span>{t('尝试点击另一个对话框，你会发现它们可以类似操作系统的窗口一样被聚焦')}
                            </li>
                        </ol>}
                    />)
                }}>{t('点击演示')}</Button>
                <h3>{t('功能说明')}</h3>
                <li>
                    <span className='bold'>{t('调整尺寸：')}</span>{t('如果窗口预设尺寸不符合需求，可以尝试在对话框边缘处拖动，对话框提供了在二维平面上八个方向（含对角线）上的放大与缩小的操作')}
                </li>
                <br></br>
                <li>
                    <span className='bold'>{t('移动：')}</span>{t('或许你没有发现，界面实际上存在了两个对话框，你可以尝试按住头部移开上面的这个')}
                </li>
                <br></br>
                <li>
                    <span className='bold'>{t('聚焦：')}</span>{t('尝试点击另一个对话框，你会发现它们可以类似操作系统的窗口一样被聚焦')}
                </li>
                <br></br>
                <li>
                    <span className='bold'>{t('最大化与还原：')}</span>{t('你还可以通过双击头部或者扩展按钮实现全屏并固定，还原也是同样的操作')}
                </li>
                <br></br>
                <li>
                    <span className='bold'>{t('半屏固定：')}</span>{t('如果你不想遮挡整块屏幕，你还可以尝试拖动至窗口左右边缘处实现半屏固定，如果拖拽至上下边缘，则等同于全屏')}
                </li>
                <br></br>
                <li>
                    <span className='bold'>{t('键盘事件：')}</span>{t('如果双手不想离开键盘，React-dialogbox 还提供了键盘事件，其中 esc 代表 cancel 事件，enter 代表 ok 事件')}
                </li>
                <br></br>
                <li>
                    <span className='bold'>{t('收纳盒：')}</span>{t('React-dialogbox 还提供了收纳盒用来收纳被隐藏的对话框，你可以通过点击收纳盒的列表释放它们')}
                </li>
            </ol>

            <div className='item-content' id='sandbox'>
                <Sandpack template="react" files={{
                    "/App.js": `export default function App() {
                        return <h1>Hello Sandpack</h1>
                    }`,
                }}/>
            </div>

        </Layout>


    </div >
}

export default Options