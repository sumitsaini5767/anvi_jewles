import React, { useEffect, useState } from "react"
import Best_sell_prods_data from "./Best_sell_prods_data"

const ProductList = () => {
    const [products, setProducts] = useState([])

    const fetchData = async () => {
        const response = await fetch("https://fakestoreapi.com/products")
        const data = await response.json()
        setProducts(data)
    }

    useEffect(() => {
        fetchData()
    }, [])
    console.log(products);
    return (
        <div>
            {
                products.map(prod => (
                    <Best_sell_prods_data prod={prod} key={prod.id} />
                ))
            }
        </div>
    )
}

export default ProductList
