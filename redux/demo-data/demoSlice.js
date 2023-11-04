import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    data: [],
    selectedCompany: null,
};

const demoSlice = createSlice({
    name: 'demo',
    initialState,
    reducers: {
        updateData: (state, action) => {
            return { ...state, data: action.payload };
        },
        selectCompany: (state, action) => {
            state.selectedCompany = action.payload;
        },
    },
});

export const { updateData, selectCompany } = demoSlice.actions;
export default demoSlice.reducer;
