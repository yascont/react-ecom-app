import React from 'react';
import TopBar from './TopBar';
import { Link } from 'react-router-dom';


function Header() {

    
    return (
        <header className="text-white">
    <section className="h-9 bg-[#242424] flex items-center justify-end pl-20 pr-20 fixed w-full z-20">
        <TopBar/>
    </section>
    <section className="flex justify-between items-center h-32 bg-[#333333] pl-[10%] pr-[10%] pt-9">
        <Link to="/home" className='flex items-center h-[100%]'><img src="/src/assets/logo.png" className="h-[60%] cursor-pointer"></img></Link>
        <ul className="flex gap-16 text-xl">
            <li className="cursor-pointer hover:text-[#E4901B]"><Link to="/category/men's">men's clothing</Link></li>
            <li className="cursor-pointer hover:text-[#E4901B]"><Link to="/category/jewelery">jewelery</Link></li>
            <li className="cursor-pointer hover:text-[#E4901B]"><Link to="/category/electronics">electronics</Link></li>
            <li  className="cursor-pointer hover:text-[#E4901B]"><Link to="/category/women's">women's clothing</Link></li>
        </ul>
    </section>
</header>
    )
}

export default Header