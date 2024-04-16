import React, { useEffect, useState } from "react";
import Spinner from "../components/Spinner";
import Back from "../components/back";
import { useParams } from "react-router";   
import axios from "axios";  

const ShowBook = () => {
    const [book, setBook] = useState({});
    const [loading, setLoading] = useState(false);   
    const {id} = useParams();

    useEffect(() => {
        setLoading(true);
        axios.get(`http://localhost:5050/books/${id}`)
        .then((res) => {
            setBook(res.data);
            setLoading(false);
        })
        .catch((error) => {
            console.log(error);
        });
    },[]);

    return (
        <div className="p-4">
            <Back />
            <h1 className = '3x1 my-4'>
                Here is your Book
            </h1>
            {loading ? (
                <Spinner />
            ) : (
                <div className = 'flex flex-col border-2 border-sky-500 rounded-x1 w-fit p-4'>

                    <div className = 'my-4'>
                        <span className = 'text-x1 mr-4 text-sky-500'>Id
                        </span>
                        <span>{book._id}</span>
                    </div>

                    <div className = 'my-4'>
                        <span className = 'text-x1 mr-4 text-sky-500'>Title
                        </span>
                        <span>{book.title}</span>
                    </div>

                    <div className = 'my-4'>
                        <span className = 'text-x1 mr-4 text-sky-500'>Author
                        </span>
                        <span>{book.author}</span>
                    </div>

                    <div className = 'my-4'>
                        <span className = 'text-x1 mr-4 text-sky-500'>Genre
                        </span>
                        <span>{book.genre}</span>
                    </div>

                    <div className = 'my-4'>
                        <span className = 'text-x1 mr-4 text-sky-500'>Publish Year
                        </span>
                        <span>{book.year}</span>
                    </div>
                </div> 
            )}
        </div>
    )
};

export default ShowBook;