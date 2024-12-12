import React from 'react'

const Footer = () => {
    return (
        <div>
            <footer className='mt-[10px]'>
                <div className='flex flex-col md:flex-row justify-between mx-[20px]'>
                    {/* about */}
                    <div className='my-[10px] md:w-[calc(33.33%-10px)] md:flex md:flex-col md:justify-center md:m-auto'>
                        <div className='text-xl font-medium text-gray-700'>
                            About
                        </div>
                        <div className='my-[10px]'>
                            <div className='list-none space-y-2 text-[15px] md:mx-0 mx-[10px] font-normal'>
                                <li className=' hover:text-gray-600'> Contact us   </li>
                                <li className=' hover:text-gray-600'>  About us </li>
                                <li className=' hover:text-gray-600'>  Careers  </li>
                            </div>
                        </div>
                    </div>

                    
                    {/* help section */}
                    <div className='border-y-gray-400 md:w-[calc(33.33%-10px)] md:flex md:flex-col md:justify-center md:m-auto md:border-none border-y-[2px] my-[10px] w-full'>
                        <div className='text-xl font-medium text-gray-700 '>
                            Help
                        </div>
                        <div className='my-[10px] w-full'>
                            <div className='w-full md:flex md:justify-between md:flex-wrap list-none space-y-2 text-[15px] md:mx-0 mx-[10px] font-normal'>
                                <li className='md:w-[calc(50%-10px)] hover:text-gray-600'>  Faqs  </li>
                                <li className=' md:w-[calc(50%-10px)] hover:text-gray-600'>   Returns </li>
                                <li className='  md:w-[calc(50%-10px)] hover:text-gray-600'>  Payments  </li>
                                <li className='  md:w-[calc(50%-10px)] hover:text-gray-600'>   Payments  </li>

                            </div>
                        </div>
                    </div>

                    {/* social */}
                    <div className='my-[10px] md:w-[calc(33.33%-10px)] md:flex md:flex-col md:justify-center md:m-auto '>
                        <div className='text-xl font-medium text-gray-700'>
                            Social
                        </div>
                        <div className='my-[10px]'>
                            <div className='md:flex md:justify-between md:flex-wrap list-none  text-[15px] md:mx-0 mx-[10px] font-normal'>
                                <li className='md:w-[calc(50%-10px)] hover:text-gray-600'>
                                    <img src="/assets/instagram.svg" alt="" />
                                    <span>Instagram</span>
                                </li>
                                <li className='md:w-[calc(50%-10px)] hover:text-gray-600'>
                                    <img src="/assets/facebook.svg" alt="" />
                                    <span>Facebook</span>
                                </li>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='flex flex-col md:flex-row justify-center md:justify-between  border-t-gray-400 border-t-[2px] mx-[20px]'>
                    <div>lamda © | All rights reserved</div>
                </div>
            </footer>
        </div>
    )
}

export default Footer