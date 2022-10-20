import keycloak from "../keycloak/keycloak"

export const TokenPage = () => {
    const TokenString = keycloak.token

    return (
        <>
        <h2>Token Page</h2>
        <pre>{ TokenString }</pre>
        </>
    )
}