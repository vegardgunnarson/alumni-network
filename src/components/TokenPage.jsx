import keycloak from "../keycloak/keycloak"

export const TokenPage = () => {
    const TokenString = keycloak.token
    const id = localStorage.getItem("userObject")
    const username = localStorage.getItem("user_username")
    const name = localStorage.getItem("name")
    const funfact = localStorage.getItem("user_funfact")
    const picture = localStorage.getItem("user_picture")
    const bio = localStorage.getItem("user_bio")
    const status = localStorage.getItem("user_status")
    const user_id = localStorage.getItem("user_id")


    return (
        <>
        <h2>Token Page</h2>
        <pre>{ TokenString }</pre>
        <p>keycloak preferred_username: {keycloak.tokenParsed.preferred_username}</p>
        <p>keycloak name: {keycloak.tokenParsed.name}</p>
        <p>username: {username}</p>
        <p>picture: {picture}</p>
        <p>bio: {bio}</p>
        <p>name: {name}</p>
        <p>id: {id}</p>
        <p>funfact: {funfact}</p>
        <p>user_id: {user_id}</p>




        </>
    )
}