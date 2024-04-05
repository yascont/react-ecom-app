
function CardProduct() {
return(
    <>
        <section className="flex justify-between mb-8 items-center shadow-lg shadow-xl p-10">
        
        <div className="flex w-[0%] gap-5">
            <img src=" product.image " className="max-h-40 max-w-32 rounded-xl"></img>
        </div>
        <div className="w-[10%]">
            <p className="text-[#B2B3B6] text-sm"> product.category </p>
            <h2 className="seb text-lg"> product.title </h2>
        </div>

        <p className="w-[15%] bo">$ product.price </p>

        <div className="w-[16%] h-10 flex gap-4">

                <p className=" text-lg cursor-pointer">-</p>
                <p className=" li text-lg"> product.count </p>
                <p className=" text-lg cursor-point">+</p>

        
                <p className="text-lg text-red-600">removed</p>
            
        </div>

        <p className="w-[6%] text-[#FFC770] bo text-2xl">$ (product.price * product.count).toFixed(2) </p>
        </section>
    </>
)
}

export default CardProduct