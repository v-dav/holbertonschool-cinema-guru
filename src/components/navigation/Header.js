import React from 'react'
import './navigation.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const Header = ({ userUsername, setIsLoggedIn }) => {
  const handleLogout = () => {
    localStorage.removeItem('accessToken');
    setIsLoggedIn(false);
  }

  return (
    <nav>
      <p>Cinema Guru</p>
      <div className='nav-right'>
        <img className='avatar' src='https://picsum.photos/100/100' alt='avatar'></img>
        <p>Welcome, {userUsername}</p>
        <span
          className='logout'
          onClick={handleLogout}
        >
          <FontAwesomeIcon icon="fa-solid fa-right-from-bracket" className='logout-icon'/>
          Logout
        </span>
      </div>
    </nav>
  )
}

export default Header
