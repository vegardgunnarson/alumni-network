import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { sub } from 'date-fns';
import axios from "axios";


const EVENTS_URL = 'https://alumni-case-database.herokuapp.com/api/v1/alumniEvent';

const initialState = {
    posts: [],
    status: 'idle', //'idle' | 'loading' | 'succeeded' | 'failed'
    error: null
}

export const fetchEvents = createAsyncThunk('alumniEvent/fetchEvents', async () => {
    const response = await axios.get(EVENTS_URL)
    return response.data
})


const calendarSlice = createSlice({
    name: 'events',
    initialState,
    reducers: {
        postAdded: {
            reducer(state, action) {
                state.events.push(action.payload)
            },
            prepare( name, start_time, end_time, description) {
                return {
                    payload: {
                        name,
                        start_time: new Date().toISOString(),
                        end_time: new Date().toISOString(),
                        description,
                      
                        
                       
                    }
                }
            }
        },
    },
    extraReducers(builder) {
        builder
            .addCase(fetchEvents.pending, (state, action) => {
                state.status = 'loading'
            })
            .addCase(fetchEvents.fulfilled, (state, action) => {
                state.status = 'succeeded'
                // Adding date and reactions
                let min = 1;
                const loadedEvents = action.payload.map(event => {
                    event.date = sub(new Date(), { minutes: min++ }).toISOString();
                    
                    return event;
                });

                // Add any fetched posts to the array
                state.events = state.events.concat(loadedEvents)
            })
            .addCase(fetchEvents.rejected, (state, action) => {
                state.status = 'failed'
                state.error = action.error.message
            })
            
    }
})

export const selectAllEvents = (state) => state.events.events;
export const getPostsStatus = (state) => state.Events.status;
export const getPostsError = (state) => state.posts.error;

export const { eventAdded } = calendarSlice.actions

export default calendarSlice.reducer