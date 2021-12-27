import * as React from 'react'

const Record = ({children, image_src, text}) => {
  return (
    <div className='record flex flex-col xl:flex-row space-y-11 xl:space-x-11 w-3/4 md:w-1/2 xl:w-1/2 justify-center items-center'>
      <div className='sm:h-full xl:w-1/2 xl:h-full rounded-lg'>
        <img src={image_src} alt=""></img>
      </div>
      <div className='sm:h-1/2 xl:w-1/2 flex flex-col justify-center items-center space-y-11'>
          <p className='text-lg xl:text-xl'>{text}</p>
          <h3>{children}</h3>
      </div>
    </div>
  )
}

export default Record