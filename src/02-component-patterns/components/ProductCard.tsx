import styles from '../styles/styles.module.css'
import { useProduct } from '../hooks/useProduct'
import { createContext, CSSProperties, ReactElement } from 'react'
import { Product, onChangeArgs, ProductCardHandlers } from '../interfaces/interfaces'
import { ProductContextProps } from '../interfaces/interfaces'

export const ProductContext = createContext({} as ProductContextProps)
const { Provider } = ProductContext

export interface InitialValues {
  count?: number,
  maxCount?: number
}

export interface Props {
  product: Product;
  // children?: ReactElement | ReactElement[];
  children: (args: ProductCardHandlers) => JSX.Element
  className?: string;
  style?: CSSProperties;
  onChange?: (args: onChangeArgs) => void;
  value?: number;
  initialValues?: InitialValues;
}

export const ProductCard = ({ product, children, onChange, initialValues, value, className, style }: Props): JSX.Element => {
  const { counter, increaseBy, maxCount, reset, isMaxCountReached } = useProduct({ onChange, product, value, initialValues })
  return (
    <Provider value={{ product, counter, increaseBy, maxCount }}>
      <div className={`${styles.productCard} ${className}`} style={style}>
        {children({
          count: counter,
          increaseBy,
          isMaxCountReached,
          product,
          reset
        })}
      </div>
    </Provider>
  )
}
