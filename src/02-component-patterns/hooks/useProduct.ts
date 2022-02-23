import { useEffect, useState } from 'react'
import { onChangeArgs, Product } from '../interfaces/interfaces'

interface useProductArgs {
  product: Product;
  onChange?: (args: onChangeArgs) => void;
  value?: number;
}

interface useProductReturn {
  counter: number;
  increaseBy: (value: number) => void;
}

export const useProduct = ({onChange, product, value = 0}: useProductArgs): useProductReturn => {
  const [counter, setCounter] = useState(value)

  const increaseBy = (value: number) => {
    const newValue = Math.max(counter + value, 0)
    setCounter(newValue)
    onChange?.({product, count: newValue})
  }

  useEffect(() => {
    setCounter(value)
  }, [value])

  return {
    counter,
    increaseBy,
  }
}
