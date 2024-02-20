import { useEffect,useState } from "react";


const CleanupFunction = () => {
  const [toggle, setToggle]= useState(false)
console.log(" rendering")

  return <div>
    <button onClick={()=> setToggle(!toggle)} className="btn">Toggle Component</button>
    {toggle && <RandomComponent/>}
  </div>;
};

const RandomComponent = ()=>{
  useEffect(()=>{
    const someFunc= ()=>{

    };
    window.addEventListener("scroll", someFunc) ;
    return()=>window.removeEventListener("scroll", someFunc)
  },[])
  return<h1>Hello there</h1>
}

export default CleanupFunction;
