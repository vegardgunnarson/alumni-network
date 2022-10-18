const apiUrl = "https://alumni-case-database.herokuapp.com/api/v1"

export const getPosts = async () => {
    try{
        const response = await fetch(`${apiUrl}/post`);
        if(!response.ok){
            throw new Error("No projects found");
        }
        const data = await response.json();
        return [null,data]

    }catch(error){
        return[error.message, []];
    }
}
export const getPost = async () => {
    let n=7;
    try{
        const response = await fetch(`${apiUrl}/post/${n}`);
        if(!response.ok){
            throw new Error("No projects found");
        }
        const data = await response.json();
        return [null,data]

    }catch(error){
        return[error.message, []];
    }
}