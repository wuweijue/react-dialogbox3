import IDialogboxMethod, { IDialogbox } from './DialogboxMethod.d';
import store from '../store';

class DialogboxMethod implements IDialogboxMethod {

    public openDialogbox = (dialogbox): IDialogbox => {
        const dialogboxId = store.createDialogbox(dialogbox);
        return {
            DOM: document.getElementById('dialogbox-' + dialogboxId),
            dialogboxId,
            hide: () => this.hideDialogbox(dialogboxId),
            close: () => this.closeDialogbox(dialogboxId),
            show: () => this.showDialogbox(dialogboxId)
        };
    }

    public closeDialogbox(dialogboxId) {
       store.closeDialogbox(dialogboxId)
    }

    public closeAllDialogbox(): void {
        store.closeDialogbox()
    }

    public showDialogbox = (dialogboxId) => {
        store.changeDialogboxVisible(dialogboxId, true)
    }

    public hideDialogbox = (dialogboxId: number): void => {
        store.changeDialogboxVisible(dialogboxId, false)
    }

    public hideAllDialogbox(): void {
        store.hideAllDialogbox()
    }
}

export default new DialogboxMethod();