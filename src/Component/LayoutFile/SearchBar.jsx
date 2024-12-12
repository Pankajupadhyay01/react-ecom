import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
const SearchBar = () => {
    const navigate = useNavigate();
    const [val, setval] = useState("");
    
    const func = (e) => {
        e.preventDefault();
        if (val != "") {
            navigate("/search/" + val);
        } else {
            alert("Can't be Empty")
        }
    }
    return (
        <div>
            <form onSubmit={func} className='flex justify-center m-auto' >
                <input type="text" onChange={(e) => setval(e.target.value)} value={val} placeholder='Search your product..' className='text-center sm:p-[0.5rem_1.5rem] md:w-[310px] focus:outline-none border-[1px] border-gray-400 rounded-bl-lg rounded-tl-lg' />
                <button type="submit" className='bg-blue-800 py-[10px] md:py-[5px] px-[20px] rounded-br-lg rounded-tr-lg text-white flex items-center font-bold text-2xl' aria-label="Search Button"><ion-icon name="search"></ion-icon></button>
            </form>

        </div>
    )
}

export default SearchBar