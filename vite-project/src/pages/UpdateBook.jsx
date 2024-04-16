import React, { useState, useEffect } from "react";
import Back from "../components/back";
import Spinner from "../components/Spinner";
import axios from "axios";
import { useNavigate, useParams } from "react-router";
import { enqueueSnackbar, useSnackbar } from "notistack";

const UpdateBook = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [genre, setGenre] = useState('');
  const [year, setYear] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const {id} = useParams();
  const {enqueueSnackbar} = useSnackbar();

  useEffect(() => {
    setLoading(true);
    axios.get(`http://localhost:5050/books/${id}`)
    .then((res)=>{
        setAuthor(res.data.author);
        setGenre(res.data.genre);
        setTitle(res.data.title);
        setYear(res.data.year);
        setLoading(false);
    }) 
    .catch((error) => {
        setLoading(false);
        enqueueSnackbar('An error occurred. Please try again', {variant: 'error'})
        console.log(error);
        alert('An error occurred. Please try again');
    })
  },[])

  const handleUpdate = () => {
    const data = {
      title,
      author,
      genre,
      year
    };
    setLoading(true);
    axios
    .put(`http://localhost:5050/books/${id}`, data)
    .then(() => {
      setLoading(false);
      navigate('/');
      enqueueSnackbar('Book edited successfully', {variant: 'success'});
    })
    .catch((error) => {
      console.log(error);
      setLoading(false);
      alert('An error occurred. Please try again');
      enqueueSnackbar('An error occurred. Please try again', {variant: 'error'})
    })
  }
  return (
    <div>
      <Back /> 
      <h1 className='text 3xl my-4'>Update Book
      </h1>
      {loading ? <Spinner /> : ''}
      <div className= 'flex flex-col border-2 border-sky-500 rounded-xl w-[600px] p-4 mx-auto'>

          < div className=' my-4'>
            <label className='text-xl mr-4 text-sky-500'>Title</label>
            <input 
            type = 'text'
            value={ title}
            onChange = {(e) => setTitle(e.target.value)} className='border-2 border-gray-500 px-4 py-2 w-full'/>
          </div>

          < div className=' my-4'>
            <label className='text-xl mr-4 text-sky-500'>Author</label>
            <input 
            type = 'text'
            value={ author }
            onChange = {(e) => setAuthor(e.target.value)} className='border-2 border-gray-500 px-4 py-2 w-full'/>
          </div>

          < div className=' my-4'>
            <label className='text-xl mr-4 text-sky-500'>Genre</label>
            <input 
            type = 'text'
            value={ genre}
            onChange = {(e) => setGenre(e.target.value)} className='border-2 border-gray-500 px-4 py-2 w-full'/>
          </div>

          < div className=' my-4'>
            <label className='text-xl mr-4 text-sky-500'>Year</label>
            <input 
            type = 'text'
            value={ year}
            onChange = {(e) => setYear(e.target.value)} className='border-2 border-gray-500 px-4 py-2 w-full'/>
          </div>

          <button className='bg-sky-500 text-white px-4 py-2 rounded-md' onClick={handleUpdate}>Save</button>

        </div>
    </div>
  );
};

export default UpdateBook;  