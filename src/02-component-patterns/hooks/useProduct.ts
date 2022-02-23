import { useEffect, useState, useRef, EffectCallback, DependencyList } from 'react'
import { onChangeArgs, Product } from '../interfaces/interfaces'
import { InitialValues } from '../components/ProductCard'

interface useProductArgs {
  product: Product;
  onChange?: (args: onChangeArgs) => void;
  value?: number;
  initialValues?: InitialValues;
}

interface useProductReturn {
  counter: number;
  increaseBy: (value: number) => void;
  reset: () => void;
  maxCount?: number;
  isMaxCountReached: boolean;
}

const useBeforeMountEffect = (effect: EffectCallback, dependencies?: DependencyList) => {
  const isMounted = useRef(false)
  useEffect(() => {
    if(!isMounted.current) {
      isMounted.current = true
    } else {
      effect()
    }
  },dependencies)
}

export const useProduct = ({onChange, product, value = 0, initialValues}: useProductArgs): useProductReturn => {
  const [counter, setCounter] = useState(initialValues?.count ?? value)

  useBeforeMountEffect(() => {
    setCounter(value)
  }, [value])

  const increaseBy = (value: number) => {
    const newValue = Math.max(counter + value, 0)
    setCounter(Math.min(newValue, initialValues?.maxCount ?? Infinity))
    onChange?.({product, count: newValue})
  }

  const reset = () => {
    setCounter(initialValues?.count ?? value)
  }

  return {
    counter,
    increaseBy,
    reset,
    isMaxCountReached: counter === initialValues?.maxCount,
    maxCount: initialValues?.maxCount
  }
}
