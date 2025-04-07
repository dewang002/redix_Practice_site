import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decreasePrice, increasePrice, removeCart } from '../store/cartSlice'

const AddToBag = () => {
  const data = useSelector(state => state.cart.data)
  const dispatch = useDispatch()
  console.log(data)
  const handleDelete = (id) => {
    dispatch(removeCart(id))
  }
  const handleAddPrice = (id) =>{
    dispatch(increasePrice(id))
  }
  const handleRemovePrice = (id) =>{
    dispatch(decreasePrice(id))
  }
  return (
    <div className='flex flex-col gap-4'>
      {
        data?.map(elem => {
          return <div className='h-40 w-xl border border-black flex gap-10 rounded-xl'>
            <div className='flex '>
              <img className='h-full w-sm object-contain' src={elem.images} alt="" />
            </div>
            <div className='flex flex-col justify-between'>
              <h1>{elem.title}</h1>
              <button className='border p-2 rounded w-fit' onClick={() => handleDelete(elem.id)}>remove</button>
            </div>
            <div className='flex justify-center items-center gap-10'>
              <button onClick={()=>handleRemovePrice(elem.id)} className='h-10 w-10 active:scale-95 border rounded bg-red-700 text-white '>-</button>
              <h1>{(elem.price*elem.quantity).toFixed(2)}</h1>
              <button onClick={()=>handleAddPrice(elem.id)} className='h-10 w-10 active:scale-95 border rounded bg-green-700 text-white '>+</button>
            </div>
          </div>
        })
      }
    </div>
  )
}

export default AddToBag