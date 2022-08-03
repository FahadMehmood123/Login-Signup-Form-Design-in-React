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
        <p>Already have an account? <button onClick={handleClick}>Signup</button></p>
        <input id='int' type='text' placeholder='Teacher ID' ></input>
        <input id='int' type='text' placeholder='Password'></input><br></br>
        <input type='button' value='Submit'></input>
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
        <input id='int' type='text' placeholder='First Name' ></input>
        <input id='int' type='text' placeholder='Last Name' ></input>
        <input id='int' type='text' placeholder='User ID' ></input>
        <input id='int' type='text' placeholder='Password'></input><br></br>
        <input type='button' value='Sign Up' onClick={handleClick2}></input>
        </div>
  
    </>)
  }

  export default Grandchild;