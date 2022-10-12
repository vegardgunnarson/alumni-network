/*import keycloak from "../../keycloak/keycloak";
import { CONFIRMED_GET_EVENTS, CREATE_EVENT_ACTION } from "../actions/EventsActions";

const initialState = { 
    events: [
        {id:1, title: 'post Title', description: 'Sample Description', username: 'ad' },
        {id:2, title: 'post Title 2', description: 'Sample Description 2', username: 'ad'},
        {id:3, title: 'post Title 3', description: 'Sample Description 3',  username: 'ad'},
    ],
};

export default function EventReducer (state = initialState, actions){
    if(actions.type === CREATE_EVENT_ACTION) {
        const event = {
            id: Math.random(),
            title: 'post Title  singel post',
            description: 'Sample Description 3 just more text',
            username: <span>{ keycloak.tokenParsed.name}</span>,

        };
        const events = [...state.events]
        events.push(event);
        return{
            ...state,
            events,
        };
    }

    if (actions.type === CONFIRMED_GET_EVENTS){
        return{
            ...state,
            events: actions.payload,
        };

    }
    return state;
}*/