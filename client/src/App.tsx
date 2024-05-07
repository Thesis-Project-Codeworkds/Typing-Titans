import Navbar from './components/Navbar/Navbar'
import Sidebar from './components/Sidebar/Sidebar'
import Form from './components/Form'
import MainCard from './components/MainCard/MainCard'
import './App.css'




function App() {

  return (
    <>
      <Navbar />
      <Sidebar />
      <MainCard title="Training"/>
      <MainCard title="Competitive"/>
      <MainCard title="Daily Challenge"/>
      <Form />
    </>
  )
}

export default App
