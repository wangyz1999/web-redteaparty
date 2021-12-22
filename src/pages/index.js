// Step 1: Import React
import * as React from 'react'
import Advantage from '../components/layout'

import "./index.css"
// Step 2: Define your component

const IndexPage = () => {
  return (
    <main>

      <h1>红茶会</h1>
      <p>QQ群: 79879879</p>
      <Advantage dscpt="专业"><p>asdasd</p></Advantage>
      <Advantage dscpt="安全"><p>asdasd</p></Advantage>
      <Advantage dscpt="自由"><p>asdasd</p></Advantage>
      <Advantage dscpt="活跃"><p>asdasd</p></Advantage>
    </main>
  )
}




// Step 3: Export your component
export default IndexPage