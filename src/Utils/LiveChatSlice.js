import { createSlice } from "@reduxjs/toolkit";
import {OFFSET_LIVE_COUNT} from "./constant";

const LiveChatSlice = createSlice({
    name:"liveChat",
    initialState:{
        messages : [],
    },
    reducers:{
        addMessage:(state , action) => {
            state.messages.splice(OFFSET_LIVE_COUNT , 1)
            state.messages.unshift(action.payload);
        }
    },
})

export const {addMessage} = LiveChatSlice.actions;

export default LiveChatSlice.reducer;