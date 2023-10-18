import * as React from 'react';
import './control.less';
import { useState } from 'react';
import* as classNames from 'classnames';

const Control = (props) => {

    const store = props.store;

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

    return <button className="dialogbox-control"
        onMouseDown={(e) => {
            dragMove(e)
        }}
        style={{
            ...transformProps
        }}
    >
        <div className="home-button" onMouseEnter={(e)=>{
            console.log(111)
            setState({
                ...state,
                listVisible: true
            })
        }}>
            <div className="middle">
                <div className="left-top arrow"></div>
                <div className="left-bottom arrow"></div>
                <div className="right-top arrow"></div>
                <div className="right-bottom arrow"></div>
            </div>
        </div>

        <div className={classNames('control-list', {
            'control-list-in': listVisible
        })}>
            <div className="arrow"></div>
            {
                store.dialogboxList.filter(item=>item.component).map(item=>{
                    return <div className="list-item" key={item.dialogboxId}>
                        {item.dialogboxId}
                    </div>
                })
            }
        </div>
    </button>
}

export default Control