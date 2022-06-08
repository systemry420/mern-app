import axios from "axios";

const API_URL = '/api/goals/'

const getGoals = async (userId) => {
    const response = await axios.get(API_URL, userId)

    console.log(response);

}

const createGoal = async (goal, token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
    const response = await axios.post(API_URL, goal, config)
    return response.data

}

const goalsService = {
    getGoals,
    createGoal
}

export default goalsService