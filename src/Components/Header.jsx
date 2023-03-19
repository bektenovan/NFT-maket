import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'
import { Link } from 'react-router-dom';

const Header = () => {
    const [nav, setNav] = useState(false);
    return (
        <header className="header">
            <div className="container">
                <div className="box">
                    <div className="logo">
                        <img src="https://cdn.animaapp.com/projects/63aaf7e2426e9824f0350c11/releases/63aaf8f2426e9824f0350c13/img/storefront-2@2x.svg" />

                        <Link to="/"><h1>NFT Marketplace</h1></Link>
                    </div>
                    <ul className={
                        nav ? ["menu", "active"].join(' ') : ["menu"]}>
                        <li>
                            <Link to='/marketplace'>  <a href="">Marketplace</a></Link>
                        </li>
                        <li>
                            <Link to="/rankings"> <a href="">Rankings</a></Link>
                        </li>
                        <li>
                            <Link to="/wallet"><a href="">Connect a wallet</a></Link>
                        </li>
                        <li>
                            <Link to="/signUp"> <button className="sign-btn">Sign up</button></Link>
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