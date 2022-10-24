const apiUrl = "https://alumni-case-database.herokuapp.com/api/v1"

export const getEvents = async () => {
    try{
        const response = await fetch(`${apiUrl}/alumniEvent`);
        if(!response.ok){
            throw new Error("No projects found");
        }
        const data = await response.json();
        return [null,data]

    }catch(error){
        return[error.message, []];
    }
}
export const getEvent = async () => {
    let n=7;
    try{
        const response = await fetch(`${apiUrl}/alumniEvent/${n}`);
        if(!response.ok){
            throw new Error("No projects found");
        }
        const data = await response.json();
        return [null,data]

    }catch(error){
        return[error.message, []];
    }
}
export const getEventsOfStudent = async (currentuser) => {
    
    try{
        const response = await fetch(`${apiUrl}/alumniEvent/displayJoinedEvents?accessing_student_id=${currentuser.id}`);
        if(!response.ok){
            throw new Error("No events found");
        }
        const data = await response.json();
        return [null,data]

    }catch(error){
        return[error.message, []];
    }
}
export const getAvailableEventssOfStudent = async (currentuser) => {
    try{
        const response = await fetch(`${apiUrl}/alumniEvent/displayAvailableEvents?accessing_student_id=${currentuser.id}`);
        if(!response.ok){
            throw new Error("No events found");
        }
        const data = await response.json();
        return [null,data]

    }catch(error){
        return[error.message, []];
    }
}