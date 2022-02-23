import { useContext, CSSProperties } from 'react'
import { ProductContext } from './ProductCard'
import noImage from '../assets/no-image.jpg'
import styles from '../styles/styles.module.css'

export interface Props {
  img?: string;
  className?: string;
  style?: CSSProperties;
}

export const ProductImage = ({ img, className, style }: Props): JSX.Element => {
  const { product } = useContext(ProductContext)
  const imgToShow = img || product.img || noImage

  return (
    <img
      className={`${styles.productImg} ${className}`}
      src={imgToShow}
      alt={imgToShow}
      style={style}
    />
  )
}
