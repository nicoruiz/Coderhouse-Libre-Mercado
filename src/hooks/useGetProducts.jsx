import { useState, useEffect } from 'react';
import data from "../data/products.json";

const useGetProducts = () => {
    const [isLoading, setIsLoading] = useState(true)
    const [products, setProducts] = useState([])

    useEffect(() => {
        setIsLoading(true)
        const timeout = setTimeout(() => {
            setProducts(data)
            setIsLoading(false)
        }, 2000);

        return () => {
            clearTimeout(timeout)
        }
    }, [])

    return [products, isLoading];
}

export default useGetProducts;