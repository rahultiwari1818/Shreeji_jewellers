import React from 'react'

export default function Card({image,heading,text}) {
  return (
    <div className='bg-white  my-5 py-5 px-5 flex flex-col items-center justify-center'>
        <img src={image} alt="" className='h-20 w-20 '/>
        <h2 className='text-center text-2xl text-black'>{heading}</h2>
        <p className="text-xl text-center">
            {text}
        </p>
    </div>
  )
}
