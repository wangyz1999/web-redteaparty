import * as React from 'react'
import { Link } from 'gatsby'

const Advantage = ({dscpt, children}) => {
  return (
    <div className='advantage border-2 p-4 max-w-2xl'>
      {children}
      <h3 className='flex justify-center text-3xl'>{dscpt}</h3>
    </div>
  )
}

export default Advantage