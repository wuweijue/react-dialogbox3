import { configureStore, Store } from '@reduxjs/toolkit';
import reducer, { rootType } from './reducer';

export type Reducers = {
    root: rootType,
}

const store: Store = configureStore({
    reducer: ({
        root: reducer
    }),
})

export default store