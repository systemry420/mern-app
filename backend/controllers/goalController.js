const getGoals = (req, res) => {
    res.json({ message: 'Get goal' })
}

const setGoal = (req, res) => {
    res.json({ message: 'Set goal'})
}

const updateGoal = (req, res) => {
    res.json({ message: `Update goal ${req.params.id}`})
}

const deleteGoal = (req, res) => {
    res.json({ message: `Delete goal ${req.params.goalId}`})
}

module.exports = {
    getGoals,
    setGoal,
    updateGoal,
    deleteGoal
}