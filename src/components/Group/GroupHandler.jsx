

const apiUrl = "https://alumni-case-database.herokuapp.com/api/v1";

/**
 * Returns all groups
 * @returns 
 */
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
/**
 * Returns all groups a user is part of given user
 * @param {user} currentuser 
 * @returns 
 */
export const getGroupsOfStudent = async (currentuser) => {
    
    try{
        const response = await fetch(`${apiUrl}/alumnigroup/displayJoinedGroups?accessing_student_id=${currentuser.id}`);
        if(!response.ok){
            throw new Error("No groups found");
        }
        const data = await response.json();
        return [null,data]

    }catch(error){
        return[error.message, []];
    }
}
/**
 * Returns all groups a user can be a part of given user
 * @param {user} currentuser 
 * @returns 
 */
export const getAvailableGroupsOfStudent = async (currentuser) => {
    try{
        const response = await fetch(`${apiUrl}/alumnigroup/displayAvailableGroups?accessing_student_id=${currentuser.id}`);
        if(!response.ok){
            throw new Error("No groups found");
        }
        const data = await response.json();
        return [null,data]

    }catch(error){
        return[error.message, []];
    }
}




    
    
