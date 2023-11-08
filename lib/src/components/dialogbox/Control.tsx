import * as React from 'react';
import './control.less';
import { useState } from 'react';

const Control = (props) => {

    const store = props.store;

    const { storageboxOptions } = props;

    const { operation = 'click' } = storageboxOptions || {}

    const [state, setState] = useState({
        toTop: 200,
        listVisible: false
    })

    const { toTop, listVisible } = state;

    const dragMove = (e) => {
        //当鼠标按下时触发
        e.stopPropagation();

        let pointTop = e.clientY; //获取此时鼠标距离屏幕顶部的距离
        let top = state.toTop;

        //当鼠标按下后拖动时触发

        const onmousemove = (event) => {

            //避免拖动过程中文本被选中
            window.getSelection ? window.getSelection().removeAllRanges() : (document as any).selection.empty();

            let curCLientY = (event.clientY > 10 ? (event.clientY < document.body.clientHeight - 10 ? event.clientY : document.body.clientHeight - 10) : 10);

            let toTop = top - curCLientY + pointTop;

            setState({
                ...state,
                toTop: toTop,
            })
        }

        const onmouseup = (event) => {
            document.removeEventListener('mousemove', onmousemove);
            document.removeEventListener('mouseup', onmouseup);
        }

        document.addEventListener('mousemove', onmousemove);
        document.addEventListener('mouseup', onmouseup);
    }

    const transformProps = {
        transform: 'translate(' + (0) + 'px,' + (-toTop || 0) + 'px)'
    }

    const isVisible = React.useMemo(() => {
        if (typeof storageboxOptions === 'object') {
            return storageboxOptions.visible !== false
        }
        if (typeof storageboxOptions === 'boolean') {
            return storageboxOptions
        }
        return true
    }, [storageboxOptions])

    const className = ['dialogbox-control']
    if (listVisible) {
        className.push('dialogbox-control-in')
    }

    return <div
        className={className.join('')}
        onMouseLeave={() => {
            setState({
                ...state,
                listVisible: false
            })
        }}
        onMouseDown={(e) => {
            dragMove(e)
        }}
        style={{
            display: isVisible ? 'block' : 'none',
            ...transformProps
        }}
    >

        <button className="home-button" style={{ display: listVisible ? 'none' : 'block' }}
            onClick={(e) => {
                if (operation !== 'click') return;
                setState({
                    ...state,
                    listVisible: true
                })
            }}
            onMouseOver={(e) => {
                if (operation !== 'hover') return;
                setState({
                    ...state,
                    listVisible: true
                })
            }}
        >
            <div className="middle">
                <div className="left-top arrow"></div>
                <div className="left-bottom arrow"></div>
                <div className="right-top arrow"></div>
                <div className="right-bottom arrow"></div>
            </div>
        </button>

        <div className="list-wrapper" style={{ display: listVisible ? 'block' : 'none' }}>
            {
                store.dialogboxList.filter(item => item.component && !item.visible).map((item, idx) => {
                    return <div className="list-item" key={item.dialogboxId} >
                        <div className='title'
                            onClick={() => store.changeDialogboxVisible(item.dialogboxId, true)}>
                            <span className='radius'>{idx + 1}.</span>
                            <span>{item.title || item.dialogboxId}</span>
                        </div>
                        <div className="close" onClick={() => {
                            store.closeDialogbox(item.dialogboxId)
                        }}></div>
                    </div>
                })
            }
        </div>
    </div>
}

export default Control