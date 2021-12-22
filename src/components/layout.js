import * as React from 'react'
import { Link } from 'gatsby'

const Advantage = ({dscpt, children}) => {
  return (
    <div className='advantage'>
      {children}
      <h3>{dscpt}</h3>
    </div>
  )
}

export default Advantage