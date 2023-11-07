export default interface IDialogboxMethod {

    /**
     * @description 在页面中打开一个 Dialogbox
     * @param dialogbox 对话框组件  
     * @returns IDialogbox 对象
     */
    openDialogbox(dialogbox: React.Component): IDialogbox

    /**
     * @description 关闭某个指定的 dialogbox
     * @param dialogboxId 需要关闭的对话框的 ID
     */
    closeDialogbox(dialogboxId: number): void

    /**
    * @description 关闭所有 Dialogbox
    */
    closeAllDialogbox(): void

    /**
     * @description 将隐藏的 Dialogbox 展示出来
     * @param dialogboxId 需要关闭的对话框的 ID
     */
    showDialogbox(dialogboxId: number): void

    /**
     * @description 隐藏某个指定的 Dialogbox
     * @param dialogboxId 需要关闭的对话框的 ID
     */
    hideDialogbox(dialogboxId: number): void

    /**
    * @description 隐藏所有 Dialogbox
    */
    hideAllDialogbox(): void
}

export interface IDialogbox {

    /**
     * dialogbox 主体对应的 dom 元素
     */
    DOM: HTMLElement

    /**
     * dialogbox 对应的唯一 ID
     */
    dialogboxId: number

    /**
     * 关闭当前 Dialogbox 的方法
     */
    close(): void

    /**
     * 隐藏当前 Dialogbox 的方法
     */
    hide(): void

    /**
     * 展示当前被隐藏的 Dialogbox 的方法
     */
    show(): void
}