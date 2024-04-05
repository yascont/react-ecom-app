import React from "react";
import Card from "./Card";
import axios from 'axios';
import { useState } from "react";
import { useEffect } from "react";


function compareFirstWord(str1, str2) {
  const words1 = str1.trim().split(/\s+/);
  const words2 = str2.trim().split(/\s+/);

  return words1[0] === words2[0];
}

interface product {
    title: string;
    image: string;
    price: number;

  }
export default function CategoryCards({category, page, num}){
  const [data, setData] = useState<product[] | null>(null);

  const fetchData = async () => {
      const response = await axios.get('https://fakestoreapi.com/products/');
      setData(response.data);
      if (data)
        setData(data?.slice(0, num))
};
const fetchCategoryData = async () => {
      const response = await axios.get(`https://fakestoreapi.com/products/`);
      const filteredResponse = response.data
    ? response.data.filter(item => compareFirstWord(item.category, category))
    : data;
     setData(filteredResponse);
      if (filteredResponse)
        setData(filteredResponse?.slice(0, num))
}

  useEffect(() => {
    if (page != 'home')
      fetchCategoryData()
    else
      fetchData();
  }, [category]);

  if (!Array.isArray(data) || !data) {
    return <div>No data available</div>;
  }
  
    return (
        <section className="pl-[10%] pr-[10%] flex gap-10 flex-wrap justify-center mt-5">
        
        {data?.map((item, index) => (
          <Card key={index} data={item} />
        ))}
        
        </section>
    )
}