import React,{useState} from 'react';
import './Grandchild.css';



function Grandchild() {
    const [isActive, setIsActive] = useState(false);
    const [displayed, setDisplayed] = useState("grandchild");

    const handleClick = () => {
      setIsActive(current => !current);
    };
    const handleClick2 =()=>{
      setIsActive(current=> !current);
    };
    return (<>
      <div id={displayed}
        onMouseLeave={() => setDisplayed("grandchild")}
        onMouseEnter={() => setDisplayed("grandchild-copy")} 
        style={{
          display: isActive ? 'none' : '',
        }}
        >
        <h2>Your Website Name<br></br>
          Here</h2>
        <p>Don't have an account? <button onClick={handleClick}>Signup</button></p>
        <input id='int1' type='text' placeholder='Teacher ID' ></input>
        <input id='int2' type='text' placeholder='Password'></input><br></br>
        <input id="submit1" type='submit' value='Submit'></input>
        </div>
        <div id={displayed}
        onMouseLeave={() => setDisplayed("grandchild")}
        onMouseEnter={() => setDisplayed("grandchild-copy")} 
        style={{
          display: isActive ? '' : 'none',
          marginTop:'11px',
          height:'493px'

        }}
        >
        
        <h2> Sign Up</h2>
        <input id='int3' type='text' placeholder='First Name' ></input>
        <input id='int4' type='text' placeholder='Last Name' ></input>
        <input id='int5' type='text' placeholder='User ID' ></input>
        <input id='int6' type='text' placeholder='Password'></input><br></br>
        <input id="submit2" type='submit' value='Sign up' onClick={handleClick2}></input>
        </div>
  
    </>)
  }

  export default Grandchild;