import * as React from 'react'
import { Link } from 'gatsby'

const Posts = ({dscpt, children}) => {
  return (
    <div className='posts'>
      {children}
      <h3>{dscpt}</h3>
    </div>
  )
}

export default Posts