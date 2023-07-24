import { useState, useEffect } from 'react';
import { getAllDocumentsFromCollection, getDocumentsFromCollectionByCategory } from '../data/firestoreService';

const useGetProducts = (categoryId) => {
    const [isLoading, setIsLoading] = useState(true)
    const [products, setProducts] = useState([])

    useEffect(() => {
        if (categoryId)
            getProductsByCategory()
        else 
            getAllProducts()
    }, [categoryId])

    const getAllProducts = async () => {
        setIsLoading(true)
        const products = await getAllDocumentsFromCollection("products")
        setIsLoading(false)
        setProducts(products)
    }

    const getProductsByCategory = async () => {
        setIsLoading(true)
        const products = await getDocumentsFromCollectionByCategory("products", categoryId)
        setIsLoading(false)
        setProducts(products)
    }

    return [products, isLoading];
}

export default useGetProducts;