import express from 'express';
import { book } from '../models/bookModel.js';

const router = express.Router();

// Create a new book
router.post('/', async(request, response) => {
  try{
    if(!request.body.title || !request.body.author || !request.body.genre || !request.body.year){
      return response.status(400).send("Please fill all the required fields");
    }
    else{
      const newbook = {
        title : request.body.title,
        author : request.body.author,
        genre : request.body.genre,
        year : request.body.year
      };
      const result = await book.create(newbook);
      response.status(201).send(result);
    }
  }
  catch(error){
    console.log(error.message);
    response.status(500).send(error.message);
  }
})

// Get all books
router.get('/', async (request, response) => {
  try{
    const books = await book.find();
    response.status(202).send(
      {
        number : books.length,
        data : books
      }
    );
  }
  catch(error){
    console.log(error.message);
    response.status(500).send(error.message);
  }
});

// Get a book by ID
router.get('/:id', async (req,res) => {
  try{
    const {id} = req.params;
    const result = await book.findById(id);
    if(result == null){
      return res.status(404).send("Book not found, please enter the ID correctly");
    }
    else{
      res.status(200).send(result);
    }
  }
  catch(error){
    console.log(error.message);
    res.status(500).send(error.message);
  }
});

// Update a book by ID
router.put('/:id', async(req,res) => {
  try{
    if(!req.body.title || !req.body.author || !req.body.genre || !req.body.year){
      return response.status(400).send("Please fill all the required fields");
    }
    
    const {id} = req.params;
     const result = await book.findByIdAndUpdate(id, req.body);
    if(result == null){
      res.status(404).send("Book not found, please enter the ID correctly");
    }
    else{
      res.status(200).send("Book updated successfully");
    }
  }
  catch(error){
    console.log(error.message);
    res.status(500).send(error.message);  
  }
});

//Delete a book by ID
router.delete('/:id', async(req,res) => {
  try{
    const id = req.params.id;
    const result = await book.findByIdAndDelete(id);

    if(result == null){
      return res.status(404).send("Book not found, please enter the ID correctly");
    }
    else{
      res.status(200).send("Book deleted successfully");
    }
  }
  catch(error){
    console.log(error.message);
    res.status(500).send(error.message);
  }
});

export default router;