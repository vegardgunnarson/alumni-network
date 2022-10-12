/*
import { 
    
    formatEvents,
    getEvents,

} from "../../services/EventsService";


export const CREATE_EVENT_ACTION = '[Event Action] Create Events';
export const GET_EVENTS = '[Event Action] Get Events'
export const CONFIRMED_GET_EVENTS = '[Event Action] Confirmed Get Events'


export function createEventAction(){
    return {
       type: CREATE_EVENT_ACTION,
    };
}

export function getEventsAction(){
    return (dispatch, getState) => {
        getEvents().then ((response) => { 
           
            let events = formatEvents(response.data);
            dispatch(confirmedGetEventsAction(events));
            
        });
    };
} 

export function confirmedGetEventsAction(Events){
    return{
        type: CONFIRMED_GET_EVENTS,
        payload: Events,
       // nr. 69 Perform Async Ajax API Call using Redux at 5.10
    };
}*/