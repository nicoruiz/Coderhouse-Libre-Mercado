import { useState, useEffect } from 'react';
import data from "../data/products.json";

const useGetProduct = (productId) => {
    const [isLoading, setIsLoading] = useState(true)
    const [product, setProduct] = useState()

    useEffect(() => {
        setIsLoading(true)
        const timeout = setTimeout(() => {
            const product = data.find(x => x.id === parseInt(productId))
            setProduct(product)
            setIsLoading(false)
        }, 1000);

        return () => {
            clearTimeout(timeout)
        }
    }, [productId])

    return [product, isLoading];
}

export default useGetProduct;