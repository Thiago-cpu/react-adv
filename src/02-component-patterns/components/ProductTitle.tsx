import { useContext, CSSProperties } from 'react'
import styles from '../styles/styles.module.css'
import { ProductContext } from './ProductCard'

export interface Props {
  title?: string;
  className?: string;
  style?: CSSProperties;
}

export const ProductTitle = ({ title, className, style }: Props): JSX.Element => {
  const { product } = useContext(ProductContext)

  return (
    <span className={`${styles.productDescription} ${className}`} style={style}>
      {title ?? product.title}
    </span>
  )
}
