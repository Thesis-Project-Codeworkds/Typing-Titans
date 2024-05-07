import Navbar from '../components/Navbar/Navbar'
import Sidebar from '../components/Sidebar/Sidebar'
import MainCard from '../components/MainCard/MainCard'
import Form from '../components/Form'

const LandingPage = () => {
  return (
    <div>
      <Navbar />
      <Sidebar />
      <div>
        <MainCard title="Training" />
        <MainCard title="Competitive" />
        <MainCard title="Daily Challenges" />
        <Form />
      </div>
    </div>
  );
}

export default LandingPage;