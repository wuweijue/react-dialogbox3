import * as React from 'react';

export type IDialogboxProps = {

    close?(): void

    minimize?(): void

    store?

    byOpen?: boolean

    isModal?: boolean

    fullScreen?: boolean

    visible?: boolean

    draggable?: boolean

    maskClosable?: boolean

    mask?: boolean

    dialogboxStyle?: React.CSSProperties,

    headerStyle?: React.CSSProperties,

    bodyStyle?: React.CSSProperties,

    footerStyle?: React.CSSProperties

    className?: string

    header?: boolean

    width?: number | string

    height?: number | string

    okText?: string | JSX.Element

    title?: string | JSX.Element

    cancelText?: string | JSX.Element

    footer?: string | JSX.Element | boolean

    afterClose?(): void

    onOk?(): void

    onCancel?(): void

    children?: React.JSX.Element | string | undefined

}

export default function Dialogbox(props: Omit<IDialogboxProps, 'byOpen'>): JSX.Element