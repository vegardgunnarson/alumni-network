const apiUrl = "https://alumni-case-database.herokuapp.com/api/v1"

export const getGroups = async () => {
    try{
        const response = await fetch(`${apiUrl}/alumnigroup`);
        if(!response.ok){
            throw new Error("No projects found");
        }
        const data = await response.json();
        return [null,data]

    }catch(error){
        return[error.message, []];
    }
}