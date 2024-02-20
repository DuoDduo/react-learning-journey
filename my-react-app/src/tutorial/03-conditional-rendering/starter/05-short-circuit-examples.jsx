import { useState } from 'react';

const ShortCircuitExamples = () => {
  // falsy
  const [text, setText] = useState('');
  // truthy
  const [name, setName] = useState('susan');
  const [user, setUser] = useState({ name: 'john' });
  const [isEditing, setIsEditing] = useState(true);

  return <div>short circuit - examples
    <h2>{text || " default value"}</h2>
    {text && (
    <div>
      <h2> Whatever Return</h2>
      <h2>{name}</h2>
      </div>
      )}
      {user && <SomeComponent>name={user.name}</SomeComponent>}
      <h2 style={{margin: " 1rem 0" }}>Ternary Operator</h2>
      <button className='btn'>{isEditing? " edit": "add"}</button>
      {user?<div>
        <h4> hello there {user.name}</h4>
        </div>: <div>
        <h4> Please Login {user.name}</h4>
        </div> }
  </div>;
}; 
 
const SomeComponent = ({ name })=> {
  return  (
    <div>
      <h2> Whatever Return</h2>
      <h2>{name}</h2>
  </div>
  );
  
  
 
}
 
export default ShortCircuitExamples;
     