import { Link } from 'react-router-dom';
import './MainCard.css'


interface MainCardProps {
  title: string;
  imgSrc?: string;
}

const MainCard: React.FC<MainCardProps> = ({ title, imgSrc }) => {

  return (
    <div className="card-container">
      <h2 className='card-title'>{title}</h2>
      {imgSrc && <Link to="/multiplayer" className='cuac'><img src={imgSrc} alt='competition icon' className='competition-card-svg' /></Link>}
    </div>
  )

}

export default MainCard;