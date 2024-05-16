import { SignIn } from '@clerk/clerk-react';

import Navbar from '../components/Navbar/Navbar';
import Sidebar from '../components/Sidebar/Sidebar';
import './Pages.css';

const SignInPage = () => {
  return (
    <div>
      <Navbar />
      <Sidebar />

      <div className='main-container'>
        <SignIn />
      </div>
    </div>
  );
}

export default SignInPage;
