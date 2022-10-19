import axios, { createHeaders } from ".";
import { currentuser, setCurrentUser } from "../components/UserHandler";
import keycloak from "../keycloak/keycloak";
import { setUserId } from "../components/LogIn"

const apiUrl = process.env.REACT_APP_API_URL+"student";

export const createUser = async (userId) => {
  //post new user with username
  //alert("hei")
  try {
    //alert()
      const response = await fetch(apiUrl, {
          method: 'POST',
          headers: createHeaders(),
          body: JSON.stringify({
            token: keycloak.tokenParsed.preferred_username,
            name: keycloak.tokenParsed.name
          })
      });

      if(!response.ok) {
          throw new Error('Could not create new user with username '+keycloak.tokenParsed.username);
      }
      const data = await response.json();
      //return user object
      return [null, data];

  } catch (error) {
      return [error, null];
  }
}


export const getId = async ()  => {
  const userId = await fetch(`${apiUrl}`).then((response) => response.json()).then((user) => {
    return user.length+1
    })
    return(userId)
}