import React from 'react';
import useData from './useData';
import { LoaderCircle } from 'lucide-react';

const Card = () => {
    const { data, loading } = useData();

    if (loading) return <h1 className='w-full flex justify-center items-center'><LoaderCircle className='animate-spin'/></h1>;
    return (
        <div className="flex flex-wrap items-center justify-center gap-4 drop-shadow-xl` ">
            {data && data.map((elem, index) => (
                <div 
                    key={index} 
                    className="p-4 min:h-64 w-sm rounded flex fill-white border"
                >
                    <div className='w-full'>
                        <img className='h-50 object-cover' src={elem.images[0]} alt="" />
                    </div>
                    <div className=" w-full flex flex-col justify-between gap-4">
                        <h1 className='font-bold text-xl'>{elem.title.slice(0,10)}. . .</h1>
                        <p className='font-light '>{elem.description.slice(0,80)} ...</p>
                    <button className='active:scale-95 transition duration-300 p-2 text-white bg-blue-600 rounded'>add to cart</button>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Card;
