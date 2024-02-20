import React from 'react';
import ReactDOM from 'react-dom/client';
import "./index.css";
import {books} from "./books";
import Book from './Book';


function BookList() {
  return( 
    
 <React.Fragment>
  <h3> Best Designs of the year</h3>
   <section className='booklist'>

{books.map((book, index)=>{
  console.log(book)
  // const{img, title, author, id} = book;
  return <Book {...book} key={book.id} number={index} />;
})}

</section>
 </React.Fragment>
  );
};










const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<BookList />);