import React from 'react'

const VideoTitle = ({ title, description }) => {
    return (
        <div className='w-screen aspect-video pt-[20%] px-6 md:px-24 absolute bg-gradient-to-r from-black'>

            <h1 className='text-white text-2xl md:text-5xl font-bold'>{title}</h1>
            <p className='text-white py-6 text-lg w-1/4 hidden md:inline-block'>{description}</p>
            <div className='my-4 md:mx-0'>
                <button className='bg-white text-black  py-1 md:py-4 px-3 md:px-12 text-xl rounded-md hover:bg-opacity-40'>▶ Play</button>

                <button className='hidden bg-gray-500 text-black p-4 px-14 mx-2 text-xl rounded-md'> ℹ More info</button>
            </div>
        </div>
    )
}

export default VideoTitle