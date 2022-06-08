import { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createGoal } from "../features/goals/goalsSlice";

const Dashboard = () => {
  const [text, setText] = useState('');

  const navigate = useNavigate()
  const { user } = useSelector(state => state.auth)
  const { message } = useSelector(state => state.goals)

  const dispatch = useDispatch()

  useEffect(() => {
    if (!user) {
      navigate('/login')
    }

    console.log(message);
    
    return () => {
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
      </div>
    )
  }
  
  export default Dashboard