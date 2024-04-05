import React from "react";
import HomeHead from "../component/HomeHead";
import CategoryCards from "../component/CategoryCards";


export default function HomePage(){
    return (
        <>
            <HomeHead/>

            <section className="ml-auto flex items-center justify-center gap-10 mt-10 mb-10">
                <img src="/src/assets/first-slid.png"   className="h-56 hover:animate-pulse cursor-pointer"></img>
                <img src="/src/assets/second-slid.png"   className="h-56 hover:animate-pulse cursor-pointer"></img>
            </section>

            <section className="text-center mb-10">
                <p className="text-[#666666] text-[20px]">New Products</p>
                <h2 className="bo text-[26px] text-[#333333]">SHOP THE NEW ARRIVALS</h2>
            </section>

            <section className="mb-16">
                <CategoryCards page={"home"} num={200}/>
            </section>
        </>
    )
}