import React, { useState } from 'react' 
const Carousel = () => {
    const images = [
        {
            img:'/assets/c1.jpg'
        },
        {
            img:'/assets/c2.jpg'
        },
        {
            img:'/assets/c3.jpg'
        },
        {
            img:'/assets/c4.jpg'
        },
    ] 
    const [slide, setslide] = useState(0)

    setTimeout(() => {
        setslide(slide<images.length-1?slide+1:0)
    }, 4500);
    return (
        <div className='h-[50vh] md:h-[70vh] w-[99%] flex m-auto'>
            <div className='w-full h-full relative overflow-hidden flex'>
                <div className={`h-full flex absolute left-[0]`} style={{ transform: `translateX(-${slide * 100}vw)` }}>
                    {images.map((pro, i) => (

                        <div key={i} className='transition ease-in-out delay-150 w-[100vw] flex items-center justify-center '>
                            <div className='w-full object-cover h-full bg-blue-50'>
                                <img className='h-full w-full' src={pro.img} alt="Crousel Banner" srcSet={pro.img} /> 
                            </div>
                        </div>
                    ))
                    }

                </div>
            </div>
        </div>
    )
}

export default Carousel