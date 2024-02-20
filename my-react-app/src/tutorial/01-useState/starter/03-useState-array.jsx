 import { useState } from "react";
import { data } from "../../../../data";
//  import React from "react";

 const UseStateArray = () => {

const [people, setPeople]= useState(data);

const handleClick=(id)=>{

// const newPeople=people.filter((person) => person.id !== id);
setPeople(people.filter((person) => person.id !== id))
}
const removeAll =()=>{
  setPeople([ ])
}
  
    return(
    <div>
        {people.map((person)=> {
          const{id, name} = person;
        
         return (
          <div key={id}>
          <h4>{name}</h4>
          <button type="button" onClick={()=>handleClick(id)}> remove</button>
         </div>
         )
        })}
        <button type="button" className="btn" onClick={removeAll} style={{marginTop: "2rem" }}>Clear All</button>
    </div>
    );
  };
  
export default UseStateArray;
