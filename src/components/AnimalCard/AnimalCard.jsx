import './styles.css';

function AnimalCard({ animalData, animalName, children }) {
  return (
    <div className="animal-card">
      <h2>{animalName}</h2>
      <p>{animalData.species}</p>
       {children}
      <img className='img' src={animalData.image} />
     
    </div>
  );
}

export default AnimalCard;
