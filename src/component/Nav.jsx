import { ShoppingBag } from 'lucide-react'
import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const Nav = () => {
    const [open, setOpen] = useState(false)
    const data = useSelector(state => state.cart.data)
    const [amount, setAmount] = useState()
    const navigate = useNavigate()
    const handleCart = () => {
        navigate("/cart")
    }
    return (
        <div className='w-full h-12 border-b flex items-center justify-between gap-10 px-4 py-8'>
            <div className='flex gap-10'>
                <svg onClick={() => navigate("/")} className='cursor-pointer rounded-full' width="40" height="40" viewBox="0 0 250 250" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <linearGradient id="neonGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stop-color="#00ffcc" />
                            <stop offset="100%" stop-color="#0066ff" />
                        </linearGradient>
                        <filter id="neonGlow" x="-50%" y="-50%" width="200%" height="200%">
                            <feFlood result="flood" flood-color="#00ffcc" flood-opacity="0.8" />
                            <feComposite in="flood" in2="SourceAlpha" operator="in" />
                            <feGaussianBlur stdDeviation="5" />
                            <feMerge>
                                <feMergeNode />
                                <feMergeNode in="SourceGraphic" />
                            </feMerge>
                        </filter>
                    </defs>
                    <rect width="100%" height="100%" fill="#0a0a0a" />
                    <text x="50%" y="50%" font-family="'Blackletter', serif" font-size="140" font-weight="bold" fill="url(#neonGradient)" text-anchor="middle" dominant-baseline="middle" filter="url(#neonGlow)">
                        𝕯
                    </text>
                    <circle cx="125" cy="125" r="115" stroke="url(#neonGradient)" stroke-width="8" fill="none" filter="url(#neonGlow)" />
                </svg>
                <div className='flex gap-4 cursor-pointer'>
                    {["Features", "Pricing"].map((elem) => {
                        return <h3 onClick={() => navigate(`/${elem}`)} className='font-light border p-1 rounded-lg transition duration-300 hover:bg-blue-700 hover:text-white'>{elem}</h3>
                    })}
                </div>
            </div>

            <div className='relative'>
                <div className='h-5 w-5 bg-red-600 absolute -top-2 -right-1 rounded-full text-white flex items-center justify-center'>{data.length}</div>
                <ShoppingBag onClick={handleCart} className='cursor-pointer' />
            </div>
            {open && <div className='right-0 top-12 absolute h-100 w-xl bg-black rounded text-white p-4'></div>}
        </div>
    )
}

export default Nav