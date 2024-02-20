
import { useState } from "react";
import { data } from "./data";

const People = ()=>{
    const[people,setPeople]= useState(data);
    const removeItem = (id)=>{
    setPeople(people.filter((person) => person.id !== id))
    }
    const removeAll = ()=>{
   setPeople([ ])
    }
    return(
        <div>
           {people.map((person) =>{
            const {id, name}= person;
            return(
                <div key={id}>
                    <h3>{name}</h3>
                    <button type="button" onClick={()=>removeItem(id)}>click</button>
                </div>
            )
           })} 
           <button type="button" onClick={removeAll}>Clear</button>
        </div>
    )
}
export default People;