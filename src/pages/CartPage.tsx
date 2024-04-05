import React from "react"
import CardProduct from "../component/CartProduct"

function CartPage(){
    return (
        
        <section className="bg-[#d1d7da] pb-10">
            <section className="ml-[7%] pt-10">
                <h2 className="bo text-[26px]">Shopping Bag</h2>
                <p><span className="bo">cacheService.len items</span> in your bag</p>
            </section>
        
            
            <section className="w-[80%] bg-white mt-10 ml-auto mr-auto rounded-2xl shadow-lg shadow-xl p-10">
                <div className="flex justify-between mb-10 items-center text-center">
                    <p className="seb w-[10%]">Product</p>
                    <p className="seb w-[12%]">Price</p>
                    <p className="seb w-[10%]">Quantity</p>
                    <p className="seb w-[10%]">Total Price</p>
                </div>
                
                    <CardProduct />
        
                <p className=" mt-8 hover:animate-pulse bg-[#E4901B] h-10 w-36 flex items-center justify-center ml-auto cursor-pointer">CHECKOUT</p>
            </section>
        
        </section>

    )
}

export default CartPage 