import { useEffect, useState } from "react"

const useProductsData = ()=>{
    const [products, setProducts] = useState([])
    useEffect(() => {
      fetch('mobile-data.json')
      .then(res=>res.json())
      .then(data=>setProducts(data))
    }, [])
    return[products, setProducts]
}

export default useProductsData;