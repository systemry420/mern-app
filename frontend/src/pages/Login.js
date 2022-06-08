import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { login } from '../features/auth/authSlice';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const { email, password } = formData

  const { user, message } = useSelector(state => state.auth)
  const dispatch = useDispatch()
  const navigate= useNavigate()

  useEffect(() => {

    if(user) {
      navigate('/dashboard')
    }
    
    return () => {
    };
  }, [user, message]);
  
  const onChange = (e) => {
      setFormData(prevState => {
        return {
          ...prevState,
          [e.target.name]: e.target.value
        }
      })
  }

  const onSubmit = (e) => {
    e.preventDefault()

    dispatch(login(formData))

  }
  
  return (
    <div>
      <h1>Login</h1>
      <h2>And start setting goals</h2>
      <form onSubmit={onSubmit}>
        <input
          type='text'
          value={email}
          name={'email'}
          placeholder='Enter your email'
          onChange={onChange}
        />
        <input
          type='password'
          value={password}
          name={'password'}
          placeholder='Enter your password'
          onChange={onChange}
          />
        <input type='submit' value='Submit' />
      </form>
    </div>
  )
}

export default Login