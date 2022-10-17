const apiUrl = "https://alumni-case-database.herokuapp.com/api/v1"

export const getTopics = async () => {
    try{
        const response = await fetch(`${apiUrl}/topics`);
        if(!response.ok){
            throw new Error("No projects found");
        }
        const data = await response.json();
        return [null,data]

    }catch(error){
        return[error.message, []];
    }
}

export const getTopic = async (n) => {

    try{
        const response = await fetch(`${apiUrl}/topics/${n}`);
        if(!response.ok){
            throw new Error("No projects found");
        }
        const data = await response.json();
        return [null,data]

    }catch(error){
        return[error.message, []];
    }
}