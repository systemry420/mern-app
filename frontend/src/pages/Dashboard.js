import { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createGoal, getGoals, reset } from "../features/goals/goalsSlice";

const Dashboard = () => {
  const [text, setText] = useState('');

  const navigate = useNavigate()
  const { user } = useSelector(state => state.auth)
  const { message, goals } = useSelector(state => state.goals)

  const dispatch = useDispatch()

  useEffect(() => {
    if (!user) {
      navigate('/login')
    }

    console.log(goals);

    dispatch(getGoals())
    
    return () => {
      dispatch(reset())
    };
  }, [user, navigate, message]);

  const handleSubmit = (e) => {
    e.preventDefault()

    dispatch(createGoal({text}))
    setText('')
  }

    return (
      <div>
        <h1>Welcome, {user.name} </h1>
        <form onSubmit={handleSubmit}>
          <input placeholder="Enter your goal" type='text' value={text} onChange={(e) => setText(e.target.value)} />
          <input type={'submit'} value='Set goal' />
        </form>
        <ul>
          {goals.map(goal => (
            <li>{goal.text}</li>
          ))}
        </ul>
      </div>
    )
  }
  
  export default Dashboard