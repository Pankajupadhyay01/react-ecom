import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
const Toprated = () => {

  const products = useSelector((state) => state.user.product);
  const [prom, setprom] = useState([])
  const [slide, setslide] = useState(1)

  products.forEach(element => {
    if (element.rating > 4) {
      prom.push(element)
    }
  });

  const func = (way) => {
    if (way === "right") {
      setslide(slide < products.length - 1 ? slide + 1 : 0)
    } else {
      setslide(slide > 0 ? slide - 1 : products.length - 1)
    }
  }

  return (
    <div className='h-[30vh] lg:h-[42vh] w-full justify-center items-center relative overflow-hidden  m-auto flex'>
      <div className={`h-[320px]  xl:h-[420px] flex absolute left-[0]`} style={{ transform: `translateX(-${slide * 100}vw)` }}>
        {prom.map((pro, i) => (

          <Link to={"/product/detail/"+pro.id} key={i} className='w-[50vw] sm:w-[33.33vw] xl:w-[25vw] m-auto flex items-center justify-center'>
            <div className='w-full flex-col h-[230px] lg:h-[320px] mx-1 md:mx-3 flex justify-center items-center'>
              <div className='h-full w-full rounded-3xl object-cover overflow-hidden flex justify-center'>
                <img className="h-full w-full overflow-hidden" src={pro.thumbnail} alt="" />
              </div>
              <div className='h-[20%]'>
                  {pro.title}
              </div>
            </div>
          </Link>
        ))
        }

      </div>
      <div className='absolute left-0 cursor-pointer bg-white h-[50px] w-[50px] rounded-full flex justify-center items-center' onClick={() => func("left")}>◀️</div>
      <div className='absolute right-0 cursor-pointer bg-white h-[50px] w-[50px] rounded-full flex justify-center items-center' onClick={() => func("right")}>▶️</div>


    </div >
  )
}

export default Toprated;