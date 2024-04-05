import React from "react";
import HomeHead from "../component/HomeHead";
import CategoryCards from "../component/CategoryCards";
import { Link } from "react-router-dom";

export default function HomePage(){
    return (
        <>
            <HomeHead/>

            <section className="ml-auto flex items-center justify-center gap-10 mt-10 mb-10">
                <Link to="/category/men's"><img src="/src/assets/first-slid.png"   className="h-56 hover:animate-pulse cursor-pointer"></img></Link>
                <Link to="/category/women's"><img src="/src/assets/second-slid.png"   className="h-56 hover:animate-pulse cursor-pointer"></img></Link>
            </section>

            <section className="text-center mb-10">
                <p className="text-[#666666] text-[20px]">New Products</p>
                <h2 className="bo text-[26px] text-[#333333]">SHOP THE NEW ARRIVALS</h2>
            </section>

            <section className="mb-16">
                <CategoryCards category='home' num={200}/>
            </section>
        </>
    )
}