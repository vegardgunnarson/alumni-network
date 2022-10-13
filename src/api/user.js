import axios, { createHeaders } from ".";
import keycloak from "../keycloak/keycloak";

const apiUrl = process.env.REACT_APP_API_URL+"student";

export const createUser = async () => {
  //post new user with username
  //alert("hei")
  try {
    //alert()
      const response = await fetch(apiUrl, {
          method: 'POST',
          headers: createHeaders(),
          body: JSON.stringify({
            token: keycloak.token,
            name: keycloak.tokenParsed.name,
          })
      });

      if(!response.ok) {
          throw new Error('Could not create new user with username '+keycloak.tokenParsed.username);
      }
      const data = await response.json();
      //return user object
      return data;

  } catch (error) {
      return error.message;
  }
}
