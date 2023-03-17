import React from "react";
import img from '../img/num.png'

const HomePage = () => {
    return (
        <div >
            <div className="discover">
                <div className="discover_text">
                    <h1>Discover <br /> Digital Art & <br />Collect NFTS</h1>
                    <p>Nft Marketplace Ui Created With Anima For <br /> Figma. Collect, Buy And Sell Art From More <br /> Than 20k Nft Artists.</p>
                    <button className="btn-start">Get started</button>

                    <ul className="number">
                        <li>240k+<br />Total Sale</li>
                        <li>100k+<br />Auctions</li>
                        <li>240k+<br />Artists</li>
                    </ul>

                </div>
                <div>
                    <img className="discover__img" width="500" height="500" src="https://cdn.animaapp.com/projects/6357ce7c8a65b2f16659918c/files/heroanimationtransparentbck-2.gif" alt="" />
                </div>
            </div>

            <div className="trending">
                <div className="trending-text">
                    <h1>Trending Collection</h1>
                    <h3>Checkout Our Weekly Updated Trending</h3>
                </div>
                <div className="trending__img">
                    <div>
                        <img width='330' heght='330' class="scale" src="https://cdn.animaapp.com/projects/63aaf7e2426e9824f0350c11/releases/63aaf8f2426e9824f0350c13/img/primary-photo-placeholder-1@2x.png" alt="" />
                        <ul className="trending__imgs">
                            <li><img width='100' height='100' class="scale" src="https://cdn.animaapp.com/projects/63aaf7e2426e9824f0350c11/releases/63aaf8f2426e9824f0350c13/img/secondary-photo-placeholder-6@2x.png" alt="" /></li>
                            <li><img width='100' height='100' class="scale" src="https://cdn.animaapp.com/projects/63aaf7e2426e9824f0350c11/releases/63aaf8f2426e9824f0350c13/img/secondary-photo-placeholder-7@2x.png" alt="" /></li>
                            <li><img width='100' height='100' class="scale" src={img} alt="" /></li>
                        </ul>
                        <h3>Dsgn Animals</h3>
                        <ul className="trending__ava">
                            <li><img width='24' height='24' class="scale" src="https://cdn.animaapp.com/projects/63aaf7e2426e9824f0350c11/releases/63aaf8f2426e9824f0350c13/img/avatar-placeholder@2x.png" alt="" /></li>
                            <li className="fox"> MrFox</li>
                        </ul>
                    </div>
                    <div className="magic">
                        <img width='330' heght='330' class="scale" src="https://cdn.animaapp.com/projects/63aaf7e2426e9824f0350c11/releases/63aaf8f2426e9824f0350c13/img/primary-photo-placeholder@2x.png" alt="" />
                        <ul className="trending__imgs">
                            <li><img width='100' height='100' class="scale" src="https://cdn.animaapp.com/projects/63aaf7e2426e9824f0350c11/releases/63aaf8f2426e9824f0350c13/img/secondary-photo-placeholder-2@2x.png" alt="" /></li>
                            <li><img width='100' height='100' class="scale" src="https://cdn.animaapp.com/projects/63aaf7e2426e9824f0350c11/releases/63aaf8f2426e9824f0350c13/img/secondary-photo-placeholder-9@2x.png" alt="" /></li>
                            <li><img width='100' height='100' class="scale" src={img} alt="" /></li>
                        </ul>
                        <h3>Magic Mushrooms</h3>
                        <ul className="trending__ava">
                            <li><img width='24' height='24' class="scale" src="https://cdn.animaapp.com/projects/63aaf7e2426e9824f0350c11/releases/63aaf8f2426e9824f0350c13/img/avatar-placeholder-2@2x.png" alt="" /></li>
                            <li className="fox"> Shroomie</li>
                        </ul>
                    </div>
                    <div className="disco">
                        <img width='330' heght='330' class="scale" src="https://cdn.animaapp.com/projects/63aaf7e2426e9824f0350c11/releases/63aaf8f2426e9824f0350c13/img/primary-photo-placeholder-5@2x.png" alt="" />
                        <ul className="trending__imgs">
                            <li><img width='100' height='100' class="scale" src="https://cdn.animaapp.com/projects/63aaf7e2426e9824f0350c11/releases/63aaf8f2426e9824f0350c13/img/secondary-photo-placeholder-10@2x.png" alt="" /></li>
                            <li><img width='100' height='100' class="scale" src="https://cdn.animaapp.com/projects/63aaf7e2426e9824f0350c11/releases/63aaf8f2426e9824f0350c13/img/secondary-photo-placeholder-11@2x.png" alt="" /></li>
                            <li><img width='100' height='100' class="scale" src={img} alt="" /></li>
                        </ul>
                        <h3>Disco Machines</h3>
                        <ul className="trending__ava">
                            <li><img width='24' height='24' class="scale" src="https://cdn.animaapp.com/projects/63aaf7e2426e9824f0350c11/releases/63aaf8f2426e9824f0350c13/img/avatar-placeholder-54@2x.png" alt="" /></li>
                            <li className="fox"> BeKind2Robots</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default HomePage;