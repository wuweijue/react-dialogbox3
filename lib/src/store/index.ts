import { action, makeAutoObservable } from 'mobx';

interface dialogboxItem {
    component?: boolean,
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

            const focusId = this.focusItem.dialogboxId;
            const { item } = this.getDialogboxById(focusId);

            if (event.key === 'Enter') {
                event.preventDefault();
                this.validFunction(item.onOk)
            }

            if (event.key === 'Escape') {
                event.preventDefault();
                this.validFunction(item.onCancel)
            }
        })
    }

    // 当前被聚焦元素的层级，即最高层级
    focusZIndex = 1000
    dialogboxList: dialogboxItem[] = []
    maskXClassList = new Set(["dialogbox-extend-mask-x"])
    maskYClassList = new Set(["dialogbox-extend-mask-y"])

    // 获取当前被聚焦的元素
    get focusItem() {
        return ((this.dialogboxList.length && this.dialogboxList[this.dialogboxList.length - 1]) as dialogboxItem)
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

    validFunction = (callback, event?) => {
        if (!callback || typeof callback !== 'function') {
            return false
        }
        return callback(event)
    }

    @action addMaskXY(direction) {
        if(direction === 'left' || direction === 'right') {
            this.maskXClassList.add('mask-in-' + direction)
        } else {
            this.maskYClassList.add('mask-in-' + direction)
        }
    }

    @action clearMaskXY() {
        if (this.maskXClassList.has('mask-in-left')) {
            this.maskXClassList.delete('mask-out-right')
            this.maskXClassList.delete('mask-in-left');
            this.maskXClassList.add('mask-out-left');
        }
        if (this.maskXClassList.has('mask-in-right')) {
            this.maskXClassList.delete('mask-in-right');
            this.maskXClassList.delete('mask-out-left');
            this.maskXClassList.add('mask-out-right');
        }
        if (this.maskYClassList.has('mask-in-top')) {
            this.maskYClassList.delete('mask-in-bottom');
            this.maskYClassList.delete('mask-in-top');
            this.maskYClassList.add('mask-out-top');
        }
        if (this.maskYClassList.has('mask-in-bottom')) {
            this.maskYClassList.delete('mask-in-top');
            this.maskYClassList.delete('mask-in-bottom');
            this.maskYClassList.add('mask-out-bottom');
        }    
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
        return dialogboxId;
    }

    @action unRegisterDialogbox(dialogboxId) {
        const { idx } = this.getDialogboxById(dialogboxId);
        this.dialogboxList.splice(idx, 1);
    }

    @action changeDialogboxVisible(dialogboxId, visible) {
        const { idx } = this.getDialogboxById(dialogboxId);
        if (!this.dialogboxList[idx]) return;
        this.dialogboxList[idx].visible = visible;
        if (visible == true) {
            this.promoteZIndex(dialogboxId)
        }
    }

    @action hideAllDialogbox() {
        this.dialogboxList.forEach(item => {
            if (item.component) {
                item.visible = false
            }
        })
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

    @action createDialogbox(options) {
        const { isModal = false, mask = true } = options;
        const dialogboxId = this.focusZIndex + 1;
        this.dialogboxList.push({
            ...options,
            isModal,
            dialogboxId,
            mask,
            component: true
        })
        return dialogboxId
    }

    @action closeDialogbox(dialogboxId?) {
        if (dialogboxId) {
            const { idx, item } = this.getDialogboxById(dialogboxId);
            if (item) {
                this.dialogboxList[idx].visible = false;
                setTimeout(() => {
                    this.dialogboxList.splice(idx, 1)
                }, 450)
            }
        } else {
            this.dialogboxList = this.dialogboxList.filter(item => {
                return !item.component
            })
        }
    }
}

export default new Store();