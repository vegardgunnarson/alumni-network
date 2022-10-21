import axios, { createHeaders } from ".";
import keycloak from "../keycloak/keycloak";

const apiUrl = process.env.REACT_APP_API_URL+"student";

export const createUser = async (username) => {
  //post new user with username
  //alert("hei")
  try {
    //alert()
      const response = await fetch(apiUrl, {
          method: 'POST',
          headers: createHeaders(),
          body: JSON.stringify({
            id: username,
            name: keycloak.tokenParsed.name,
            picture: "https://i.pinimg.com/736x/d7/3b/c1/d73bc1381fb1380112a98266b6f2d27f.jpg"
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

export const checkDbForUser = async () => {
  try {
      const username = keycloak.tokenParsed.preferred_username;
      const response = await fetch(`${apiUrl}/${username}`)
      console.log(response)
      if (!response.ok){
        await createUser(username);
        const response = await fetch(`${apiUrl}/${username}`)
        const data = await response.json();
        console.log(data)
        return [null, data]


      } else {
        const data = await response.json();
        console.log(data)
        return [null, data]
      }
  }
  catch (error) {
  return [error, null]
}
}