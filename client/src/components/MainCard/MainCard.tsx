import './MainCard.css'

interface MainCardProps {
  title: string;
}

const MainCard: React.FC<MainCardProps> = ({ title }) => {

  return (
    <div className="card-container">
      <h2 className='card-title'>{title}</h2>
    </div>
  )

}

export default MainCard;