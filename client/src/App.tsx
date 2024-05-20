import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import './App.css'
import LandingPage from './pages/LandingPage';
import MultiplayerPage from './pages/MultiplayerPage';
import CompetitionPage from './pages/CompetitionPage';
import TrainingPage from './pages/TrainingPage';
import LessonsPage from './pages/LessonsPage';
import ProfilePage from './pages/ProfilePage';
import SignInPage from './pages/SignInPage';
import SignUpPage from './pages/SignUpPage';

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<LandingPage />} />
          <Route path='/competition' element={<CompetitionPage />} />
          <Route path='/training' element={<TrainingPage />} />
          <Route path='/lessons' element={<LessonsPage />} />
          <Route path='/lobby/:game' element={<MultiplayerPage />} />
          <Route path='/competition/:game' element={<CompetitionPage />} />
          <Route path='/profile' element={ <ProfilePage /> } />
          <Route path='/sign-in' element={ <SignInPage /> } />
          <Route path='/sign-up' element={ <SignUpPage /> } />
        </Routes>
      </Router>
    </>
  )
}

export default App
