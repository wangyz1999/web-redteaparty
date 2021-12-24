import * as React from 'react'
import { Link } from 'gatsby'

const Record = ({dscpt, children}) => {
  return (
    <div className='record'>
      {children}
      <h3>{dscpt}</h3>
    </div>
  )
}

export default Record