import React from "react";
import {Link} from "react-router-dom";
import {PiBookOpenTextLight} from 'react-icons/pi'
import {AiOutlineEdit} from 'react-icons/ai'
import {BiUserCircle} from 'react-icons/bi'
import { BsInfoCircle } from "react-icons/bs";
import { MdOutlineDelete } from "react-icons/md";
import Modal from "./Modal";
import {useState} from "react";
import {BiShow} from "react-icons/bi";  

const Cards = ({ books }) => {
    const [showModal, setShowModal] = useState(false);

    return (
        <div className='grid sm:grid-cols-2 lg:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
            {books.map((item) => (
                <div
                key = {item._id}
                className= 'border-2 border-gray-300 rounded-lg px-4 py-2 m-4 relative bg-white bg-opacity-0 hover:bg-opacity-15 transition-opacity duration-300'>
                    <h2 className = 'absolute top-1 right-2 px-4 py-1 bg-red-300 rounded-lg'>
                        {item.year}
                    </h2>
                    <h4 className="my-2 text-white"> {item._id}</h4>
                    <div className="flex justify-start items-center">
                        <PiBookOpenTextLight className="text-2xl text-blue-500 hover" />
                        <h2 className="my-1">{item.title}</h2>
                    </div>

                    <div className="flex justify-start items-center gap-x-2">
                        <BiUserCircle className="text-2xl text-green-400" />
                        <h2 className="my-1">{item.author}</h2>
                    </div>

                    <div className="flex justify-between items-center gap-x-2 mt-4 p-4">

                        <BiShow className="text-blue-400 hover:text-blue-600 transition-colors duration-500 text-2xl cursor-pointer" onClick={() => setShowModal(true)} />

                        <Link to = {`/books/show/${item._id}`}>
                            <BsInfoCircle className="text-blue-400 hover:text-blue-600 transition-colors duration-500 text-2xl cursor-pointer" />
                        </Link>

                        <Link to = {`/books/update/${item._id}`}>
                            <AiOutlineEdit className="text-yellow-400 hover:text-yellow-600 transition-colors duration-500 text-2xl cursor-pointer" />
                        </Link>

                        <Link to = {`/books/delete/${item._id}`}>   
                            <MdOutlineDelete className="text-red-400 hover:text-red-600 transition-colors duration-500 text-2xl cursor-pointer " />
                        </Link>
                    </div>
                    {
                        showModal && (
                            <Modal item={item} onClose={() => setShowModal(false)} />
                            )
                    }
                </div>
            ))} 
        </div>
    )
};

export default Cards;