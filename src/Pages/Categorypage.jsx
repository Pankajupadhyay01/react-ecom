import React, { useEffect } from 'react'
import Heading from '../Component/Heading'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { productList } from '../redux/apiCall'
import Displaycards from '../Component/Cards/Displaycards'
import Loading from '../Component/Loading'

const Categorypage = () => {
  const name = useParams().data;
  const dispatch = useDispatch();
  const arr = useSelector((state) => state.user);

  useEffect(() => {
    const api = `https://dummyjson.com/products/category/${name}` 
    productList({ api }, dispatch)
  }, [name]) 
  
  return (
    <div className='w-[95%] flex flex-col m-auto'>
      <Heading name={name} />
      {
        arr.loading ?
          <div><Loading/></div>
          :
          <div>
            <Displaycards/>
          </div>
      }

    </div>
  )
}

export default Categorypage