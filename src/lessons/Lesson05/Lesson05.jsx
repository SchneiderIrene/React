import './styles.css';
import {
    animalsData
} from './data'
import AnimalCard from '../../components/AnimalCard/AnimalCard';
import {v4} from 'uuid';

function Lesson05() {

const animalCards = animalsData.map((animalData)=>{
return <AnimalCard animalData={animalData} key={v4()}/>
})

  return (
    <div className='lesson05-container'>
      {animalCards}
    </div>
  );
}
export default Lesson05;
