import React, {useState} from 'react'
import "./calculator.css"
import * as math from 'mathjs';

export default function Calculator() {

  const [result, setresult] = useState('');
  const [selectedoperator, setselectedoperator] = useState('');

  const handleClick = (e)=>{

    

  };

	return(
        
        <div className="container" >
      <form >
        <input type="text" value={result} />
      </form>
      <div className="keypad">
        <button className="highlight" id="clear" >Clear</button>
        <button className="highlight" id="backspace" >C</button>
        <button className="highlight" name="/"  >&divide;</button>
        <button name="7"  >7</button>
        <button name="8"  >8</button>
        <button name="9"  >9</button>
        <button className="highlight" name="*"  >&times;</button>
        <button name="4"  >4</button>
        <button name="5"  >5</button>
        <button name="6"  >6</button>
        <button className="highlight" name="-"  >&ndash;</button>
        <button name="1"  >1</button>
        <button name="2"  >2</button>
        <button name="3"  >3</button>
        <button className="highlight" name="+"  >+</button>
        <button name="0"  >0</button>
        <button className="highlight" name="."  >.</button>
        <button className="highlight" name="="  id="result" >=</button>
      </div>
    </div>



		);
}