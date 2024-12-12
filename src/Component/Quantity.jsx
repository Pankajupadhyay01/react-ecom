import React from 'react'
import { useDispatch } from 'react-redux'
import { setInc, setdec } from '../redux/cart'

const Quantity = ({ id, value }) => {

    const dispatch = useDispatch()
    const qyt_func = (id, way) => {
        if (way == "inc") {
            dispatch(setInc({ id }))
        }
        else {
            dispatch(setdec({ id }))
        }
    }
    return (
        <div>


            <div className=' flex justify-center items-center text-center'>
                <span className='bg-blue-800 w-[30px] text-white text-lg cursor-pointer' onClick={() => qyt_func(id, "decr")}>
                    -
                </span>
                <input className='w-[60px] border-2 text-center' onChange={() => value} value={value} type="text" />
                <span className='bg-blue-800 w-[30px] text-white text-lg cursor-pointer' onClick={() => qyt_func(id, "inc")}>
                    +
                </span>

            </div>
        </div>
    )
}

export default Quantity