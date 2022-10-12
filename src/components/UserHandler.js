
const apiKey =  process.env.REACT_APP_API_KEY
const apiUrl = process.env.REACT_APP_API_URL

/**
 * Function responsible for updating a users information using API PATCH request.
 * @param {Object} user - A user object
 * @param {String} newStatus - A string containing the new status
 * @returns Patched user object or error message
 */
 export const updateStatus = async (user, newStatus) => {
    try {
        const response = await fetch(`${apiUrl}/student/${user.id}/status`, {
            method: 'PATCH',
            headers: {
              'X-API-Key': apiKey,
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                status: newStatus
            })
        })

        if (!response.ok) {
            throw new Error ('Could not update status')
        }

        const result = await response.json();
        return [null, result]

    } catch (error) {
        return [error.message, null];
    }
}

/**
 * Function responsible for updating a users information using API PATCH request.
 * @param {Object} user - A user object
 * @param {String} newBio - An string containing the new bio
 * @returns Patched user object or error message
 */
 export const updateBio = async (user, newBio) => {
    try {
        const response = await fetch(`${apiUrl}/student/${user.id}/bio`, {
            method: 'PATCH', 
            headers: {
              'X-API-Key': apiKey,
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                bio: newBio
            })
        })

        if (!response.ok) {
            throw new Error ('Could not update bio')
        }

        const result = await response.json();
        return [null, result]

    } catch (error) {
        return [error.message, null];
    }
}

/**
 * Function responsible for updating a users information using API PATCH request.
 * @param {Object} user - A user object
 * @param {String} newFunfact - An string containing the new funfact
 * @returns Patched user object or error message
 */
 export const updateFunfact = async (user, newFunfact) => {
    try {
        const response = await fetch(`${apiUrl}/student/${user.id}/fun_fact`, {
            method: 'PATCH', // 
            headers: {
              'X-API-Key': apiKey,
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                fun_fact: newFunfact
            })
        })

        if (!response.ok) {
            throw new Error ('Could not update funfact')
        }

        const result = await response.json();
        return [null, result]

    } catch (error) {
        return [error.message, null];
    }
}