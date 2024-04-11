import { createSlice } from "@reduxjs/toolkit";

const appconfigSlice = createSlice({

    name: "app",
    initialState: {
        language: "en",
    },
    reducers: {
        changeLanguage: (state, action) => {
            state.language = action.payload;
        }
    }
})

export const { changeLanguage } = appconfigSlice.actions;
export default appconfigSlice.reducer;