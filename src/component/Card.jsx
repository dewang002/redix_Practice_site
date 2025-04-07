import React from 'react';
import useData from './useData';
import { LoaderCircle } from 'lucide-react';

const Card = () => {
    const { data, loading } = useData();

    if (loading) return <h1 className='w-full flex justify-center items-center'><LoaderCircle className='animate-spin'/></h1>;
    return (
        <div className="flex flex-wrap items-center justify-center gap-4">
            {data && data.map((elem, index) => (
                <div 
                    key={index} 
                    className="border p-4 h-60 sm:h-60 sm:w-sm md:h-70 md:w-sm lg:h-60 w-sm rounded flex"
                >
                    <div className='w-full'>
                        <img className='h-50 object-cover' src={elem.images[0]} alt="" />
                    </div>
                    <div className=" w-full flex flex-col justify-between">
                        <h1 className='font-bold text-xl'>{elem.title}</h1>
                        <p className='font-light '>{elem.description.slice(0,80)} ...</p>
                    <button className='p-2 text-white bg-blue-600 rounded'>add to cart</button>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Card;
