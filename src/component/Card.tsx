import React from "react"
import { Link } from "react-router-dom";

function Card ({data}) {


  const setToLocalStorage = () => {
    localStorage.setItem(data.id.toString(), JSON.stringify({title : data.title, price : data.price, image : data.image, category : data.category, count : 1}));
  }

  const path = `/product/${data.id}`
  return (
    <>
      <section className="min-h-[410px] w-80 pb-3 cursor-pointer shadow-md shadow-lg  transform transition-transform duration-300 hover:scale-105">
      <Link to={path}><img  className="mb-3 h-72 w-72" src={data.image}></img></Link>
      <Link to={path}><p className="text-center">{ data.title }</p></Link>
      <p className="bo text-center">price : {data.price}$</p>
      <p className="ml-auto mr-auto mt-3 bg-[#c0baba] hover:bg-[#E4901B] h-9 w-60 flex items-center justify-center cursor-pointer" onClick={setToLocalStorage}>ADD TO CART</p>
      </section>
    </>
  )
}


export default Card
