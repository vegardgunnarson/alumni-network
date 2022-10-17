
const apiUrl = "https://alumni-case-database.herokuapp.com/api/v1"

export const getGroups = async () => {

    try{
        const response = await fetch(`${apiUrl}/alumnigroup`);
        if(!response.ok){
            throw new Error("No groups found");
        }
        const data = await response.json();
        return [null,data]

    }catch(error){
        return[error.message, []];
    }
}
export const getGroupsOfStudent = async () => {
    try{
        const response = await fetch(`${apiUrl}/alumnigroup/displayJoinedGroups?accessing_student_id=8`);
        if(!response.ok){
            throw new Error("No groups found");
        }
        const data = await response.json();
        return [null,data]

    }catch(error){
        return[error.message, []];
    }
}
export const getAvailableGroupsOfStudent = async () => {
    try{
        const response = await fetch(`${apiUrl}/alumnigroup/displayAvailableGroups?accessing_student_id=8`);
        if(!response.ok){
            throw new Error("No groups found");
        }
        const data = await response.json();
        return [null,data]

    }catch(error){
        return[error.message, []];
    }
}




    
    
