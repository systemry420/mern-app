const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.json({ message: 'Get goal' })
})

router.post('/', (req, res) => {
    res.json({ message: 'Set goal'})
})

router.put('/:id', (req, res) => {
    res.json({ message: `Update goal ${req.params.id}`})
})

router.delete('/:goalId', (req, res) => {
    res.json({ message: `Delete goal ${req.params.goalId}`})
})

module.exports = router