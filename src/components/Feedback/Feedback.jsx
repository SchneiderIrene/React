import './styles.css';
import Button from '../Button/Button';
import { useState } from "react";

function Feedback() {

    const [countLike, setCountLike] = useState(0);
    const [countDislike, setCountDislike] = useState(0);

    const onPlusLike = ()=> {
        setCountLike((prevValue) => prevValue + 1);
    }

    const onPlusDislike = ()=> {
        setCountDislike((prevValue) => prevValue + 1);
    }

    const onResetResult = ()=>{
        setCountLike(0);
        setCountDislike(0);
    }

  return (
    <div className="component-container">
      <div className="button">
        <Button name='Like' onButtonClick={onPlusLike}/>
        <div className='counter'>{countLike}</div>
        
      </div>

      <div className="button">
      <Button name='Dislike'onButtonClick={onPlusDislike}/>
      <div className='counter'>{countDislike}</div>

      </div>

      <div className="button">
      <Button name='Reset Results' onButtonClick={onResetResult}/>

      </div>
    </div>
  );
}

export default Feedback;
