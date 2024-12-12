import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeCart } from '../redux/cart'
import Heading from '../Component/Heading'
import { useNavigate } from 'react-router-dom'
import Quantity from '../Component/Quantity'
import { updateBuy } from '../redux/checkout'
const Cart = () => {
  const data = useSelector((state) => state.cart)
  const navigate = useNavigate()
  const dispatch = useDispatch()

  // remove from cart function 
  const func = (id) => {
    dispatch(removeCart({ id }))
  }

  // checkout 
  const checkout = (id, qyt) => { 
    const detail = data.cart.find((item)=>item.detail.id == id).detail
    dispatch(updateBuy({detail , qyt}))
    navigate("/Checkout") 
  }

  return (
    <div className='w-[95%] flex-col flex m-auto'>
      <Heading name="Your Cart" />

      {
        data.cart.length == 0 ? "Ooops.. No product " :
          data.cart.map((pro, i) => (
            <div key={i} className='flex flex-col justify-center border-2 w-full space-x-5 h-auto '>

              {/* cart product detail div*/}
              <div className='flex flex-col sm:flex-row w-full m-2 overflow-hidden object-cover justify-center items-center'>
                <img className='md:w-[20vw] w-full h-[200px] md:h-[180px] ' src={pro.detail.thumbnail} alt="" />


                <div className='mx-10 w-full flex sm:flex-row flex-col justify-center items-center md:justify-between'>

                  {/* left container */}
                  <div className=''>
                    <div className='text-lg font-bold'>
                      {pro.detail.title}
                    </div>
                    Brand:{pro.detail.brand}
                  </div>

                  {/* right container */}
                  <div className='flex flex-col justify-center items-center space-y-2'>
                    <Quantity value={pro.qyt} id={pro.detail.id} />

                    <div>
                      $ {pro.detail.price * pro.qyt}
                    </div>

                  </div>

                </div>
              </div>
              {/* cart product detail div ended */}

              {/* buy now and remove button  */}
              <div className='flex space-x-8 my-2 md:justify-normal justify-center'>
                <button className='flex bg-blue-800 border-1 px-3 text-white font-medium py-1' onClick={() => func(pro.detail.id)}>Remove</button>
                <button className='flex bg-blue-800 border-1 px-3 text-white font-medium py-1' onClick={() => checkout(pro.detail.id, pro.qyt)}>Checkout</button>
              </div>

            </div>
          ))
      }
    </div>
  )
}

export default Cart