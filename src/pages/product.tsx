import { useState } from 'react'
import { products as initialProducts } from '../mocks/products.json'
import TableProducts from '../components/tableProducts'

const Product = (): JSX.Element => {
  // const [products] = useState(initialProducts)

  return (
    <div >
      <TableProducts products={initialProducts}/>
    </div>
  )
}

export default Product
