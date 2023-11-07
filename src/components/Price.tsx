"use client"
import React, { useState, useEffect } from 'react'

type Props ={
    price:number;
    id:number;
    option?: { title:string; additionalPrice:number} []
}

const Price = ({price, id, option}:Props) => {

    const [total, setTotal] = useState(price)
    const [quantity, setQuantity] = useState(1)
    const [selected, setSelected] = useState(0)

    useEffect(()=>{
        setTotal(quantity * (option ? price + option[selected].additionalPrice: price))
    },[quantity, option,selected, price]);

  return (
    <div className='flex flex-col gap-4'>
        <h2 className='text-2xl font-bold'>${total.toFixed(2)}</h2>
        {/* OPTION CONTAINER */}
        <div className="flex gap-4">
            {option?.map((option, index)=>(
                <button style={{ background: selected === index ? "rgb(248 113 113)" : "white", color:selected === index ? "white": "red" }} className='min-w-[6rem] p-2 ring-1 ring-red-400 rounded-md' onClick={()=> setSelected(index)} key={option.title}>{option.title}</button>
            ))}
        </div>

        {/* QUANTITY AND ADD BUTTON CONTAINER */}
        <div className="flex justify-between items-center">
            {/* QUANTITY */}
            <div className="flex justify-between w-full p-3  ring-1 ring-red-500 ">
                <span>Quantity</span>
                <div className='flex gap-4 items-center'>
                    <button onClick={()=>setQuantity(prev=>(prev >1 ? prev -1 : 1))}>{'<'}</button>
                    <span>{quantity}</span>
                    <button onClick={()=>setQuantity(prev=>(prev <9 ? prev +1 : 9))} className=''>{'>'}</button>
                </div>
            </div>
            {/* CART BUTTON */}
            <button className='uppercase w-56  bg-red-500 text-white p-3 ring-1 ring-red-500'> Add to Cart</button>
        </div>
    </div>
  )
}

export default Price