import './styles.css';




function AnimalCard({ animalData}) {
  return (
    <div className="animal-card">
      <h2>{animalData.name}</h2>
      <p>{animalData.species}</p>
      <img className='img' src={animalData.image} />
     
    </div>
  );
}

export default AnimalCard;
