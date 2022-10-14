import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios

from "axios";

const TARGET_URL= 'https://alumni-case-database.herokuapp.com/api/v1/alumnigroup';

const initialState = []

export const fetchTarget = createAsyncThunk('target/fetchTarget', async () => {
    const response = await axios.get(TARGET_URL);
    return response.data
})

const targetSlice = createSlice({
    name: 'targets',
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder.addCase(fetchTarget.fulfilled, (state, action) => {
            return action.payload;
        })
    }
})

export const selectAllTargets = (state) => state.targets;

export default targetSlice.reducer

