import './styles.css'
import TextArea from '../../components/TextArea/TextArea';

function Consultation03 (){
return(
    <div className='consultation-wrapper'>
        <TextArea placeholder='message' name='First Name' label='First Name'/>
        <TextArea placeholder='comment'name='Last Name' label='Last Name'/>
    </div>
    
)
}
export default Consultation03;