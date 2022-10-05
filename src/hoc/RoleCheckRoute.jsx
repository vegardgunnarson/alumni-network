import keycloak from "../keycloak/keycloak"

export const RoleCheckRoute = ({ children, role }) => {
    if( !keycloak.authenticated ) {
        return  (
            <>
                <h4>you are not authorized to see this</h4>
                <p>Please login to see this resource</p>
            </>
        )
    }
    if (keycloak.hasRealmRole(role)){
        return(<>{ children }</>)
    } else {
        return(
            <>
                <h4> You lack sufficient control access to see this</h4>
                <p> Your account is not profiled to see this page </p>
            </>
        )
    }
}