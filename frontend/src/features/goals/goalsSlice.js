import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import goalsService from "./goalsService"


const initialState = {
    goals: [],
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: ''
}

const goalsSlice = createSlice({
    name: 'goals',
    initialState,
    reducers: {
        reset: state => initialState
    },
    extraReducers: (builder) => {
        builder
            .addCase(createGoal.pending, state => {
                state.isLoading = true
            })
            .addCase(createGoal.fulfilled, (state, action) => {
                state.goals.push(action.payload)
            })
            .addCase(createGoal.rejected, (state, action) => {
                state.message = action.payload
            })
            .addCase(getGoals.pending, state => {
                state.isLoading = true
            })
    }
})

export const getGoals = 
    createAsyncThunk('goals/getGoals', 
        async (id, thunkApi) => {
            try {
                return await goalsService.getGoals(id)
            } catch (error) {
                const message = (error.response && error.response.data && error.response.data.messaage) ||
                error.message || error.toString()
        
                return thunkApi.rejectWithValue(message)        
            }
    }
)

export const createGoal = 
    createAsyncThunk('goals/createGoal', 
        async (goal, thunkApi) => {
            try {
                const token = thunkApi.getState().auth.user.token
                return await goalsService.createGoal(goal, token)
            } catch (error) {
                const message = (error.response && error.response.data && error.response.data.messaage) ||
                error.message || error.toString()
        
                return thunkApi.rejectWithValue(message)        
            }
    }
)

export const { reset } = goalsSlice.actions
export default goalsSlice.reducer
