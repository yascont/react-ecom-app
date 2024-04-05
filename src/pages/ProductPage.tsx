import React from "react";
import CategoryCards from "./CategoryPage";

export default function ProductPage(){
    return (
        <>
            <section>
                <img src="/src/assets/categoryHeader.jpg" className="w-full"></img>
            </section>

            <section className="flex p-6 mt-20 mb-20 w-[65%] mr-auto ml-auto justify-center gap-16 shadow-md shadow-lg">
                <div className="flex items-center justify-center">
                    <img className="max-w-96 duration-500 hover:scale-125" ></img>
                </div>
                <div className="mt-10">
                    <h2 className="bo text-[19px]">product.title</h2>
                    <div className="flex gap-1 mb-3">
                        <p className="text-[#9999A6] li text-[14px] ml-1">rate(product && product.rating ? product.rating.rate : ''/5)</p>
                        <p className="text-[#9999A6] li text-[14px] ml-1">in stock(product && product.rating ? product.rating.count : '')</p>
                    </div>
                    <p className="text-[#6d6363] text-[16px] li">product.description</p>
                    <p className="bo w-20 text-center text-xl border-t-2 border-b-2 mt-6 mb-6 border-black">$product.price</p>
                    <div className="flex items-center justify-center w-36 mb-7">
                        <label  className="block">QUANTITY</label>
                        <input id="count" type="number" className="border border-gray-300  h-8 w-14 ml-3 pl-5" min="1" max="100"></input>
                    </div>
                    <p className="mt-3 bg-[#c0baba] hover:bg-[#E4901B] h-9 w-36 flex items-center justify-center cursor-pointer" >ADD TO CART</p>
                </div>
            </section>

            <section className="mt-6 mb-8">
                <CategoryCards/>
            </section>
        </>
    )
}

