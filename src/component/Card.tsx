import React from "react"

function Card ({data}) {

  
  return (
    <>
      <section className="min-h-[410px] w-80 pb-3 cursor-pointer shadow-md shadow-lg  transform transition-transform duration-300 hover:scale-105">
      <img  className="mb-3 h-72 w-72" src={data.image}></img>
      <p  className="text-center">{ data.title }</p>
      <p className="bo text-center">price : {data.price}$</p>
      <p className="ml-auto mr-auto mt-3 bg-[#c0baba] hover:bg-[#E4901B] h-9 w-60 flex items-center justify-center cursor-pointer">ADD TO CART</p>
      </section>
    </>
  )
}


export default Card
