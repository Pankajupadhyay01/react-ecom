import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom'
import { productDetail } from '../../redux/apiCall';
import { updateCart } from '../../redux/cart';
import { updateBuy } from '../../redux/checkout';
const Datailcards = () => {

  const id = useParams().data;
  const dispatch = useDispatch()
  const result = useSelector((state) => state.user)

  useEffect(() => {
    const api = `https://dummyjson.com/products/${id}`
    productDetail({ api }, dispatch)
  }, [id])

  const navigate = useNavigate()

  // Add to cart function  
  const qyt = 1
  const func = () => {
    const detail = result.detail
    dispatch(updateCart({ detail, qyt }))
    navigate("/cart")
  }

  // checkout 
  const Checkout = () => {
    const detail = result.detail
    dispatch(updateBuy({ detail, qyt }))
    navigate("/Checkout")
  }

  return (
    <>
      {
        result.loading ? "loading..." :

          <div >
            <div className='my-4 flex-col sm:flex-row flex w-[90%] md:w-[80%] m-auto items-center'>
              <div className='md:w-[60%] h-[250px] md:h-[350px] flex flex-col justify-center items-center overflow-hidden'>
                <img className='md:w-[70%] overflow-hidden' src={result.detail.thumbnail} alt="" />
              </div>
              <div className='md:w-[35%] space-y-4'>
                <div className='text-xl font-semibold text-center'>{result.detail.title}</div>
                <div className='text-sm font-normal text-center text-blue-600 cursor-pointer'>{result.detail.brand}</div>
                <div>{result.detail.description}</div>
                <div className='flex justify-between items-center'>
                  <div className='font-bold'>${result.detail.price}</div>
                  <div className='font-bold text-yellow-600 flex items-center'>⭐{result.detail.rating > 4.5 ? "Top Rated" : result.detail.rating} </div>
                </div>
                <div className={`${result.detail.stock < 35 ? "text-red-500" : "text-blue-500"}`}>{result.detail.stock < 35 ? "few stock left" : "In Stock"}</div>
                <div className='flex justify-center w-full space-x-4 items-center'>
                  <button onClick={func} className='cursor-pointer border-2 rounded-[20px] p-[4px_12px] hover:bg-blue-400 hover:shadow-2xl text-white bg-[#388e3c]'>Add To Cart</button>
                  <button onClick={Checkout} className='cursor-pointer border-2 rounded-[20px] p-[4px_12px] hover:bg-blue-400 hover:shadow-2xl text-white bg-[#388e3c]'>Buy Now</button>
                </div>
              </div>
            </div>
          </div>

      }
    </>
  )
}

export default Datailcards