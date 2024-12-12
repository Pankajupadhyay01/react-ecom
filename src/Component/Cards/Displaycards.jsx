import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import ClockLoader from "react-spinners/ClockLoader";

const Displaycards = () => {
  const obj = useSelector((state) => state.user.product);
  return (
    <div>
      <div className=''>

        {obj == "" ?
          <div className='h-[50vh] flex flex-col items-center justify-center '>
            <ClockLoader

              color={"blue"}
              size={100}
              aria-label="Loading Spinner"
              data-testid="loader"
            />
            <div className=' font-semibold'>
              Oops... ! No such result found
            </div>
          </div> :
          <div className='flex md:justify-around items-center justify-center m-auto w-full flex-wrap '>

            {
              obj.map((pro, i) => (
                <Link to={"/product/detail/" + pro.id} key={i} className='flex flex-col justify-center items-centern w-[80%] sm:w-[calc(50%-10px)] md:w-[calc(33.33%-10px)] lg:w-[calc(25%-10px)] my-2 rounded-lg border-2 overflow-hidden'>
                  <div className='h-[180px] lg:h-[220px] overflow-hidden object-cover items-center m-auto flex justify-center bg-white'>
                    <img width={"100%"} height={"100%"} className='h-full w-full' src={pro.thumbnail} alt='Products' />
                  </div>
                  <div className='w-full bg-blue-50'>
                    <div className='w-[90%] flex m-auto flex-col'>
                      <div className='w-full flex justify-center'> {pro.title} </div>
                      <div className='flex justify-between items-center'>
                        <div className='text-red-800'>${pro.price} <span className='text-green-900 font-semibold'>(⭐{pro.rating.toFixed(1)})</span></div>
                        <div>Add to cart</div>
                      </div>
                    </div>
                  </div>
                </Link>
              ))
            }


          </div>
        }
      </div>
    </div>
  )
}

export default Displaycards