import { inject, observer, Provider as MobxProvider } from 'mobx-react';
import * as React from 'react';
import store from '../../store';
import Dialogbox from '../dialogbox/Dialogbox';
import * as classNames from 'classnames';
import Control from '../dialogbox/Control';
import DragWrapper from '../dragWrapper/DragWrapper';

const Root = ((props) => {
    return <MobxProvider store={store}>
        <Provider>
            {props.children}
        </Provider>
    </MobxProvider>
})

const Provider = inject('store')(observer((props) => {

    const { store } = props;

    const { dragWrapperVisible, isDialogboxMask, maskXClassList, maskYClassList, validFunction, focusItem } = store;

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

        <Control store={store} />

        <div
            className={classNames('dialogbox-mask', {
                "dialogbox-mask-in": isDialogboxMask,
                "dialogbox-mask-out": !isDialogboxMask
            })}

            onClick={handleMaskClick}
        >
            {
                dragWrapperVisible && <DragWrapper />
            }
        </div>
        <div className={Array.from(maskXClassList).join(' ')}>

        </div>
        <div className={Array.from(maskYClassList).join(' ')}></div>
        <div
            id="react-dialogbox-root"
            className="react-dialogbox-root"
            onClick={handleMaskClick}
        >
            {
                store.dialogboxList.filter(item => item.component).map(item => {
                    return <Dialogbox
                        dialogboxId={item.dialogboxId}
                        byOpen={true}
                        key={'dialogbox-key-' + item.dialogboxId}
                        {...item}
                        close={() => store.closeDialogbox(item.dialogboxId)}
                        minimize={() => store.changeDialogboxVisible(item.dialogboxId, false)}
                    />
                })
            }
        </div>
    </>
}))

export default Root