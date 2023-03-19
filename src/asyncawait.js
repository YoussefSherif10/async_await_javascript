const users = require('./users')
// Define a function that returns a promise to get all users and return a promise
const getAllUsers = ()=>{
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(users);
        })
    })
}
//Define a function to create a new user and return a promise
const createUser = (user) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (!user)
                return reject('No user to be added');
            users.push(user);
            resolve(user);
        })
    })
 }
// Define a function to get a user by id and return a promise
const getAUserByID = (id) =>{
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const user = users.filter(u => u.id === id);
            (!user) ? reject('User does not exist') : resolve(user);
        })
    })
}
// Define an async function that calls the createUser and getAllUsers function using await 
// and returns all users
const displayUsers = async (user) => {
   const newUser = await createUser(user);
   const allUsers = await getAllUsers();
   return allUsers;
}
//Define an async function to display a specific user by Id
// return the user 
const displayAUser = async(id) =>{
    return await getAUserByID(id);
}

module.exports = {
    getAllUsers, getAUserByID, createUser, displayAUser, displayUsers
}