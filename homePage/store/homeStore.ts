import { action, makeAutoObservable } from 'mobx';

class Store {
    constructor() {
        makeAutoObservable(this);
    }

    theme = 'light'

    language = 'en-us'

    componentType = true

    activeKey = '1'

    @action switchTheme() {
        this.theme = this.theme === 'dark' ? 'light' : 'dark'
    }

    @action switchComponentType = () => {
        this.componentType = !this.componentType
    }

    @action switchLanguage(language) {
        this.language = language
    }

    @action setKey(key) {
        this.activeKey = key
    }
}

export default new Store();