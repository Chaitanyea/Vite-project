import { AiOutlineClose} from "react-icons/ai";
import { PiBookOpenTextLight } from "react-icons/pi";
import { BiUserCircle } from "react-icons/bi";  

const Modal = ({item, onClose}) => {
    return (
        <div className='fixed bg-black bg-opacity-30 top-0 left-0 right-0 bottom-0 z-0 flex justify-center items-center' onClick= {onClose}>

            <div onClick={(event) => event.stopPropagation()} className='w-[600px] max-w-full h-[400px] bg-white rounded-x1 p-4 flex flex-col relative'>
                <AiOutlineClose className="absolute top-6 right-6 text-2xl text-red-600 cursor-pointer" onClick={onClose} />

                <h2 className = 'w-fit px-4 py-1 bg-red-300 rounded-lg'>
                        {item.year}
                    </h2>
                    <h4 className="my-2 text-gray-500"> {item._id}</h4>
                    <div className="flex justify-start items-center">
                        <PiBookOpenTextLight className="text-2xl text-blue-500" />
                        <h2 className="my-1">{item.title}</h2>
                    </div>

                    <div className="flex justify-start items-center gap-x-2">
                        <BiUserCircle className="text-2xl text-green-500" />
                        <h2 className="my-1">{item.author}</h2>
                    </div>  
                    <p className="my-2">
                        Lorem Ipsum   
                    </p>
                    <p className="my-4">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
                    </p>
            </div>
        </div>
    )
}

export default Modal;