import React, { useEffect, useState } from "react";
import axios from "axios";
import Spinner from "../components/Spinner";
import { Link } from "react-router-dom";
import { MdOutlineAddBox } from "react-icons/md";
import Table from "../components/Home/Table";
import Cards from "../components/Home/Cards";

const Home = () => {
    //Using states
    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(false);
    const [show, setShow] = useState('table');
    useEffect(() => {
        setLoading(true);
        axios.get("http://localhost:5050/books")
        .then((res) => {
            setBooks(res.data.data);
            setLoading(false);
        })
        .catch((error) => {
            console.log(error);
        });
    }, []);

    return (
        <div className='p-4'>
            <div className="flex justify-center items center gap-x-4">
                <button className="bg-sky-300 hover:bg-sky-600 transition-colors duration-400 px-4 py-1 rounded-lg" onClick={() => setShow('table')}>Table</button>
                <button className="bg-green-300 hover:bg-green-600 transition-colors duration-400 px-4 py-1 rounded-lg" onClick={() => setShow('cards')}>Cards</button>
            </div>
            <div className='flex justify-between items-center'>
                <h1 className='text 3x1 my-8'> List of Books </h1>
                <Link to='/books/create'>
                    <MdOutlineAddBox className='text-sky-600 text-4xl cursor-pointer' />
                </Link>
            </div>
            {loading ? (
                <Spinner />
            ) : (
                show === 'table' ? <Table books={books} /> : <Cards books={books} />
            )}
        </div>
    );
};

export default Home;
