const asyncHandler = require('express-async-handler')
const Goal = require('../models/goalModel')

const getGoals = asyncHandler(async (req, res) => {
    const goals = await Goal.find()

    res.json(goals)
})

const setGoal = asyncHandler(async (req, res) => {
    if (!req.body.text) {
        res.status(400)
        throw new Error('Please fill text field')
    }

    const goal = await Goal.create({
        text: req.body.text
    })

    res.json(goal)
})

const updateGoal = asyncHandler(async (req, res) => {
    const goal = await Goal.findByIdAndUpdate(req.params.id, req.body)

    res.json({ message: `Updated goal ${goal}`})
})

const deleteGoal = asyncHandler(async (req, res) => {
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