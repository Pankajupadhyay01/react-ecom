import React from 'react'

const Heading = ({name}) => {
  return (
    <div className='flex py-[8px]'>
        <span className='text-[24px] font-medium relative before:absolute before:h-[2px] before:w-6 before:bg-blue-800 before:bottom-0 before:right-0 '>
            {name}
        </span>
    </div>
  )
}

export default Heading