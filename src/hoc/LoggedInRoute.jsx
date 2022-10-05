import keycloak from "../keycloak/keycloak"

export const LoggedInRoute = ({ children }) => {
    if ( keycloak.authenticated ) { // User is logged in
        return(
            <>
              { children }
            </>
        )
    } else { // user is NOT logged
        return (
            <>
                <h4>you are not authorized to see this</h4>
                <p>Please login to see this resource</p>
            </>
        )
    }
}