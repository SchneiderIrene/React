import './styles.css'
import Button from '../../components/Button/Button'
import Input from '../../components/Input/Input'
import Counter from '../../components/Counter/Counter'

function Lesson04 (){

    const showMessage = ()=>{
        alert("Hello!")
    }

    const showNameMessage = (userName)=>{
alert(`Hello, ${userName}`)
    }

    const onChange = (event, message)=>{
        //console.log(event);
        console.log(`${event.target.value} - ${message}`);
    }

    return (
        <div className='lesson04-container'>
            {/* <Input onInputChange={(event) => onChange(event, "value")} />
            <Button name='func inner' onButtonClick= {() => alert("Hi!")} />
            <Button name='func outer' onButtonClick = {showMessage} />
            <Button name='func Param' onButtonClick = {() => showNameMessage('Tom')} /> */}
            <Counter/>
        </div>

    )
}
export default Lesson04;