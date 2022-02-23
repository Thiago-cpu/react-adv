import {
  ProductCard,
  ProductImage,
  ProductButtons,
} from '../components'
import '../styles/custom-styles.css'
import { useShoppingCart } from '../hooks/useShoppingCart'

export const ShoppingPage: React.FC = () => {
  const {onProductCountChange, shoppingCart, products} = useShoppingCart()
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
        {
          products.map(product => (
            <ProductCard onChange={onProductCountChange} key={product.id} value={shoppingCart[product.id]?.count} className="bg-dark" product={product}>
              <ProductCard.Image className="custom-image" />
              <ProductCard.Title className="text-white" />
              <ProductCard.Buttons className="custom-buttons" />
            </ProductCard>
          ))
        }
        
      </div>
      <div className="shopping-cart">
        {
          Object.values(shoppingCart).map(product => (
            <ProductCard key={`shoppingCart-${product.id}`} onChange={onProductCountChange} value={product.count} style={{width: 100}} className="bg-dark" product={product}>
              <ProductImage className="custom-image" />
              <ProductButtons className="custom-buttons" />
            </ProductCard>
          ))
        }
      </div>
    </div>
  )
}
