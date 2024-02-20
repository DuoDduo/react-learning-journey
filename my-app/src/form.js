import React from 'react';
import ReactDOM from 'react-dom/client';
import "./index.css";

function Form (){
    return( 
    <section className='booklist'>
     <EventExamples/>
    
    </section>
    );
  };
  
  
  const EventExamples = ()=>
  {
      const handleFormInput= (e)=>
      {
        console.log("handle form input")
        console.log(e)
        console.log(e.target.name)
        console.log(e.target.value)
      }
      const handleButtonClick = ()=>
      {
        alert("handle button click");
      }
      const handleFormSubmission = (e)=>
      {
        e.preventDefault();
        console.log("handle form");
      }

    return (
    <section>
      <form action="" onSubmit={handleFormSubmission}>
        <h2> Typical Form</h2>
        <input type="text" name='example' onChange={handleFormInput} style={{margin:" 1rem 0"}}/>
      </form>
      <button type='submit'> Submit</button>
    

     <div>
     <button onClick={handleButtonClick} >click me</button>
     </div>
    </section>
    )
  }





const root = ReactDOM.createRoot(document.getElementById('form'));
root.render(<Form  />);