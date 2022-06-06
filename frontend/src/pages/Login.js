import { useState, useEffect } from 'react'

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const { email, password } = formData
  
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