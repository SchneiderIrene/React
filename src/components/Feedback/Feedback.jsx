import './styles.css';
import Button from '../Button/Button';
import { useState } from "react";

function Feedback() {

    const [countLike, setCountLike] = useState(0);
    const [countDislike, setCountDislike] = useState(0);

    const onPlusLike = ()=> {
        setCountLike((p) => p + 1);
    }

    const onPlusDislike = ()=> {
        setCountDislike((p) => p + 1);
    }

    const onResetResult = ()=>{
        setCountLike(0);
        setCountDislike(0);
    }

  return (
    <div className="component-container">
      <div className="button">
        <Button name='Like' onButtonClick={onPlusLike}/>
        <Button  name={countLike}/>

      </div>

      <div className="button">
      <Button name='Dislike'onButtonClick={onPlusDislike}/>
      <Button name={countDislike}/>

      </div>

      <div className="button">
      <Button name='Reset Results' onButtonClick={onResetResult}/>

      </div>
    </div>
  );
}

export default Feedback;
