import React from "react";
import {Routes, Route} from 'react-router-dom';
import ShowBook from './pages/ShowBook';
import UpdateBook from './pages/UpdateBook';
import DeleteBook from './pages/DeleteBook';
import Home from './pages/Home';
import CreateBook from './pages/CreateBook';

const App = () => {
  return (
    <body className='min-h-screen'>
      <Routes>
      <Route path = '/' element = {<Home/>}/>
      <Route path = '/books/show/:id' element = {<ShowBook/>}/>
      <Route path = '/books/update/:id' element = {<UpdateBook/>}/>
      <Route path = '/books/delete/:id' element = {<DeleteBook/>}/>
      <Route path = '/books/create' element = {<CreateBook/>}/>
    </Routes>
    </body>
  )
}

export default App;