import users from "../model/userModel.js";

const userModel = users

const login = (userData) => {
    return userModel.find(user => user.email === userData.email && user.password === userData.password)
}

export {login}