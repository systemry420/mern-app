const registerUser = (req, res) => {
    res.json({ message: 'Registered' })
}

const login = (req, res) => {
    res.json({ message: 'Login' })
}

const getUser = (req, res) => {
    res.json({ message: 'get me' })
}

module.exports = {
    registerUser,
    login,
    getUser
}