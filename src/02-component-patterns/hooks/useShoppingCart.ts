import { Product, ProductInCart } from '../interfaces/interfaces'
import { useCallback, useState } from 'react'
import { products } from '../data/products'
export const useShoppingCart = () => {
  const [shoppingCart, setShoppingCart] = useState<{[key: string]: ProductInCart}>({})

  const onProductCountChange = useCallback(({product, count}: {product: Product, count: number}) => {
    setShoppingCart(prevShoppingCart => {
      const {[product.id]: toDelete, ...newShoppingCart} = prevShoppingCart // eslint-disable-line @typescript-eslint/no-unused-vars
      if(count > 0) {
        newShoppingCart[product.id] = {...product, count}
      }

      return newShoppingCart
    })
  }, [])
  return {
    onProductCountChange,
    products,
    shoppingCart
  }
}