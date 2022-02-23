import {
  ProductCard,
} from '../components'
import '../styles/custom-styles.css'

import {products} from '../data/products'
import { ProductImage } from '../components/ProductImage'
import { ProductTitle } from '../components/ProductTitle'
import { ProductButtons } from '../components/ProductButtons'

const product = products[0]

export const ShoppingPage: React.FC = () => {
  return (
    <div>
      <h1>Shopping Store</h1>
      <hr />
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap',
          gap: 0,
        }}
      >
        <ProductCard initialValues={{
          count: 4,
          maxCount: 10
        }} key={product.id} className="bg-dark" product={product}>
          {({reset, count, increaseBy, isMaxCountReached}) => (
            <>
              <ProductImage className="custom-image" />
              <ProductTitle className="text-white" />
              <ProductButtons className="custom-buttons" />
              <button onClick={reset}>Reset</button>
              <button onClick={() => increaseBy(-2)}>-2</button>
              {!isMaxCountReached && (<button onClick={() => increaseBy(+2)}>+2</button>) }
              <span>{count}</span>           
            </>
          )}
        </ProductCard>
      </div>
    </div>
  )
}
