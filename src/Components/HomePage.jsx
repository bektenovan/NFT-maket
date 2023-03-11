import React from "react";

const HomePage = () => {
    return (
        <div className="discover">
            <div className="discover_text">
                <h1>Discover <br /> Digital Art & <br />Collect NFTS</h1>
                <p>Nft Marketplace Ui Created With Anima For <br /> Figma. Collect, Buy And Sell Art From More <br /> Than 20k Nft Artists.</p>
                <button className="btn-start">Get started</button>

                <ul className="number">
                    <li>240k+</li>
                    <li>100k+</li>
                    <li>240k+</li>
                </ul>


                <ul className="number_char">
                    <li>Total Sale</li>
                    <li>Auctions</li>
                    <li>Artists</li>
                </ul>

            </div>
            <div className="img">
                <img src="https://cdn.animaapp.com/projects/6357ce7c8a65b2f16659918c/files/heroanimationtransparentbck-2.gif" alt="" />
            </div>
        </div>
    );
};
export default HomePage;