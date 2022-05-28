const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const asyncHandler = require('express-async-handler')
const User = require('../models/userModel')

const registerUser = asyncHandler(async (req, res) => {
    const { name, email, password } = req.body

    if (!name || !email || !password) {
        res.status(400)
        throw new Error('Please fill up fields')
    }

    // check if user exists
    const userExists = await User.findOne({email})
    if(userExists) {
        res.status(400)
        throw new Error('User already exists')
    }

    // bcrypt password
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt)

    const user = await User.create({
        name, email, password: hashedPassword
    })

    if (user) {
        res.json({
            _id: user.id,
            name: user.name,
            email: user.email
        })
    } else {
        res.status(400)
        throw new Error('Invalid credentials')
    }


    res.json({ message: 'Registered' })
})

const login = asyncHandler(async (req, res) => {
    res.json({ message: 'Login' })
})

const getUser = asyncHandler(async (req, res) => {
    res.json({ message: 'get me' })
})

module.exports = {
    registerUser,
    login,
    getUser
}