import * as userService from "../service/userService.js"

const login = (req, res) => {
    res.json(userService.login(req.body))
}

export { login }