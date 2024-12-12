import React from 'react'
import { useEffect } from 'react';
import { useSelector } from 'react-redux'
import Checkoutdetail from '../Component/Cards/Checkoutdetail'
import { useNavigate } from 'react-router-dom';
const Checkout = () => {
  const data = useSelector((state) => state.checkout)
  const navigate = useNavigate(); 
  if (data.userPurchase.length == 0) {
    navigate("/cart")
  }
  return (
    <div className='w-[90%] m-auto flex md:flex-row flex-col justify-between'>

      {/* Order Detail  */}
      <div className='md:w-[60%]'>
        <Checkoutdetail />
      </div>

      {/* Bill Section  */}
      <div className='md:w-[30%] border-2 bg-blue-100 h-[30vh] flex flex-col'>
        <h4 className='flex justify-center items-center w-full font-medium text-[28px]'>Price Detail</h4>

        <div className='gap-4 border-t-2 my-[10px] py-3 border-b-2 border-black'>
          <div className='flex justify-between w-[90%] m-auto'>
            <div>Price ( {data.qyt})</div>
            <div>$ {data.userPurchase.price * data.qyt}</div>
          </div>
          <div className='flex justify-between w-[90%] m-auto'>
            <div>Delivery Charges </div>
            <div> {data.userPurchase.price * data.qyt > 120 ? "free" : "$40"}</div>
          </div>
        </div>

        <div className='flex justify-between  w-[90%] m-auto'>
          <div>Total Payable</div>
          <div>${data.userPurchase.price * data.qyt > 120 ? data.userPurchase.price * data.qyt : data.userPurchase.price * data.qyt + 40}</div>
        </div>
      </div>
    </div>
  )
}

export default Checkout