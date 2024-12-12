import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import axios from 'axios'

const api = import.meta.env.VITE_API
const Checkoutdetail = () => {
  const detail = useSelector((state) => state.checkout.userPurchase)
  const [loading, setLoading] = useState(false)
  const data = [
    {
      id: 1,
      head: "LOGIN",
      name: "John Doe",
      email: "johndoe@example.com",
      phone: "1234567890"
    },
    {
      id: 2,
      head: "Delivery Address",
      name: "1000, Landmark area Capetown, dist , XXXXXX - 393933"
    },
  ]

  const checkout = async (ammount) => {
    setLoading(true);
    try {
      const { data: { key } } = await axios.get(`${api}/getkey`)
      const { data: { orders } } = await axios.post(`${api}/checkout`, {
        amount: ammount
      })


      var options = {
        key,
        amount: orders.amount,
        currency: "INR",
        name: "Lamda",
        description: "Test Transaction",
        // image: "https://example.com/your_logo",
        order_id: orders.id,
        callback_url: `${api}/paymentverification`,
        prefill: {
          name: data[0].name,
          email: data[0].email,
          contact: data[0].phone
        },
        notes: {
          address: "Razorpay Corporate Office"
        },
        theme: {
          color: "#3399cc"
        }
      };
      var rzp1 = new window.Razorpay(options);
      rzp1.open();
      setLoading(false);
    } catch (error) {
      alert("something went wrong please try again ")
      console.error("Error during checkout", error)
      setLoading(false);
    }
  }

  return (
    <>
      {
        data.map((pro, i) => (
          <div className='my-5' key={i}>
            <div className='md:text-[24px] bg-blue-100 mb-2 text-black font-medium px-[10px] text-[22px]'>
              {pro.head}
            </div>
            <div className={`ease-in-out duration-75`}>
              {pro.name}
            </div>
          </div>
        ))
      }

      <div className='mb-5'>
        <div className='md:text-[24px] bg-blue-100 mb-2 text-black font-medium px-[10px] text-[22px]'>
          Order Summary
        </div>
        <div className='sm:flex w-full items-center justify-between'>
          <div className='sm:w-[20vw] flex justify-center flex-1 items-center w-full'>
            <img src={`${detail.images[0]}`} alt="" />
          </div>
          <div className='flex-1'>
            <h3 className='flex justify-center capitalize text-[22px] font-semibold text-blue-900'>{detail.title}</h3>
            <p className='flex justify-center capitalize text-[18px] gap-2'>{detail.category} <span>-{Math.round(detail.discountPercentage)}% off</span></p>
            <div className='flex justify-around'>
              <div className='text-blue-700'>
                ${detail.price}
              </div>
              <div className='font-bold text-yellow-600'>
                ⭐ {detail.rating}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className='md:text-[24px] bg-blue-100 mb-2 text-black font-medium px-[10px] text-[22px]'>
          Payment
        </div>
        <div className='sm:flex w-full items-center justify-between'>
          <button
            onClick={() => checkout(detail.price)}
            className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded shadow-md transition-all duration-300 ease-in-out ${loading ? "opacity-50 cursor-not-allowed" : ""
              }`}
            disabled={loading} // Disable button when loading
          >
            {loading ? "Processing..." : "Buy Now"}
          </button>
        </div>
      </div>
    </>
  )
}

export default Checkoutdetail
