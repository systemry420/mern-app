const asyncHandler = require('express-async-handler')
const Goal = require('../models/goalModel')
const User = require('../models/userModel')

const getGoals = asyncHandler(async (req, res) => {
    const goals = await Goal.find({ user: req.user.id })

    res.json(goals)
})

const setGoal = asyncHandler(async (req, res) => {
    console.log(req.body);
    if (!req.body.text) {
        res.status(400)
        throw new Error('Please fill text field')
    }

    const goal = await Goal.create({
        text: req.body.text,
        user: req.user.id
    })

    console.log(goal); 

    res.json(goal)
})

const updateGoal = asyncHandler(async (req, res) => {
    const user = await User.findById(req.user.id)

    if (!user) {
        res.status(401)
        throw new Error('User not found')
    }
    
    if(goal.user.toString() !== user.id) {
        res.status(401)
        throw new Error('User not authorized')
    }
    
    const goal = await Goal.findByIdAndUpdate(req.params.id, req.body)
    res.json(goal)
})

const deleteGoal = asyncHandler(async (req, res) => {
    
    const user = await User.findById(req.user.id)

    if (!user) {
        res.status(401)
        throw new Error('User not found')
    }
    
    if(goal.user.toString() !== user.id) {
        res.status(401)
        throw new Error('User not authorized')
    }
    
    const goal = await Goal.findById(req.params.id)
    
    await Goal.deleteOne(goal)

    res.json({ id: req.params.id })
})

module.exports = {
    getGoals,
    setGoal,
    updateGoal,
    deleteGoal
} 