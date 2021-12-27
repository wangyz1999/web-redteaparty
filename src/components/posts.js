import * as React from 'react'

const Posts = ({ img_src, dscpt}) => {
  return (
    <div className='posts flex flex-col items-center space-y-10'>
      <div className=''>
        <img src={img_src} alt='' className='max-w-full max-h-full'></img>
      </div>
      <h3 className='text-3xl items-center tracking-widest'>{dscpt}</h3>
    </div>
  )
}

export default Posts