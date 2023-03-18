import React from "react";
import img from '../img/num.png'

const HomePage = () => {
    return (
        <div >
            <div className="discover">
                <div className="discover_text">
                    <h1>Discover <br /> Digital Art & <br />Collect NFTS</h1>
                    <p>Nft Marketplace Ui Created With Anima For <br /> Figma. Collect, Buy And Sell Art From More <br /> Than 20k Nft Artists.</p>
                    <button className="btn-start"> <img src="https://cdn.animaapp.com/projects/63aaf7e2426e9824f0350c11/releases/63aaf8f2426e9824f0350c13/img/user@2x.svg" alt="" /> Get started</button>

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

            <div className="creators">
                <div className="creators-text">
                    <h1>Top Creators</h1>
                    <div className="creators-btn">
                        <p>Checkout Top Rated Creators On The Nft Marketplace</p>
                        <button> <img src="https://cdn.animaapp.com/projects/63aaf7e2426e9824f0350c11/releases/63aaf8f2426e9824f0350c13/img/rocketlaunch-1@2x.svg" alt="" /> View Rankings</button>
                    </div>
                </div>

                {/* start copiryu zdes */}

                <div className="cards" >
                    <div className="card" >
                        <div className="circle">
                            1
                        </div>
                        <div className="card-ava">
                            <img width="120" height="120" src="https://cdn.animaapp.com/projects/63aaf7e2426e9824f0350c11/releases/63aaf8f2426e9824f0350c13/img/avatar-placeholder-98@2x.png" alt="" />
                        </div>
                        <div className="name">
                            <h2 className="name">Keepitreal</h2>
                            <ul className="val">
                                <li className="sales">Total Sales:</li>
                                <li className="cost">34.53 ETH</li>
                            </ul>
                        </div>
                    </div>
                    <div className="card">
                        <div className="circle">
                            2
                        </div>
                        <div className="card-ava">
                            <img width="120" height="120" src="https://cdn.animaapp.com/projects/63aaf7e2426e9824f0350c11/releases/63aaf8f2426e9824f0350c13/img/avatar-placeholder-99@2x.png" alt="" />
                        </div>
                        <div className="name">
                            <h2 className="name">DigiLab</h2>
                            <ul className="val">
                                <li className="sales">Total Sales:</li>
                                <li className="cost">34.53 ETH</li>
                            </ul>
                        </div>
                    </div>
                    <div className="card">
                        <div className="circle">
                            3
                        </div>
                        <div className="card-ava">
                            <img width="120" height="120" src="https://cdn.animaapp.com/projects/63aaf7e2426e9824f0350c11/releases/63aaf8f2426e9824f0350c13/img/avatar-placeholder-100@2x.png" alt="" />
                        </div>
                        <div className="name">
                            <h2 className="name">GravityOne</h2>
                            <ul className="val">
                                <li className="sales">Total Sales:</li>
                                <li className="cost">34.53 ETH</li>
                            </ul>
                        </div>
                    </div>

                    <div className="card">
                        <div className="circle">
                            4
                        </div>
                        <div className="card-ava">
                            <img width="120" height="120" src="https://cdn.animaapp.com/projects/63aaf7e2426e9824f0350c11/releases/63aaf8f2426e9824f0350c13/img/avatar-placeholder-101@2x.png" alt="" />
                        </div>
                        <div className="name">
                            <h2 className="name">Juanie</h2>
                            <ul className="val">
                                <li className="sales">Total Sales:</li>
                                <li className="cost">34.53 ETH</li>
                            </ul>
                        </div>
                    </div>
                    <div className="card">
                        <div className="circle">
                            5
                        </div>
                        <div className="card-ava">
                            <img width="120" height="120" src="https://cdn.animaapp.com/projects/63aaf7e2426e9824f0350c11/releases/63aaf8f2426e9824f0350c13/img/avatar-placeholder-102@2x.png" alt="" />
                        </div>
                        <div className="name">
                            <h2 className="name">BlueWhale</h2>
                            <ul className="val">
                                <li className="sales">Total Sales:</li>
                                <li className="cost">34.53 ETH</li>
                            </ul>
                        </div>
                    </div>
                    <div className="card">
                        <div className="circle">
                            6
                        </div>
                        <div className="card-ava">
                            <img width="120" height="120" src="https://cdn.animaapp.com/projects/63aaf7e2426e9824f0350c11/releases/63aaf8f2426e9824f0350c13/img/avatar-placeholder-1@2x.png" alt="" />
                        </div>
                        <div className="name">
                            <h2 className="name">Mr Fox</h2>
                            <ul className="val">
                                <li className="sales">Total Sales:</li>
                                <li className="cost">34.53 ETH</li>
                            </ul>
                        </div>
                    </div>
                    <div className="card_display">
                        <div className="card">
                            <div className="circle">
                                7
                            </div>
                            <div className="card-ava">
                                <img width="120" height="120" src="https://cdn.animaapp.com/projects/63aaf7e2426e9824f0350c11/releases/63aaf8f2426e9824f0350c13/img/avatar-placeholder-103@2x.png" alt="" />
                            </div>
                            <div className="name">
                                <h2 className="name">Shroomie</h2>
                                <ul className="val">
                                    <li className="sales">Total Sales:</li>
                                    <li className="cost">34.53 ETH</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="card_display">
                        <div className="card">
                            <div className="circle">
                                8
                            </div>
                            <div className="card-ava">
                                <img width="120" height="120" src="https://cdn.animaapp.com/projects/63aaf7e2426e9824f0350c11/releases/63aaf8f2426e9824f0350c13/img/avatar-placeholder-104@2x.png" alt="" />
                            </div>
                            <div className="name">
                                <h2 className="name">Robotica</h2>
                                <ul className="val">
                                    <li className="sales">Total Sales:</li>
                                    <li className="cost">34.53 ETH</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="card_display">
                        <div className="card">
                            <div className="circle">
                                9
                            </div>
                            <div className="card-ava">
                                <img width="120" height="120" src="https://cdn.animaapp.com/projects/63aaf7e2426e9824f0350c11/releases/63aaf8f2426e9824f0350c13/img/avatar-placeholder-105@2x.png" alt="" />
                            </div>
                            <div className="name">
                                <h2 className="name">RustyRobot</h2>
                                <ul className="val">
                                    <li className="sales">Total Sales:</li>
                                    <li className="cost">34.53 ETH</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="card_display">
                        <div className="card">
                            <div className="circle">
                                10
                            </div>
                            <div className="card-ava">
                                <img width="120" height="120" src="https://cdn.animaapp.com/projects/63aaf7e2426e9824f0350c11/releases/63aaf8f2426e9824f0350c13/img/avatar-placeholder-106@2x.png" alt="" />
                            </div>
                            <div className="name">
                                <h2 className="name">Animakid</h2>
                                <ul className="val">
                                    <li className="sales">Total Sales:</li>
                                    <li className="cost">34.53 ETH</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="card_display">
                        <div className="card">
                            <div className="circle">
                                11
                            </div>
                            <div className="card-ava">
                                <img width="120" height="120" src="https://cdn.animaapp.com/projects/63aaf7e2426e9824f0350c11/releases/63aaf8f2426e9824f0350c13/img/avatar-placeholder-107@2x.png" alt="" />
                            </div>
                            <div className="name">
                                <h2 className="name">Dotgu</h2>
                                <ul className="val">
                                    <li className="sales">Total Sales:</li>
                                    <li className="cost">34.53 ETH</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="card_display">
                        <div className="card">
                            <div className="circle">
                                12
                            </div>
                            <div className="card-ava">
                                <img width="120" height="120" src="https://cdn.animaapp.com/projects/63aaf7e2426e9824f0350c11/releases/63aaf8f2426e9824f0350c13/img/avatar-placeholder-108@2x.png" alt="" />
                            </div>
                            <div className="name">
                                <h2 className="name">Ghiblier</h2>
                                <ul className="val">
                                    <li className="sales">Total Sales:</li>
                                    <li className="cost">34.53 ETH</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>


            </div>

        </div>
    );
};
export default HomePage;