import React from "react";
import CategoryCards from "../component/CategoryCards";
import { useParams } from "react-router-dom/dist/umd/react-router-dom.development";
function CategoryPage(){


    const {category} = useParams()
    return (
       <>
        <section>
            <img src="/src/assets/categoryHeader.jpg" className="w-full"></img>
            </section>

            <section className="w-full flex flex-col mb-5 items-center justify-center">
                <h2 className="text-[72px] bo mt-5 mb-5">{category}</h2>
                <CategoryCards category={category} num="200"/>
            </section>
       </>
    )
}

export default CategoryPage