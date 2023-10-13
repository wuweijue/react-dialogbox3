import { inject, observer, Provider as MobxProvider } from 'mobx-react';
import * as React from 'react';
import store from '../../store';

const Root = ((props) => {
    return <MobxProvider store={store}>
        <Provider>
            {props.children}
        </Provider>
    </MobxProvider>
})

const Provider = inject('store')(observer((props) => {

    const { store } = props;

    const { maskVisible, maskClassList, maskXClassList, maskYClassList, validFunction, focusItem } = store;

    const handleMaskClick = () => {
        if (!focusItem.maskClosable) {
            return
        }
        validFunction(focusItem.onCancel)
    }

    return <>
        {
            props.children
        }
        <div
            style={{ display: maskVisible ? 'block' : 'none' }}
            className={Array.from(maskClassList).join(' ')}
            onClick={handleMaskClick}
        ></div>


        <div className={Array.from(maskXClassList).join(' ')}></div>
        <div className={Array.from(maskYClassList).join(' ')}></div>
        <div 
            id="react-dialogbox-root" 
            className="react-dialogbox-root"
            onClick={handleMaskClick}
        >
            {

            }
        </div>
    </>
}))

export default Root