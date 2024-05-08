import Navbar from '../components/Navbar/Navbar'
import Sidebar from '../components/Sidebar/Sidebar'
import MainCard from '../components/MainCard/MainCard'
import Form from '../components/Form'
import CompeteCardSVG from '../assets/CompeteCard.svg'

const LandingPage = () => {
  return (
    <div>
      <Navbar />
      <Sidebar />
      <div>
        <MainCard title="Training" />
        <MainCard title="Competitive" imgSrc={CompeteCardSVG}/>
        <MainCard title="Daily Challenges" />
        <Form />
      </div>
    </div>
  );
}

export default LandingPage;