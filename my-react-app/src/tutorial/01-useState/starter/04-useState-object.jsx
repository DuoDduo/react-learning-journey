import { useState } from 'react';

const UseStateObject = () => {
  const [person, setPerson]= useState({
    name: "Peter",
    age: 23 ,
    hobby: " Likes to eat" 
  })
  // const [name, setName] = useState("Peter")
  // const [age, setAge] = useState(30)
  // const [hobby, setHobby] = useState(" Likes to Eat")\
  // to override all or one you can also use setPerson({...person, name:" susan"})

 const handleClick =()=>{
    setPerson({name:"John", age: 29, hobby: "Likes to dance"})
 } ;

  return(
    <div>
      <h3>{person.name}</h3>
      <p>{person.age}</p>
      <h3>{person.hobby}</h3>
      <button type='button' onClick={handleClick}>Click</button>
    </div>
  );
};

export default UseStateObject;
