import { action, makeAutoObservable } from 'mobx';

interface dialogboxItem {
    component?: JSX.Element,
    dialogboxId: number,
    isModal: boolean,
    onOk(): void
    onCancel(): void,
    visible: boolean,
    mask: boolean
}

class Store {

    constructor() {
        makeAutoObservable(this);
        // 注册键盘事件
        document.addEventListener('keydown', (event) => {

            if (this.isAllDialogboxHide) return;

            // 找到此时被聚焦的对话框
            const focusId = this.focusItem.dialogboxId;

            const instance = this.findItemById(focusId);

            if (!instance) return;

            if (event.key === 'Enter') {
                event.preventDefault();
                this.validFunction(instance.onOk)
            }

            if (event.key === 'Escape') {
                event.preventDefault();
                this.validFunction(instance.onCancel)
            }
        })
    }

    // 当前被聚焦元素的层级，即最高层级
    focusZIndex = 1000
    dialogboxList: dialogboxItem[] = []
    maskClassList = new Set(['dialogbox-mask'])
    maskXClassList = new Set(["dialogbox-extend-mask-x"])
    maskYClassList = new Set(["dialogbox-extend-mask-y"])
    maskVisible = false

    validFunction = (callback, event?) => {
        if (!callback || typeof callback !== 'function') {
            return false
        }
        return callback(event)
    }

    // 获取当前被聚焦的元素
    get focusItem() {
        return ((this.dialogboxList.length && this.dialogboxList[this.dialogboxList.length - 1]) as dialogboxItem)
    }

    // 获取dialogboxId对应的对话框react对象
    findItemById(dialogboxId: number) {
        return (this.dialogboxList.find(item => {
            return item.dialogboxId == dialogboxId;
        }) as dialogboxItem);
    }

    @action clearMaskXY() {
        this.maskXClassList.delete('mask-in-left');
        this.maskXClassList.delete('mask-in-right');
        this.maskYClassList.delete('mask-in-top');
        this.maskYClassList.delete('mask-in-bottom');
    }

    // 注册新生成的对话框
    @action registerDialogbox(props) {
        const { mask = true, visible, onOk, onCancel, isModal } = props;
        const dialogboxId = ++this.focusZIndex;
        this.dialogboxList.push({
            dialogboxId,
            visible,
            mask,
            onOk,
            onCancel,
            isModal
        });

        this.changeMask();

        return dialogboxId;
    }

    @action unRegisterDialogbox(dialogboxId) {
        const { idx } = this.getDialogboxById(dialogboxId);
        this.dialogboxList.splice(idx, 1);
        this.changeMask();
    }

    @action changeDialogboxVisible(dialogboxId, visible) {
        const { idx } = this.getDialogboxById(dialogboxId);
        this.dialogboxList[idx].visible = visible;
        if (visible == true) {
            this.promoteZIndex(dialogboxId)
        }
        this.changeMask();
    }

    // 当对话框出现或隐藏时去同步遮罩层的状态
    @action changeMask() {
        const isMask = this.isDialogboxMask;

        if (isMask) {
            if (this.maskVisible) {
                const maskDOM = document.createElement('div');
                maskDOM.classList.add('dialogbox-mask');
                document.body.appendChild(maskDOM);
            } else {
                this.maskClassList.delete('dialogbox-mask-out')
            }
        } else {
            if (this.maskVisible) {
                if (this.maskClassList.has('.dialogbox-mask-out')) {
                    this.maskClassList.add('dialogbox-mask-out');
                }
            }
        }
    }

    // 判断是否当前所有对话框均已隐藏
    get isAllDialogboxHide() {
        return this.dialogboxList.every(item => !item.visible)
    }

    // 判断是否当前所有对话框均已隐藏或无遮罩层
    get isDialogboxMask() {
        return !!this.dialogboxList.find(item => item.visible && item.mask);
    }

    getDialogboxById(dialogboxId) {
        let idx = this.dialogboxList.findIndex(item => item.dialogboxId == dialogboxId);
        let item = this.dialogboxList[idx];
        return {
            idx,
            item
        }
    }

    // 聚焦后提升层级
    @action promoteZIndex(dialogboxId) {
        for (let i = 0; i < this.dialogboxList.length; i++) {
            if (this.dialogboxList[i].dialogboxId == dialogboxId) {
                let dialogbox = this.dialogboxList[i];
                this.dialogboxList.splice(i, 1);
                this.dialogboxList.push(dialogbox);
                break;
            }
        }
        return ++this.focusZIndex;
    }

    @action createDialogbox (dialogbox, options) {
        const dialogboxId = this.focusZIndex + 1; 
        this.dialogboxList.push({
            component: dialogbox,
        })
        return dialogboxId
    }
}

export default new Store();