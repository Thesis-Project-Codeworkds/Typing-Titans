import { Link } from 'react-router-dom';
import chatIcon from '../../assets/Chat-1.svg'
import bellIcon from '../../assets/Bell.svg'
import profilePic from '../../assets/profileIcon.svg'
import './Navbar.css'


const Navbar = () => {

  return (
    <div className="nav-container">
      <Link to="/"  className='link'><h2>Typing Titans</h2></Link>
      <div className='icon-container'>
        <img src={chatIcon} alt="Chat Bubble Icon" />
        <img src={bellIcon} alt="Bell Icon" />
        <img src={profilePic} alt="Profile Picture Icon" />
      </div>
    </div>
  )

}

export default Navbar;
