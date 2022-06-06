import { useState, useEffect } from 'react'

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    password2: ''
  });

  const { name, email, password, password2 } = formData
  
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