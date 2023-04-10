import { useState } from 'react'
import { products as initialProducts } from '../mocks/products.json'
import TableProducts from '../components/tableProducts'

const Product = (): JSX.Element => {
  const [products] = useState(initialProducts)

  return (
    <div className='table-products'>
      <TableProducts products={products}/>
    </div>
  )
}

export default Product
