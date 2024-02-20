import { useState } from 'react';

const ShortCircuitOverview = () => {
  const [text, setText]=useState("")
  const [name, setName]=useState(" Phillip")

  // 
  const codeExample = text||" helloworld"; 
  return <div>short circuit overview
    <h4>Falsy OR : {text || " hello world"}</h4>
    <h4>Falsy AND : {text && " hello world"}</h4>
    <h4>Truthy OR : {name || " hello world"}</h4>
    <h4>Truthy AND : {name && " hello world"}</h4>
    {codeExample}

  </div>;
};
export default ShortCircuitOverview;
