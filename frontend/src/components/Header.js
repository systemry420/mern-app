import { FaUser, FaSignInAlt, FaSignOutAlt } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

const Header = () => {

    const { user } = useSelector(state => state.auth)

  return (
    <header className='header'>
        <div className='logo'>
            <Link to={'/'}>GoalSetter</Link>
        </div>
        {!user && <ul>
            <li>
                <Link to={'/login'}>
                    <FaSignInAlt /> Login
                </Link>
            </li>
            <li>
                <Link to={'/register'}>
                    <FaUser /> Register
                </Link>
            </li>
        </ul>
        }
    </header>
  )
}

export default Header