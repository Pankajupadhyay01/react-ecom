import React from 'react'
import category from '../../data/category'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { updatemenu } from '../../redux/productSlice';
const CategoryCard = () => {
    const menu = useSelector((state) => state.user.menu)
    const dispatch = useDispatch()
    const func = () => {
        dispatch(updatemenu())
    }
    return (
        < >
            <div className={`lg:relative z-[999] lg:bg-white transition-all duration-75 lg:w-full absolute bg-white rounded-xl lg:left-0  ${menu ? "left-0" : "left-[-100%]"} w-[80%] sm:w-[60%] `}>
                <div className='lg:border-none border-2 h-full rounded-xl'>
                    <div className='text-xl relative capitalize mx-[30px] font-bold rounded-xl lg:hidden'>
                        Categories
                        <div className='absolute top-1 text-2xl right-1' onClick={func}>
                            <ion-icon name="close-circle-outline"></ion-icon>
                        </div>
                    </div>
                    <div className='lg:flex-nowrap flex flex-wrap lg:h-[14vh] justify-center overflow-y-auto h-[80vh] '>
                        {
                            category.map((pro, i) => (
                                <div key={i} className='lg:w-full w-[calc(50%-10px)] sm:w-[calc(33.33%-10px)] my-[30px] justify-center flex items-center'>
                                    <Link to={"/category/" + pro.name} className=''>
                                        <div className='flex justify-center h-[50px]'>
                                            <img className='h-full' src={pro.img} alt="" />
                                        </div>
                                        <div className='flex justify-center text-[15px] text-center'>
                                            {pro.name}
                                        </div>
                                    </Link>
                                </div>
                            ))
                        }

                    </div>
                </div>
            </div>
        </ >
    )
}

export default CategoryCard