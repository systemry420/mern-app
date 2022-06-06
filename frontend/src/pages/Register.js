import { useState, useEffect } from 'react'
import { userSelector, useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { register, reset } from '../features/auth/authSlice'

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    password2: ''
  });

  const { name, email, password, password2 } = formData
  const navigate = useNavigate()
  const dispatch =  useDispatch()
  const { user, isLoading, isError, isSuccess } = useSelector(state => state.auth)
  
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

    const userData = {
      name, email, password
    }

    dispatch(register(userData))
  }
  
  return (
    <div>
      <h1>Register</h1>
      <h2>Please create an account</h2>
      <form onSubmit={onSubmit}>
        <input
          type='text'
          value={name}
          name={'name'}
          placeholder='Enter your name'
          onChange={onChange}
        />
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
        <input
          type='password'
          value={password2}
          name={'password2'}
          placeholder='Confirm your password'
          onChange={onChange}
        />
        <input type='submit' value='Submit' />
      </form>
    </div>
  )
}

export default Register