import { useState } from "react";

const UseStateBasics = () => {
  // console.log(useState("bob"));
  const[name,setName]= useState("Dominion")
  const [count, setCount] = useState(0)
  const handleCLick= ()=>{
    setCount( count + 1);
    setName(name + " James")
  }
  return <div>
    <h4>You clicked {count} times</h4>
    <h3> my name is {name} </h3>
    <button type="button" className="btn" onClick={handleCLick}> CLICK ME</button>
  </div> 
  
};

export default UseStateBasics;
