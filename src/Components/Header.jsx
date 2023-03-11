import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'

const Header = () => {
    const [nav, setNav] = useState(false);
    return (
        <header className="header">
            <div className="container">
                <div className="box">
                    <div className="logo">
                        <img src="https://cdn.animaapp.com/projects/63aaf7e2426e9824f0350c11/releases/63aaf8f2426e9824f0350c13/img/storefront-2@2x.svg" />
                        <h1>NFT Marketplace</h1>
                    </div>
                    <ul className={
                        nav ? ["menu", "active"].join(' ') : ["menu"]}>
                        <li>
                            <a href="">Marketplace</a>
                        </li>
                        <li>
                            <a href="">Rankings</a>
                        </li>
                        <li>
                            <a href="">Connect a wallet</a>
                        </li>
                        <li>
                            <button className="sign-btn">Sign up</button>
                        </li>
                    </ul>
                    <div onClick={() => setNav(!nav)} className="mobile_btn">
                        {nav ? <AiOutlineClose size={25} /> : <AiOutlineMenu size={25} />}

                    </div>
                </div>
            </div>
        </header>
    )
}
export default Header;