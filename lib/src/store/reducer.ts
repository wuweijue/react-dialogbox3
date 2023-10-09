import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type rootType = {
    boxList: any[]
}

const initialState: rootType = {
    boxList: []
}

const reducer = createSlice({
    name: 'root',
    initialState,
    reducers: {
        // setBookList: (state, action: PayloadAction<{ search?: string, pathname: string }>) => {
           
        //     return {
        //         ...state,
        //         bookList: newBookList
        //     }
        // },
    }
})

// export const { setBookList } = reducer.actions;

export default reducer.reducer