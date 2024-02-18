import React from 'react'
// import "./calculator.css"
import * as math from 'mathjs';

export default function Calculator() {


	return(
        
        <div className="container" >
      <form >
        <input type="text" />
      </form>
      <div className="keypad">
        <button  id="clear" >Clear</button>
        <button   id="backspace" >C</button>
        <button  name="/"  >&divide;</button>
        <button name="7"  >7</button>
        <button name="8"  >8</button>
        <button name="9"  >9</button>
        <button  name="*"  >&times;</button>
        <button name="4"  >4</button>
        <button name="5"  >5</button>
        <button name="6"  >6</button>
        <button  name="-"  >&ndash;</button>
        <button name="1"  >1</button>
        <button name="2"  >2</button>
        <button name="3"  >3</button>
        <button  name="+"  >+</button>
        <button name="0"  >0</button>
        <button  name="."  >.</button>
        <button  name="="  id="result" >=</button>
      </div>
    </div>



		);
}