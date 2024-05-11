import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css'
import LandingPage from './pages/LandingPage';
import MultiplayerPage from './pages/MultiplayerPage';
import CompetitionPage from './pages/CompetitionPage';




function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path='/multiplayer' element={<MultiplayerPage />} />
          <Route path='/competition' element={<CompetitionPage />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
