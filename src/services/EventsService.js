/*import axios from "axios"



export function getEventAction(){
    return axios.get(
        'https://alumni-case-database.herokuapp.com/api/v1/alumniEvent',
    );
}

export function getEvents(){
    return axios.get(
        'https://alumni-case-database.herokuapp.com/api/v1/alumniEvent',
    );
}

export function createEvent(eventData) {
return axios.event(
    'https://alumni-case-database.herokuapp.com/api/v1/alumniEvent',
    eventData,
);
}

export function formatEvents (eventsData) {
    let Events = [];
    for (let key in eventsData) {
        Events.push({ ...eventsData[key], id: key });
    }

    return Events;
}/*