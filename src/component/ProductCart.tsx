import { data } from "autoprefixer"
import React from "react"
import { useState } from "react"

function ProductCart({id, product}) {

    const [removed, setremoved] = useState(true)
    const [count, setCount] = useState(product.count)

    const updateCountStorage = (ncount)=>{
        let storageObject = {count : 0}
        let storageProduct = localStorage.getItem(id);
        if(storageProduct)
            storageObject = JSON.parse(storageProduct);
        if(storageObject)
            storageObject.count = ncount;
        localStorage.setItem(id, JSON.stringify(storageObject));
    }
    return(
        <>
            <section className="flex justify-between mb-8 items-center shadow-lg shadow-xl p-10">
            
            <div className="flex w-[0%] gap-5">
                <img src={product.image} className="max-h-40 max-w-32 rounded-xl"></img>
            </div>
            <div className="w-[10%]">
                <p className="text-[#B2B3B6] text-sm">{product.category} </p>
                <h2 className="seb text-lg"> {product.title} </h2>
            </div>

            <p className="w-[15%] bo">${product.price} </p>

            <div className="w-[16%] h-10 flex gap-4">
                <div className={removed? 'h-10 flex gap-4' :'hidden'}>
                    <p className=" text-lg cursor-pointer" onClick={()=>{
                        if (count == 1)
                        {
                            setremoved(false)
                            localStorage.removeItem(id);
                            return ;
                        }
                        setCount(count - 1)
                        updateCountStorage(count - 1)
                    }}>-</p>
                    <p className=" li text-lg"> {count} </p>
                    <p className=" text-lg cursor-pointer" onClick={()=>{setCount(count + 1);
                    updateCountStorage(count + 1)}}>+</p>
                </div>
            
                    <p className={removed? 'hidden' : "text-lg text-red-600"}>removed</p>
                
            </div>

            <p className="w-[10%] text-[#FFC770] bo text-2xl">$ {(product.price * count).toFixed(2)} </p>
            </section>
        </>
    )
    }

export default ProductCart