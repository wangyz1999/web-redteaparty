import * as React from 'react'

const Advantage = ({dscpt, children}) => {
  return (
    <div className='h-80 w-60 rounded-3xl shadow-xl bg-lime-300 ml-auto mr-auto px-5 py-8 grid content-between dark:bg-cyan-700'>
      {children}
      <h3 className='flex justify-center text-3xl'>{dscpt}</h3>
    </div>
  )
}

export default Advantage