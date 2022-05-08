import { useEffect, useState } from "react"

const useProductsData = ()=>{
    const [products, setProducts] = useState([])
    useEffect(() => {
      fetch('https://blooming-oasis-75068.herokuapp.com/products')
      .then(res=>res.json())
      .then(data=>setProducts(data))
    }, [])
    return[products, setProducts]
}

export default useProductsData;