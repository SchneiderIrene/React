import './styles.css'

function ProfileCard (){
    return(
       <div className='card'>
        <img src="https://cdn.zeitakademie.de/wp-content/uploads/2020/05/1250x750_aufgabe1_1250x750_desktop.jpg" alt="" className='foto'/>
        <h2>John Smith</h2>
        <p>Photographer</p>
        <p>Sport</p>
    </div> 
    )
}

export default ProfileCard;