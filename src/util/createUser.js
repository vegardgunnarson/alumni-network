const updateThisUser = (id, name, picture, status, bio, funfact, createdAlumniEvents, alumniGroups, alumniEvents, topics, posts, ownedAlumniGroups, studentMembershipInvites, studentRSVP  )=>{
    const newUser = {  	
    id: id,
    name: name,
    picture: picture,
    status: status,
    bio: bio,
    fun_fact: funfact,
    createdAlumniEvents: createdAlumniEvents,
    alumniGroups: alumniGroups,
    alumniEvents: alumniEvents,
    topics: topics,
    posts: posts,
    ownedAlumniGroups: ownedAlumniGroups,
    studentMembershipInvites: studentMembershipInvites,
    studentRSVPs:studentRSVP 
}
console.log(newUser)
return newUser
    }
