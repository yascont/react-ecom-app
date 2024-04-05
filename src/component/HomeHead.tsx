import React from "react"
import { Link } from "react-router-dom"

function HomeHead() {

    return (
        <section className="h-[700px] bg-[url('/src/assets/headerimage.jpg')] flex flex-col justify-center items-end gap-2 pr-36 text-white">
            <h2 className="text-[72px] bo fadeIn">MEN FASHIONS 2024</h2>
            <h4 className="text-[30px] animate-bounce  ">SALE UP TO 30% OFF</h4>
            <p className="li">Mirum est notare quam littera gothicadd, quam nunc putamus parum claram, anteposuerit litterarum formas humanitatis per seacula.</p>
            <p className="mt-8 hover:animate-pulse bg-[#E4901B] h-10 w-36 flex items-center justify-center cursor-pointer"><Link to="/category/men's clothing"> SHOP NOW</Link></p>
        </section>
    )
  }
  
  export default HomeHead
  