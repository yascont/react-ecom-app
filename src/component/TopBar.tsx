import React from 'react';

function TopBar() {
    return (
        <section className="h-9 bg-[#242424] flex items-center justify-end pl-20 pr-20 z-20">
    <ul className="flex gap-5">
       
            <li>
                <input placeholder="type your category..." className="text-center text-black pb-1 h-[90%] rounded-lg"></input>
            </li>
        
        <li>
            <a>
                <img src="/src/assets/search.png" className="h-6 cursor-pointer"></img>
            </a>
        </li>
        <li>
            <a>
                <span className="absolute ml-4 mb-5 h-5 w-5 bg-orange-500 text-white flex items-center justify-center rounded-full">1</span>
                <img src="/src/assets/shop.png"  className="h-6 cursor-pointer"></img>
            </a>
        </li>
    </ul>
</section>
    )
}

export default TopBar