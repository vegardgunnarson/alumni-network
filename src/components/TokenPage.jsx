import keycloak from "../keycloak/keycloak"

export const TokenPage = () => {
    const TokenString = keycloak.token
    const id = localStorage.getItem("user_id")
    const username = localStorage.getItem("user_username")
    const name = localStorage.getItem("user_name")
    const funfact = localStorage.getItem("user_funfact")
    const picture = localStorage.getItem("user_picture")
    const bio = localStorage.getItem("user_bio")
    const status = localStorage.getItem("user_status")


    return (
        <>
        <h2>Token Page</h2>
        <pre>{ TokenString }</pre>
        <p>{keycloak.tokenParsed.preferred_username}</p>
        <p>{username}</p>
        <p>{picture}</p>
        <p>{bio}</p>
        <p>{name}</p>
        <p>{id}</p>
        




        </>
    )
}