/*import keycloak from "../../keycloak/keycloak";
import { CONFIRMED_GET_EVENTS, CREATE_EVENT_ACTION } from "../actions/EventsActions";

const initialState = { 
    events: [
        {id:1, title: 'post Title', description: 'Sample Description', username: 'ad' },
        {id:2, title: 'post Title 2', description: 'Sample Description 2', username: 'ad'},
        {id:3, title: 'post Title 3', description: 'Sample Description 3',  username: 'ad'},
    ],
};

function nextEventId(event){
    const maxId = event.reduce((maxId, event) => Math.max(event.id, maxId),-1)
    return maxId + 1
}


export default function EventReducer (state = initialState, action){
    switch(action.type) {
       case 'events/eventAdded': {
        return [
            ...state,
            {
                id: nextEventId(state),
                title: 'event Title  singel event',
                description: action.payload,
                username: <span>{ keycloak.tokenParsed.name}</span>,
            }
        ]
       }
       case 'events/eventToggled':{
        return state.map(event => {
            if (event.id !== action.payload){
                return event
            }
        
        return {
            ...event,
            completed: !event.completed
        }
        })
    }
    default:
        return state;
    }
}
*/