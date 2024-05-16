import { SignUp } from '@clerk/clerk-react';

import Navbar from '../components/Navbar/Navbar';
import Sidebar from '../components/Sidebar/Sidebar';
import './Pages.css';

const SignUpPage = () => {
  return (
    <div>
      <Navbar />
      <Sidebar />

      <div className='main-container'>
        <SignUp />
      </div>
    </div>
  );
}

export default SignUpPage;
