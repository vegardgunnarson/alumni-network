

const apiUrl = "https://alumni-case-database.herokuapp.com/api/v1"

export const getTopics = async () => {
    try{
        const response = await fetch(`${apiUrl}/topics`);
        if(!response.ok){
            throw new Error("No topics found");
        }
        const data = await response.json();
        return [null,data]

    }catch(error){
        return[error.message, []];
    }
}

export const getTopicsOfStudent = async (currentuser) => {
    try{
        const response = await fetch(`${apiUrl}/topics/displayJoinedTopics?accessing_student_id=${currentuser.id}`);
        if(!response.ok){
            throw new Error("No topics found");
        }
        const data = await response.json();
        return [null,data]

    }catch(error){
        return[error.message, []];
    }
}
export const getAvailableTopicsOfStudent = async (currentuser) => {
    try{
        const response = await fetch(`${apiUrl}/topics/displayAvailableTopics?accessing_student_id=${currentuser.id}`);
        if(!response.ok){
            throw new Error("No topic found");
        }
        const data = await response.json();
        return [null,data]

    }catch(error){
        return[error.message, []];
    }
}