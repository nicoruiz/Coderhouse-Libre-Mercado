import { useState, useEffect } from 'react';
import { getDocumentFromCollectionById } from '../data/firestoreService';

const useGetProduct = (productId) => {
    const [isLoading, setIsLoading] = useState(true)
    const [product, setProduct] = useState()

    useEffect(() => {
        getProductById()
    }, [])

    const getProductById = async () => {
        setIsLoading(true)
        const product = await getDocumentFromCollectionById("products", productId)
        setIsLoading(false)
        setProduct(product)
    }

    return [product, isLoading];
}

export default useGetProduct;