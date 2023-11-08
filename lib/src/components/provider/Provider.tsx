import { inject, observer, Provider as MobxProvider } from 'mobx-react';
import * as React from 'react';
import store from '../../store';
import Dialogbox from '../dialogbox/Dialogbox';
//@ts-ignore
import Control from '../dialogbox/Control';

const Root = ((props) => {
    return <MobxProvider store={store}>
        <Provider>
            {props.children}
        </Provider>
    </MobxProvider>
})

const Provider = inject('store')(observer((props) => {

    const { store, storagebox = true } = props;

    const { isDialogboxMask, maskXClassList, maskYClassList, validFunction, focusItem } = store;

    const handleMaskClick = () => {
        if (!focusItem.maskClosable) {
            return
        }
        validFunction(focusItem.onCancel)
    }

    React.useEffect(()=>{
        store.initDefaultOptions(props)
    }, [props])

    const className = ['dialogbox-mask'];
    if(isDialogboxMask) {
        className.push('dialogbox-mask-in')
    } else {
        className.push('dialogbox-mask-out')
    }

    return <>
        {
            props.children
        }

        { storagebox && <Control store={store} storagebox={storagebox}/>}

        <div
            className={className.join(' ')}

            onClick={handleMaskClick}
        >
            {
                // dragWrapperVisible && <DragWrapper />
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