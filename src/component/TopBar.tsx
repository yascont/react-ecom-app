import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useRef } from 'react';

function TopBar() {

    const inputRef = useRef<HTMLInputElement>(null)
    const [SearchHidden, setsh] = useState(true)


    const handleKeyDown = (event) => {
        if (event.keyCode === 13) {
          const inputValue = inputRef.current?.value;
          const path = `/category/${inputValue}`;
          window.location.href = path
        }
      };

    return (
    <section className="h-9 bg-[#242424] flex items-center justify-end pl-20 pr-20 z-20">
    <ul className="flex gap-5">
       
        <li>
            <input placeholder="type your category..." ref={inputRef} onKeyDown={handleKeyDown} className= {SearchHidden ? 'hidden' : 'text-center text-black pb-1 h-[90%] rounded-lg'}></input>
        </li>

        <li>
            <img src="/src/assets/search.png" className="h-6 cursor-pointer" onClick={()=>setsh(!SearchHidden)}></img>
        </li>
        <li>
            <Link to="/cart">
                <img src="/src/assets/shop.png"  className="h-6 cursor-pointer"></img>
            </Link>
        </li>
    </ul>
</section>
    )
}

export default TopBar