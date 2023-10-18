import * as classNames from 'classnames';
import Button from '../button/Button';
import { IDialogboxProps } from './Dialogbox.d';
import './dialogbox.less';
import * as React from 'react';
import { useEffect, useMemo, useRef, useState } from 'react';
import { inject, observer } from 'mobx-react';

const Dialogbox = inject('store')(observer((props: IDialogboxProps) => {

    const store = props.store;
    const { validFunction } = store;

    const ref = useRef<{
        dialogboxId: number,
        isEmbedded: boolean,
        dom: HTMLDivElement | null,
        isMount: boolean,
        timeout: number
    }>({
        dialogboxId: store.focusZIndex + 1,
        isEmbedded: false,
        dom: null,
        isMount: true,
        timeout: 0
    });

    const { dialogboxId, dom, isMount, timeout } = ref.current;

    const computerLayout = useMemo(() => {
        let width = 400, height = 180;
        const { clientWidth, clientHeight } = document.body;

        //将宽高由百分比或者带px单位的string转换为number 
        if (props.width && typeof props.width === 'number') {
            if (props.width > clientWidth) {
                //宽度限制为屏幕最大宽度
                width = clientWidth;
            } else {
                width = props.width;
            }
        } else if (props.width && typeof props.width === 'string' && props.width.includes('px')) {
            if (parseInt(props.width) > clientWidth) {
                width = clientWidth;
            } else {
                //去除string末尾的px
                width = parseInt(props.width);
            }
        } else if (props.width && typeof props.width === 'string' && props.width.includes('%')) {
            if (parseInt(props.width) > 100) {
                width = clientWidth;
            } else {
                width = clientWidth * parseInt(props.width) / 100;
            }
        }

        if (props.height && typeof props.height === 'number') {
            if (props.height > clientHeight) {
                height = clientHeight;
            } else {
                height = props.height;
            }
        } else if (props.height && typeof props.height === 'string' && props.height.includes('px')) {
            if (parseInt(props.height) > clientHeight) {
                height = clientHeight;
            } else {
                //去除string末尾的px
                height = parseInt(props.height);
            }
        } else if (props.height && typeof props.height === 'string' && props.height.includes('%')) {
            if (parseInt(props.height) > 100) {
                height = clientHeight;
            } else {
                height = clientHeight * parseInt(props.height) / 100;
            }
        }

        //保证宽高不小于最小值
        return [
            width < 120 ? 120 : width,
            height < 120 ? 120 : height,
            0 - 0.5 * height,
            0 - 0.5 * width,
        ]
    }, [])

    const [initWidth, initHeight, initMarginTop, initMarginLeft] = computerLayout;

    const { draggable = true, title, isModal, header = true, headerStyle, footer, okText, cancelText, footerStyle, className: propsClassName,
    } = props;

    const [state, setState] = useState({
        visible: props.visible,
        width: initWidth,
        height: initHeight,
        toRight: 0, // 向右的偏移量
        toBottom: 0, // 向下的偏移量
        isExtend: false,
        draggable,//是否可拖拽
        zIndex: dialogboxId, // 控制层级    
        marginTop: initMarginTop, //让表单初始时保持居中
        marginLeft: initMarginLeft, //让表单初始时保持居中
        historyWidth: initWidth,
        historyHeight: initHeight,
        title,
        transition: 'none',
        historyToBottom: 0,
        historyToRight: 0
    });

    const controllable = () => {
        let focusItem = store.focusItem;
        if (!focusItem) {
            return true
        }

        let foucsItemIsModal = focusItem.isModal;
        if ((focusItem.dialogboxId !== dialogboxId) && (foucsItemIsModal || isModal)) {
            // 如果被聚焦的dialogbox是个模态框，或当前选中的dialogbox是个模态框则无法操作其它模态框
            return false
        }
        return true
    }

    /* 全屏/还原 */
    const handleExtend = (direction?, value?) => {
        if (!controllable()) return;
        let { clientWidth, clientHeight } = document.body;
        let marginTop, marginLeft, toRight, toBottom;
        let newIsExtend = false;
        let { draggable, isExtend, historyToBottom, historyToRight, height, width, historyWidth, historyHeight } = state;
        if (value === false && !isExtend) return;
        if (!isExtend || value) {
            historyWidth = width;
            historyHeight = height;
            width = clientWidth;
            height = clientHeight;
            marginTop = 0;
            marginLeft = 0;
            toRight = 0;
            draggable = false;
            newIsExtend = true;
            if (direction === 'left') {
                width *= 0.5;
            }
            else if (direction === 'right') {
                width *= 0.5;
                toRight = width;
            }
        } else {
            //从全屏状态恢复为原来的状态
            draggable = props.draggable === false ? false : true;
            width = historyWidth;
            height = historyHeight;
            toRight = historyToRight;
            toBottom = historyToBottom;
            marginTop = 0 - 0.5 * height;
            marginLeft = 0 - 0.5 * width;
        }
        const callback = () => {
            const newState = {
                historyWidth: state.width,
                historyHeight: state.height,
                marginTop,
                marginLeft,
                toRight,
                toBottom,
                draggable,
                historyToBottom: state.toBottom,
                historyToRight: state.toRight,
                isExtend: newIsExtend,
                width,
                height,
                transition: '0.4s'
            }

            setState({
                ...state,
                ...newState
            })

            setTimeout(() => setState({
                ...state,
                ...newState,
                transition: 'none'
            }), 400)
        }

        if (value === true) {
            callback()
            setTimeout(() => {
                callback()
            }, 500)
        } else {
            callback()
        }
    }

    const afterClose = () => {
        ref.current.timeout = setTimeout(() => {
            setState({
                ...state,
                visible: false
            })
            validFunction(props.afterClose);
            handleExtend(null, false);
            store.changeDialogboxVisible(dialogboxId, false);
        }, 450)
    }

    const onOk = () => {
        validFunction(props.onOk)
    }

    const onCancel = () => {
        validFunction(props.onCancel)
    }

    const minimize = () => {
        validFunction(props.minimize)
    }

    const close = () => {
        validFunction(props.onCancel)
        validFunction(props.close);
    }

    const isfocus = () => {
        return store.focusZIndex === state.zIndex;
    }

    const dragMove = (e) => {
        if (!controllable()) return

        //当鼠标按下时触发
        e.stopPropagation();
        let pointLeft = e.clientX; //获取此时鼠标距离屏幕左侧的距离
        let pointTop = e.clientY; //获取此时鼠标距离屏幕顶部的距离

        //此刻的右和下方向的偏移量
        let right = state.toRight;
        let bottom = state.toBottom;

        //当鼠标按下后拖动时触发

        const onmousemove = (event) => {

            //避免拖动过程中文本被选中
            window.getSelection ? window.getSelection().removeAllRanges() : (document as any).selection.empty();

            let curCLientX = (event.clientX > 10 ? (event.clientX < document.body.clientWidth - 10 ? event.clientX : document.body.clientWidth - 10) : 10);

            let curCLientY = (event.clientY > 10 ? (event.clientY < document.body.clientHeight - 10 ? event.clientY : document.body.clientHeight - 10) : 10);

            let toRight = curCLientX - pointLeft + right;

            let toBottom = curCLientY - pointTop + bottom;

            if (event.clientX < 10) {
                store.addMaskXY('left');
            }
            else if (event.clientX > document.body.clientWidth - 10) {
                store.addMaskXY('right');
            }
            else if (event.clientY < 0) {
                store.addMaskXY('top');
            }
            else if (event.clientY > document.body.clientHeight) {
                store.addMaskXY('bottom');
            }
            else {
                store.clearMaskXY()
            }

            setState({
                ...state,
                ...{
                    toRight: toRight,
                    toBottom: toBottom,
                }
            })
        }

        const onmouseup = (event) => {
            store.clearMaskXY()
            //鼠标松开后清除移动事件
            if (event.clientY < 0 || event.clientY > document.body.clientHeight) {
                handleExtend();
            }

            if (event.clientX < 10) {
                handleExtend('left');
            }
            if (event.clientX > document.body.clientWidth - 10) {
                handleExtend('right');
            }

            document.removeEventListener('mousemove', onmousemove);
            document.removeEventListener('mouseup', onmouseup);

        }

        document.addEventListener('mousemove', onmousemove);
        document.addEventListener('mouseup', onmouseup);
    }

    const dragScale = (e, x?, y?) => {
        if (!x && !y) return;

        if (!controllable()) return;

        e.stopPropagation();

        let { width, toRight: right, } = state;
        let pointLeft = e.clientX //获取此时鼠标距离屏幕左侧的距离
        let left = dom.offsetLeft + right; //对话框到左边的距离
        let pointDirectionX, pointDirectionY; //点击的是对话框上下左右

        if (x) {
            if (pointLeft - left <= 20 && pointLeft >= left) {
                pointDirectionX = 'left';
            } else if (width + left - pointLeft <= 20) {
                pointDirectionX = 'right';
            } else {
                return;
            }
        }

        let { height, toBottom: bottom, } = state;
        let pointTop = e.clientY //获取此时鼠标距离屏幕顶部的距离
        let top = dom.offsetTop + bottom; //对话框到顶部的距离

        if (y) {
            if (pointTop - top <= 20 && pointTop >= top) {
                pointDirectionY = 'top';
            } else if (height + top - pointTop <= 20) {
                pointDirectionY = 'bottom';
            } else {
                return;
            }
        }

        const onmousemove = (event) => {
            window.getSelection ? window.getSelection().removeAllRanges() : (document as any).selection.empty();
            let toRight = right, newWidth = width, toBottom = bottom, newHeight = height;

            if (x) {
                if (pointDirectionX === 'left') {
                    toRight = event.clientX - pointLeft + right;
                    newWidth = width + pointLeft - event.clientX;
                    newWidth = newWidth < 200 ? 200 : newWidth;
                } else {
                    toRight = right;
                    newWidth = width + event.clientX - pointLeft;
                    newWidth = newWidth < 200 ? 200 : newWidth;
                }
            }

            if (y) {
                if (pointDirectionY === 'top') {
                    toBottom = event.clientY - pointTop + bottom;
                    newHeight = height + pointTop - event.clientY;
                    newHeight = newHeight < 120 ? 120 : newHeight;
                } else {
                    toBottom = bottom;
                    newHeight = height + event.clientY - pointTop;
                    newHeight = newHeight < 120 ? 120 : newHeight;
                }
            }

            setState({
                ...state,
                ...{
                    toRight,
                    width: newWidth,
                    toBottom,
                    height: newHeight,
                }
            })
        }

        const onmouseup = () => {
            document.removeEventListener('mousemove', onmousemove);
            document.removeEventListener('mouseup', onmouseup);
        }

        document.addEventListener('mousemove', onmousemove);
        document.addEventListener('mouseup', onmouseup);
    }

    //聚焦
    const handleFocus = () => {
        if (props.isModal) return;
        const { dialogboxList } = store;
        const focusZIndex = store.focusZIndex;
        if (dialogboxList.length > 1 && state.zIndex < focusZIndex) {
            let newZIdx = store.promoteZIndex(dialogboxId);
            setState({
                ...state,
                zIndex: newZIdx,
            })
        }
    }

    useEffect(() => {
        clearTimeout(timeout);
        if (!isMount) {
            if (props.visible === false) {
                afterClose()
            } else {
                setState({
                    ...state,
                    visible: true
                })
                store.changeDialogboxVisible(dialogboxId, true);
                if (props.fullScreen) {
                    handleExtend(true)
                }
            }
        }
    }, [props.visible])

    useEffect(() => {
        ref.current.dialogboxId = store.registerDialogbox(props);
        // 如果是通过open方法打开，需要单独判断是否初始全屏
        ref.current.isMount = false;
        return () => {
            afterClose();
            store.unRegisterDialogbox(dialogboxId);
        }
    }, [])

    const btnListRender = () => {
        return <div className='dialogbox-header-btnList'>
            <button
                className={'dialogbox-header-btn btn-minimize'}
                onClick={minimize}
            >
                <i className='dialogbox-icon dialogbox-icon-minimize' ></i>
            </button>

            <button
                className={'dialogbox-header-btn btn-maximize'}
                onClick={handleExtend}
            >
                <i className={classNames('dialogbox-icon',
                    {
                        'dialogbox-icon-restore': isExtend,
                        'dialogbox-icon-maximize': !isExtend
                    }
                )}></i>
            </button>

            <button
                className='dialogbox-header-btn btn-close'
                onClick={close}>
                <i className='dialogbox-icon dialogbox-icon-close'></i>
            </button>
        </div>
    }

    const headerRender = () => {
        return header && <div className='dialogbox-header' style={headerStyle}>
            <div className='dialogbox-title'/* 对话框拖动事件 */
                onDoubleClick={(e) => {
                    e.stopPropagation();
                    handleFocus();
                    handleExtend();
                }}
                onMouseDown={(e) => {
                    handleFocus()
                    draggable && dragMove(e)
                }}>
                <span className='dialogbox-title-content'
                    onDoubleClick={(e) => {
                        e.stopPropagation();
                    }}
                    onMouseDown={(e) => {
                        e.stopPropagation();
                    }}>{title}</span>
            </div>

            {/* 右上角功能图标 */}
            {btnListRender()}
        </div>
    }

    const footerRender = () => {
        if (typeof footer == 'string' || React.isValidElement(footer)) {
            /* 如果是一个react组件 */
            return <div className='dialogbox-footer-wrapper'>
                {footer}
            </div>
        }

        if (footer === false) {
            return null
        }

        return (
            <div
                style={footerStyle}
                className='dialogbox-footer'
            >
                <div className='dialogbox-footer-btnList'>
                    <Button
                        dialogboxType={'windows'}
                        className='dialogbox-footer-btn cancel-btn'
                        onClick={onCancel}>
                        {cancelText || '取消'}
                    </Button>

                    <Button
                        dialogboxType={'windows'}
                        btnType='primary'
                        className='dialogbox-footer-btn ok-btn'
                        onClick={onOk}>
                        {okText || '确认'}
                    </Button>
                </div>
            </div>
        )
    }

    const angleRender = () => {
        return ['right-bottom', 'right-top', 'left-bottom', 'left-top'].map(item => {
            return <div key={item} className={classNames('draggableAngle', item)} onMouseDown={(e) => dragScale(e, true, true)}></div>
        })
    }

    const sideRender = () => {
        return ['right', 'top', 'bottom', 'left'].map(item => {
            const y = item === 'top' || item === 'bottom';
            return <div key={item} className={classNames('draggableSide', item)} onMouseDown={(e) => {
                dragScale(e, !y, y)
            }}></div>
        })
    }

    const { visible, isExtend, toRight, toBottom, transition, zIndex, width, height, marginTop, marginLeft } = state;
    const className = classNames('dialogbox', 'dialogbox-animation-in',
        {
            'dialogbox-maximizeStatus': isExtend,
            [propsClassName]: propsClassName,
            'dialogbox-uncontrolable': !controllable(),
            'dialogbox-foucs': isfocus(),
            'dialogbox-animation-out': !props.visible
        }
    )

    const transformProps = {
        transform: ''
    }

    if (toRight || toBottom) {
        transformProps.transform = 'translate(' + (toRight || 0) + 'px,' + (toBottom || 0) + 'px)'
    }

    return (
        <div
            key={'dialogbox-id-' + dialogboxId}
            ref={(dialogbox) => ref.current.dom = dialogbox}
            id={'dialogbox-' + dialogboxId}
            className={className}
            onClick={handleFocus}
            onMouseDown={e => {
                if (!controllable()) {
                    e.preventDefault()
                }
            }}
            style={{
                display: visible ? 'flex' : 'none',
                width: width + 'px',
                height: height + 'px',
                zIndex: zIndex,
                marginTop,
                marginLeft,
                transition,
                ...transformProps,
            }}>
            {
                angleRender()
            }

            {
                sideRender()
            }

            {
                headerRender()
            }

            <div
                className='dialogbox-body dialogbox-scroll'
            >
                <div className='dialogbox-content'>
                    {props.children}
                </div>
            </div>

            {
                footerRender()
            }
        </div>
    )
}))

export default Dialogbox;