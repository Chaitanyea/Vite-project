import React from "react";
import { useState } from "react";
import Back from "../components/back";
import Spinner from "../components/Spinner";
import axios from "axios";
import { useNavigate, useParams} from "react-router";  
import { enqueueSnackbar, useSnackbar } from "notistack";

const DeleteBook = () => {

    const{id} = useParams();
    const navigate = useNavigate();
    const enqueueSnackbar = useSnackbar();
    const [loading,setLoading] = useState(false);
    const handleDeleteBook = () => {
        setLoading(true);
        axios.delete(`http://localhost:5050/books/${id}`)
        .then(() => {
            setLoading(false);
            navigate('/');
            enqueueSnackbar('Book deleted successfully', {variant: 'success'});
        })
        .catch((error) => {
            console.log(error);
            alert("Failed to delete book");
            enqueueSnackbar('An error occurred. Please try again', {variant: 'error'});
        });
    }

    return (
        <div className="p-4">
            <Back />
            {loading ? <Spinner /> : ''}
            <div className="flex justify-center items-center h-96">
                <div className=" border border-2 thickness-2 bg-white p-4 rounded-md">
                    <h1 className="text-2xl text-black">Are you sure you want to delete this book?</h1>
                    <div className="flex justify-between mt-4">
                        <button onClick={handleDeleteBook} className="bg-red-600 text-white px-4 py-2 rounded-md">Yes</button>
                        <button onClick={() => navigate('/')} className="bg-green-600 text-white px-4 py-2 rounded-md">No</button>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default DeleteBook;