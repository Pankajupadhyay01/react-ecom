import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import Displaycards from '../Component/Cards/Displaycards'
import Heading from '../Component/Heading'
import { productList } from '../redux/apiCall'
import Loading from '../Component/Loading'

const Search = () => {
    const product = useParams().data;
    const loading = useSelector((state) => state.user.loading)
    const dispatch = useDispatch()
    
    useEffect(() => {
        const api = `https://dummyjson.com/products/search?q=${product}`;
        productList({ api }, dispatch)
    }, [product])

    return (
        <>
            {
                loading ? <div className='flex justify-center '><Loading/></div>
                    :
                    <div className='w-[95%] flex-col flex m-auto'>
                        <Heading name={`Result for :-  ${product}`} />
                        <Displaycards />
                    </div>
            }
        </>
    )
}

export default Search