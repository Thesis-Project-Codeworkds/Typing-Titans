import profileIcon from '../../assets/default icon fill.svg';
import { Player } from '../../interfaces';
import './Challenger.css'

const Challenger = ({ player }: { player: Player }) => {

  return (
    <div className='challenger'>
      <h4 className='username'>{ player.username }</h4>
      <div className='userimage' style={
        { 'backgroundImage': `url(${ player.userimage ? player.userimage : profileIcon })` }
      }></div>
    </div>
  )
}

export default Challenger;
