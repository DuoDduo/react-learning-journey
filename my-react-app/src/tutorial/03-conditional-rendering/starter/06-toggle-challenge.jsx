 import { useState } from "react";
//  import { useEffect } from "react";

 
//  const Toggle = ()=>{
 
//  }

 const ToggleChallenge = () => {
  const [showAlert, setShowAlert]= useState(false)
  const toggleAlert = ()=>{
    if(showAlert){
      setShowAlert(false)
      return;
    }
    setShowAlert(true)
  }
  return (
    <div>
      <h2>toggle challenge</h2>
      <button onClick={toggleAlert} className="btn">Toggle</button> 
      {showAlert && <Alert/>}
    </div>
  )
};
const Alert =()=>{
  return <div className="alert alert-danger">Hello world</div>
}

export default ToggleChallenge;
