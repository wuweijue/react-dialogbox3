import * as React from 'react';
import store from './store';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Reducers } from './store';

const Provider = (props) => {

    const {  } = useSelector(
        (state: Reducers) => state.root,
    );

    useEffect(() => {
        // 注册键盘事件
        const callback = (event) => {
            // if (this.getIsAllDialogboxHide()) return;

            // // 找到此时被聚焦的对话框
            // const focusId = this.getFocusItem().dialogboxId;
            // const instance = this.findItemById(focusId);

            // if (!instance) return;

            // if (event.key === 'Enter') {
            //     event.preventDefault();
            //     this.validFunction(instance.onOk)
            // }

            // if (event.key === 'Escape') {
            //     event.preventDefault();
            //     this.validFunction(instance.onCancel)
            // }

        }

        document.addEventListener('keydown', callback);

        return document.removeEventListener('keydown', callback);

    })

    return <div id="react-dialogbox-provider" className="react-dialogbox-provider">
        <Provider store={store}>
            {
                props.children
            }
            <div className="dialogbox-mask"></div>
            <div className="dialogbox-extend-mask-x"></div>
            <div className="dialogbox-extend-mask-y"></div>
            <div id="react-dialogbox-root" className="react-dialogbox-provider">

            </div>
        </Provider>
    </div>
}

export default Provider