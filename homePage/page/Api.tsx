import { Form, Table } from 'antd';
import React from 'react';
import Layout from '../common/layout/Layout';
import './api.less';
import { useTranslation } from 'react-i18next';

const asideList = [
    {
        title: 'Dialogbox props',
        value: 'dialogbox-props'
    },
    {
        title: 'Provider props',
        value: 'provider-props'
    },
    {
        title: 'Provider defaultOptions',
        value: 'provider-defaultOptions'
    },
    {
        title: 'Provider storageboxOptions',
        value: 'provider-storageboxOptions'
    },
    {
        title: 'Instance',
        value: 'instance'
    },
]

const Api = () => {
    const { t } = useTranslation();
    return <Layout asideList={asideList}>
        <Form className='api-form'>

            <div
                id='dialogbox-props'
                className='item-content'
            >
                <Table
                    rowKey={record => record.prop}
                    pagination={false}
                    title={() => <h3>{t('Dialogbox 组件的 props / openDialogbox 的配置属性')}</h3>}
                    columns={[
                        {
                            title: t('参数 param'),
                            dataIndex: 'prop',
                            key: 'prop',
                            width: 160,
                            render: (text) => t(text),
                        },
                        {
                            title: t('说明 description'),
                            dataIndex: 'description',
                            key: 'description',
                            width: 320,
                            render: (text) => t(text),
                            
                        },
                        {
                            title: t('类型 type'),
                            dataIndex: 'type',
                            key: 'type',
                            width: 320,
                            render: (text) => t(text),
                        },
                        {
                            title: t('默认值 dafaultValue'),
                            dataIndex: 'dafaultValue',
                            key: 'dafaultValue',
                        },
                    ]}
                    dataSource={[
                        {
                            prop: 'title',
                            description: '标题',
                            type: 'string | JSX.Element',
                            dafaultValue: '',
                        },
                        {
                            prop: 'children',
                            description: '对话框内容',
                            type: 'string | JSX.Element',
                            dafaultValue: '',
                        },
                        {
                            prop: 'visible',
                            description: '是否可见',
                            type: 'boolean',
                            dafaultValue: 'false',
                        },
                        {
                            prop: 'mask',
                            description: '遮罩层阴影',
                            type: 'boolean',
                            dafaultValue: 'true',
                        },
                        {
                            prop: 'maskClosable',
                            description: '是否允许点击阴影关闭',
                            type: 'boolean',
                            dafaultValue: 'false',
                        },
                        {
                            prop: 'width',
                            description: '对话框宽度 >= 200px',
                            type: 'number | number + px | number + %',
                            dafaultValue: '400',
                        },
                        {
                            prop: 'height',
                            description: '对话框高度 >= 120px',
                            type: 'number | number + px | number + %',
                            dafaultValue: '200',
                        },
                        {
                            prop: 'className',
                            description: '为 Dialogbox 最外层元素添加额外的 className',
                            type: 'string',
                            dafaultValue: '',
                        },
                        {
                            prop: 'fullScreen',
                            description: '初始时是否全屏',
                            type: 'boolean',
                            dafaultValue: 'false',
                        },
                        {
                            prop: 'draggable',
                            description: '是否允许拖拽',
                            type: 'boolean',
                            dafaultValue: 'true',
                        },
                        {
                            prop: 'header',
                            description: '是否展示头部',
                            type: 'boolean',
                            dafaultValue: 'true',
                        },
                        {
                            prop: 'headerStyle',
                            description: '为 Dialogbox 的 header 添加额外的 style',
                            type: 'React.CSSProperties',
                            dafaultValue: '',
                        },
                        {
                            prop: 'bodyStyle',
                            description: '为 Dialogbox 的 body 添加额外的 style',
                            type: 'React.CSSProperties',
                            dafaultValue: '',
                        },
                        {
                            prop: 'footerStyle',
                            description: '为 footer 添加额外的 style',
                            type: 'React.CSSProperties',
                            dafaultValue: '',
                        },
                        {
                            prop: 'isModal',
                            description: '是否是模态框（区别于非模态框）',
                            type: 'boolean',
                            dafaultValue: 'false',
                        },
                        {
                            prop: 'footer',
                            description: 'value = true 使用默认；= false 隐藏；自定义 footer',
                            type: 'boolean | string | JSX.Element',
                            dafaultValue: 'true',
                        },
                        {
                            prop: 'okText',
                            description: '自定义 ok 按钮内容',
                            type: 'string | JSX.Element',
                            dafaultValue: '确认',
                        },
                        {
                            prop: 'cancelText',
                            description: '自定义 cancel 按钮内容',
                            type: 'string | JSX.Element',
                            dafaultValue: '取消',
                        },
                        {
                            prop: 'onOk',
                            description: 'ok 按钮的回调事件',
                            type: '(): void',
                            dafaultValue: '',
                        },
                        {
                            prop: 'onCancel',
                            description: 'cancel 按钮的回调事件',
                            type: '(): void',
                            dafaultValue: '',
                        },
                        {
                            prop: 'afterClose',
                            description: '关闭对话框时触发的钩子',
                            type: '(): void',
                            dafaultValue: '',
                        },

                    ]}
                />
            </div>

            <div className='item-content' id='provider-props'>
                <Table
                    rowKey={record => record.prop}
                    pagination={false}
                    title={() => <h3>{t('Provider 组件 Props')}</h3>}
                    columns={[
                        {
                            title: t('参数 param'),
                            dataIndex: 'prop',
                            key: 'prop',
                            width: 160,
                            render: (text) => t(text),
                        },
                        {
                            title: t('说明 description'),
                            dataIndex: 'description',
                            key: 'description',
                            width: 320,
                            render: (text) => t(text),
                        },
                        {
                            title: t('类型 type'),
                            dataIndex: 'type',
                            key: 'type',
                            width: 320,
                            render: (text) => t(text),
                        },
                        {
                            title: t('默认值 dafaultValue'),
                            dataIndex: 'dafaultValue',
                            key: 'dafaultValue',
                        },
                    ]}
                    dataSource={[
                        {
                            prop: 'defaultOptions',
                            description: '全局 Dialogbox 的默认配置，会被单个 Dialogbox 属性覆盖，详情见下文中的 Provider.Props.defaultOptions',
                            type: 'defaultOptions',
                            dafaultValue: 'true',
                        },
                        {
                            prop: 'storagebox',
                            description: '收纳盒配置，详情见下文中的 Provider.Props.storageboxOptions',
                            type: 'storageboxOptions | boolean',
                            dafaultValue: 'true',
                        },
                    ]}
                />
            </div>
            <div className='item-content' id='provider-defaultOptions'>
                <Table
                    rowKey={record => record.prop}
                    pagination={false}
                    title={() => <h3>{t('Provider.Props.defaultOptions 全局默认配置')}</h3>}
                    columns={[
                        {
                            title: t('参数 param'),
                            dataIndex: 'prop',
                            key: 'prop',
                            width: 160,
                            render: (text) => t(text),
                        },
                        {
                            title: t('说明 description'),
                            dataIndex: 'description',
                            key: 'description',
                            width: 320,
                            render: (text) => t(text),
                        },
                        {
                            title: t('类型 type'),
                            dataIndex: 'type',
                            key: 'type',
                            width: 320,
                            render: (text) => t(text),
                        },
                        {
                            title: t('默认值 dafaultValue'),
                            dataIndex: 'dafaultValue',
                            key: 'dafaultValue',
                        },
                    ]}
                    dataSource={[
                        {
                            prop: 'mask',
                            description: '遮罩层阴影',
                            type: 'boolean',
                            dafaultValue: 'true',
                        },
                        {
                            prop: 'maskClosable',
                            description: '是否允许点击阴影关闭',
                            type: 'boolean',
                            dafaultValue: 'false',
                        },
                        {
                            prop: 'width',
                            description: '对话框宽度 >= 200px',
                            type: 'number | number + px | number + %',
                            dafaultValue: '400',
                        },
                        {
                            prop: 'height',
                            description: '对话框高度 >= 120px',
                            type: 'number | number + px | number + %',
                            dafaultValue: '200',
                        },
                        {
                            prop: 'className',
                            description: '为 Dialogbox 最外层元素添加额外的 className',
                            type: 'string',
                            dafaultValue: '',
                        },
                        {
                            prop: 'fullScreen',
                            description: '初始时是否最大化',
                            type: 'boolean',
                            dafaultValue: 'false',
                        },
                        {
                            prop: 'draggable',
                            description: '是否允许拖拽',
                            type: 'boolean',
                            dafaultValue: 'true',
                        },
                        {
                            prop: 'header',
                            description: '是否展示头部',
                            type: 'boolean',
                            dafaultValue: 'true',
                        },
                        {
                            prop: 'headerStyle',
                            description: '为 Dialogbox 的 header 添加额外的 style',
                            type: 'React.CSSProperties',
                            dafaultValue: '',
                        },
                        {
                            prop: 'bodyStyle',
                            description: '为 Dialogbox 的 body 添加额外的 style',
                            type: 'React.CSSProperties',
                            dafaultValue: '',
                        },
                        {
                            prop: 'footerStyle',
                            description: '为 footer 添加额外的 style',
                            type: 'React.CSSProperties',
                            dafaultValue: '',
                        },
                        {
                            prop: 'isModal',
                            description: '是否是模态框（区别于非模态框）',
                            type: 'boolean',
                            dafaultValue: 'false',
                        },
                        {
                            prop: 'footer',
                            description: 'value = true 使用默认；= false 隐藏；自定义 footer',
                            type: 'boolean | string | JSX.Element',
                            dafaultValue: 'true',
                        },
                        {
                            prop: 'okText',
                            description: '自定义 ok 按钮内容',
                            type: 'string | JSX.Element',
                            dafaultValue: '确认',
                        },
                        {
                            prop: 'cancelText',
                            description: '自定义 cancel 按钮内容',
                            type: 'string | JSX.Element',
                            dafaultValue: '取消',
                        },

                    ]}
                />
            </div>
            <div className='item-content' id='provider-storageboxOptions'>
                <Table
                    rowKey={record => record.prop}
                    pagination={false}
                    title={() => <h3>Provider.Props.storageboxOptions</h3>}
                    columns={[
                        {
                            title: t('参数 param'),
                            dataIndex: 'prop',
                            key: 'prop',
                            width: 160,
                            render: (text) => t(text),
                        },
                        {
                            title: t('说明 description'),
                            dataIndex: 'description',
                            key: 'description',
                            width: 320,
                            render: (text) => t(text),
                        },
                        {
                            title: t('类型 type'),
                            dataIndex: 'type',
                            key: 'type',
                            width: 320,
                            render: (text) => t(text),
                        },
                        {
                            title: t('默认值 dafaultValue'),
                            dataIndex: 'dafaultValue',
                            key: 'dafaultValue',
                        },
                    ]}
                    dataSource={[
                        {
                            prop: 'operation',
                            description: '操作方式：点击时放大或是鼠标悬浮时放大',
                            type: 'click | hover',
                            dafaultValue: 'click',
                        },
                        {
                            prop: 'visible',
                            description: '受控的显示与隐藏',
                            type: 'boolean',
                            dafaultValue: 'false',
                        },
                        {
                            prop: 'operateWhenEmpty',
                            description: '内容为空时是否可操作',
                            type: 'boolean',
                            dafaultValue: 'true',
                        },
                    ]}
                />
            </div>
            <div className='item-content' id='instance'>
                <Table
                    rowKey={record => record.prop}
                    pagination={false}
                    title={() => <h3>{t('openDialogbox 函数返回的 Dialogbox 实例对象')}</h3>}
                    columns={[
                        {
                            title: t('属性名'),
                            dataIndex: 'prop',
                            key: 'prop',
                            width: 160,
                            render: (text) => t(text),
                        },
                        {
                            title: t('说明'),
                            dataIndex: 'description',
                            key: 'description',
                            width: 320,
                            render: (text) => t(text),
                        }
                    ]}
                    dataSource={[
                        {
                            prop: 'DOM',
                            description: 'Dialogbox 最外层 fiber 对应的 DOM 元素',
                        },
                        {
                            prop: 'dialogboxId',
                            description: '对应的唯一 Id，可以用来关闭 Id 对应的对话框',
                        },
                        {
                            prop: 'show',
                            description: '显示当前实例对应的的对话框，如果它处于隐藏状态',
                        },
                        {
                            prop: 'hide',
                            description: '隐藏当前实例对应的的对话框，如果它处于显示状态',
                        },
                        {
                            prop: 'close',
                            description: '关闭当前实例对应的的对话框',
                        },
                    ]}
                />
            </div>
        </Form>
    </Layout>
}

export default Api