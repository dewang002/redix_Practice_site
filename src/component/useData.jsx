import axios from 'axios'
import React, { useEffect, useState } from 'react'

const useData = () => {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)
  const fetchdata = async() => {
    setLoading(true)
    const res = await axios.get('https://dummyjson.com/products')
    const productData = await res.data.products
    setData(productData)
    setLoading(false)
  }

  useEffect(() => {
    fetchdata()
  }, [])

  return { data, loading }
}

export default useData