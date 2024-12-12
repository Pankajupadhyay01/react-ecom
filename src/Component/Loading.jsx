import React from 'react'
import ClipLoader from "react-spinners/ClipLoader";

const Loading = () => {
    return (
        <div className='flex justify-center items-center m-auto'>
            <ClipLoader

                color={"blue"}
                size={30}
                aria-label="Loading Spinner"
                data-testid="loader"
            />
        </div>
    )
}

export default Loading