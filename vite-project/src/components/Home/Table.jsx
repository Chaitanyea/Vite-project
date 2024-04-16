import { Link } from "react-router-dom";
import { AiOutlineEdit } from "react-icons/ai"; 
import { FaTrashAlt } from "react-icons/fa";
import { BsInfoCircle } from "react-icons/bs";
import React, { useEffect, useState } from "react";

const Table = ({books} ) => {
    return (
        <table className='w-full border-separate border-spacing-2 '>
                    <thead>
                        <tr>
                            <th className='border border-gray-500'>No</th>
                            <th className='border border-gray-500'>Title</th>
                            <th className='border border-gray-500'>Author</th>
                            <th className='border border-gray-500'>Genre</th>
                            <th className='border border-gray-500'>Publish Year</th>
                        </tr>
                    </thead>
                    <tbody>
                        {books.map((book, index) => (
                            <tr key={book._id} className='h-8'>
                                <td className='border border-slate-800 rounded-md text-center hover:bg-sky-300 transition-colors duration-500'>
                                    {index + 1}
                                </td>
                                <td className='border border-slate-800 rounded-md text-center hover:bg-sky-200 transition-colors duration-500'>
                                    {book.title}
                                </td>
                                <td className='border border-slate-800 rounded-md text-center hover:bg-green-100 transition-colors duration-500'>
                                    {book.author}
                                </td>
                                <td className='border border-slate-800 rounded-md text-center hover:bg-green-200 transition-colors duration-500'>
                                    {book.genre}
                                </td>
                                <td className='border border-slate-800 rounded-md text-center hover:bg-green-300 transition-colors duration-500'>
                                    {book.year}
                                </td>

                                {/* Small CRUD interface */}

                                <td className='border border-slate-800 rounded-md text-center hover:bg-sky-200 transition-colors duration-500'>
                                    <div className='flex justify-center gap-x-4'>
                                        <Link to={`/books/show/${book._id}`}>
                                            <BsInfoCircle className='text-blue-400 cursor-pointer hover:text-blue-600 transition-colors duration-500 ' />
                                        </Link>
                                    </div>
                                </td>

                                <td className='border border-slate-800 rounded-md text-center hover:bg-yellow-200 transition-colors duration-500'>
                                    <div className='flex justify-center gap-x-4'>
                                        <Link to={`/books/update/${book._id}`}>
                                            <AiOutlineEdit className='text-yellow-400 cursor-pointer hover:text-yellow-600 transition-colors duration-500' />
                                        </Link>
                                    </div>
                                </td>

                                <td className='border border-slate-800 rounded-md text-center hover:bg-red-200 transition-colors duration-500'>
                                    <div className='flex justify-center gap-x-4'>
                                        <Link to={`/books/delete/${book._id}`}>
                                            <FaTrashAlt className='text-red-400 cursor-pointer hover:text-red-600 transition-colors duration-500' />
                                        </Link>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
    )
}

export default Table;