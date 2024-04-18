import './styles.css'

function ProfileCard (){

    const userData = {
        avatar: "https://cdn.zeitakademie.de/wp-content/uploads/2020/05/1250x750_aufgabe1_1250x750_desktop.jpg",
        userName: "John Smith",
        profession: "Photographer",
        hobbys: ["Sport"]
    }

    return(
        <div className='card-container'>
            <div className='card'>
        <img src={userData.avatar} alt="" className='foto'/>
        <h2>{userData.userName}</h2>
        <p>{userData.profession}</p>
        <p>{userData.hobbys[0]}</p>
    </div> 
        </div>
       
    )
}

export default ProfileCard;