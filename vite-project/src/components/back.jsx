import React from 'react';
import {Link} from 'react-router-dom';
import { BsArrowLeft } from 'react-icons/bs';

const Button = ({destination = '/'}) => {
    return (
        <div className='flex'>
            <Link to = {destination}>
                <BsArrowLeft className= 'text 4xl text-sky-600 cursor-pointer '>
                </BsArrowLeft>     
            </Link>
        </div>
    )
}

export default Button;