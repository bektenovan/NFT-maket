import React from "react";
import img from '../img/num.png'
import paint from '../img/paint.png'
import music from '../img/music.png'
import monkey from '../img/monkey.png'
import photo from '../img/photo.png'
import video from '../img/video.png'
import stick from '../img/stick.png'
import ball from '../img/ball.png'
import planet from '../img/planet.png'
import mashroom from '../img/mashroom.png'
import { Link } from 'react-router-dom';

const HomePage = () => {
    return (
        <div >
            <div className="discover">
                <div className="discover_text">
                    <h1>Discover <br /> Digital Art & <br />Collect NFTS</h1>
                    <p>Nft Marketplace Ui Created With Anima For <br /> Figma. Collect, Buy And Sell Art From More <br /> Than 20k Nft Artists.</p>
                    <Link to="/signUp"><button className="btn-start"> <img src="https://cdn.animaapp.com/projects/63aaf7e2426e9824f0350c11/releases/63aaf8f2426e9824f0350c13/img/user@2x.svg" alt="" /> Get started</button></Link>

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
                    <Link to="/rankings"> <button> <img src="https://cdn.animaapp.com/projects/63aaf7e2426e9824f0350c11/releases/63aaf8f2426e9824f0350c13/img/rocketlaunch-1@2x.svg" alt="" /> View Rankings</button></Link>   
                    </div>
                </div>

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

                <div className="browse">
                    <div className="browse-text">
                        <h1>Browse Categories</h1>
                    </div>
                    <div className="cards-browse">
                        <div class="card-browse" >
                            <img src={paint} alt="" />
                            <div class="card-body">
                                <p>Art</p>
                            </div>
                        </div>
                        <div class="card-browse" >
                            <img src={monkey} alt="" />
                            <div class="card-body">
                                <p>Collectibles</p>
                            </div>
                        </div>
                        <div class="card-browse" >
                            <img src={music} alt="" />
                            <div class="card-body">
                                <p>Music</p>
                            </div>
                        </div>
                        <div class="card-browse" >
                            <img src={photo} alt="" />
                            <div class="card-body">
                                <p>Photography</p>
                            </div>
                        </div>
                        <div class="card-browse" >
                            <img src={video} alt="" />
                            <div class="card-body">
                                <p>Video</p>
                            </div>
                        </div>
                        <div class="card-browse" >
                            <img src={stick} alt="" />
                            <div class="card-body">
                                <p>Utility</p>
                            </div>
                        </div>
                        <div class="card-browse" >
                            <img src={ball} alt="" />
                            <div class="card-body">
                                <p>Sport</p>
                            </div>
                        </div>
                        <div class="card-browse" >
                            <img src={planet} alt="" />
                            <div class="card-body">
                                <p>Virtual Worlds</p>
                            </div>
                        </div>
                    </div>

                    <div className="more-nfts">
                        <div className="more-text">
                            <h1>Discover More NFTs</h1>
                            <div className="more-btn">
                                <p>Explore new trending NFTs</p>
                                <button> <img src="https://cdn.animaapp.com/projects/63aaf7e2426e9824f0350c11/releases/63aaf8f2426e9824f0350c13/img/eye@2x.svg" alt="" /> View Rankings</button>
                            </div>
                        </div>
                        <div className="more-cards">
                            <div class="more-card" >
                                <img width="330px" height="296px" src="https://cdn.animaapp.com/projects/63aaf7e2426e9824f0350c11/releases/63aaf8f2426e9824f0350c13/img/image-placeholder-62@2x.png" alt="" />
                                <div class="more-body">
                                    <h3>Distant Galaxy</h3>
                                    <ul className="more__ava">
                                        <li><img width='24' height='24' class="scale" src="https://cdn.animaapp.com/projects/63aaf7e2426e9824f0350c11/releases/63aaf8f2426e9824f0350c13/img/avatar-placeholder-59@2x.png" alt="" /></li>
                                        <li className="ava">MoonDancer</li>
                                    </ul>
                                    <ul className="more-info">
                                        <li>Price</li>
                                        <li>Highest Bid</li>
                                    </ul>
                                    <ul className="eth">
                                        <li>1.63 ETH</li>
                                        <li>0.33 wETH</li>
                                    </ul>
                                </div>
                            </div>
                            <div class="more-card" >
                                <img width="330px" height="296px" src="https://cdn.animaapp.com/projects/63aaf7e2426e9824f0350c11/releases/63aaf8f2426e9824f0350c13/img/image-placeholder-63@2x.png" alt="" />
                                <div class="more-body">
                                    <h3>Life On Edena</h3>
                                    <ul className="more__ava">
                                        <li><img width='24' height='24' class="scale" src="https://cdn.animaapp.com/projects/63aaf7e2426e9824f0350c11/releases/63aaf8f2426e9824f0350c13/img/avatar-placeholder-20@2x.png" alt="" /></li>
                                        <li className="ava">NebulaKid</li>
                                    </ul>
                                    <ul className="more-info">
                                        <li>Price</li>
                                        <li>Highest Bid</li>
                                    </ul>
                                    <ul className="eth">
                                        <li>1.63 ETH</li>
                                        <li>0.33 wETH</li>
                                    </ul>
                                </div>
                            </div>
                            <div class="more-card" >
                                <img width="330px" height="296px" src="https://cdn.animaapp.com/projects/63aaf7e2426e9824f0350c11/releases/63aaf8f2426e9824f0350c13/img/image-placeholder-64@2x.png" alt="" />
                                <div class="more-body">
                                    <h3>AstroFiction</h3>
                                    <ul className="more__ava">
                                        <li><img width='24' height='24' class="scale" src="https://cdn.animaapp.com/projects/63aaf7e2426e9824f0350c11/releases/63aaf8f2426e9824f0350c13/img/avatar-placeholder-57@2x.png" alt="" /></li>
                                        <li className="ava">Spaceone</li>
                                    </ul>
                                    <ul className="more-info">
                                        <li>Price</li>
                                        <li>Highest Bid</li>
                                    </ul>
                                    <ul className="eth">
                                        <li>1.63 ETH</li>
                                        <li>0.33 wETH</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="nft-higlight">
                    <div className="nft-info">
                        <div className="nft-frame">
                            <div className="nft-arts">
                                <div className="artist-card">
                                    <div className="asset">
                                        <img width="24px" src="https://cdn.animaapp.com/projects/63aaf7e2426e9824f0350c11/releases/63aaf8f2426e9824f0350c13/img/avatar-placeholder-2@2x.png" alt="" />
                                    </div>
                                    <div className="name-arts">
                                        Shroomie
                                    </div>
                                </div>

                                <div className="magic-mashrooms">Magic Mashrooms</div>
                                <a href="">
                                    <div className="button-nft">
                                        <img src="https://cdn.animaapp.com/projects/63aaf7e2426e9824f0350c11/releases/63aaf8f2426e9824f0350c13/img/eye@2x.svg" alt="" />
                                      <Link to="/orbitians">  <div className="see-nft">See NFT</div></Link>
                                    </div>
                                </a>
                            </div>

                            <div className="auction-timer">
                                <div className="auction-end">Auction ends in:</div>
                                <div className="timer">
                                    <div className="hours">
                                        <div class="hour-1">-3</div>
                                        <div className="hours">Hours</div>
                                    </div>
                                    <div className="colon">:</div>
                                    <div className="minutes">
                                        <div className="minutes">-45</div>
                                        <div className="minutes">Minutes</div>
                                    </div>
                                    <div className="colon">:</div>
                                    <div className="seconds">
                                        <div className="second-1">-21</div>
                                        <div className="sec-name">Seconds</div>
                                    </div>
                                </div>
                            </div>


                        </div>
                    </div>
                </div>

                <div className="howitworks">
                    <div className="section-headline">
                        <div className="section__text">
                            How It Works
                        </div>
                        <p className="find">Find out how to get started</p>
                    </div>
                    <div className="cards-row">
                        <div className="info-card">
                            <img className="icon" src="https://cdn.animaapp.com/projects/63aaf7e2426e9824f0350c11/releases/63aaf8f2426e9824f0350c13/img/icon@2x.svg" alt="" />
                            <div className="card-details">
                                <div className="setup">Setup Your wallet</div>
                                <p className="p-text">Set up your wallet of choice. Connect it to the NFT market by clicking the wallet icon in the top right corner.</p>
                            </div>
                        </div>
                        <div className="info-card">
                            <img className="icon" src="https://cdn.animaapp.com/projects/63aaf7e2426e9824f0350c11/releases/63aaf8f2426e9824f0350c13/img/icon@2x.svg" alt="" />
                            <div className="card-details">
                                <div className="setup">Create Collection</div>
                                <p className="p-text">Upload your work and setup your collection. Add a description, social links and floor price.</p>
                            </div>
                        </div>
                        <div className="info-card">
                            <img className="icon" src="https://cdn.animaapp.com/projects/63aaf7e2426e9824f0350c11/releases/63aaf8f2426e9824f0350c13/img/icon@2x.svg" alt="" />
                            <div className="card-details">
                                <div className="setup">Start Earning</div>
                                <p className="p-text">Choose between auctions and fixed-price listings. Start earning by selling your NFTs or trading others.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="digest">
                    <div className="subsribe-digest">
                        <img width="425px" src="https://cdn.animaapp.com/projects/63aaf7e2426e9824f0350c11/releases/63aaf8f2426e9824f0350c13/img/photo-1@2x.png" alt="" />
                        <div className="frame-block">
                            <div className="headline-digest">
                                <div className="join">Join Our Weekly Digest</div>
                                <p className="get">Get Exclusive Promotions & Updates Straight To Your Inbox.</p>
                            </div>
                            <div className="subcribe">
                                <input type="text" placeholder="Enter your email here" />
                                <a href="">
                                    <div className="btn-sub">
                                        <img src="https://cdn.animaapp.com/projects/63aaf7e2426e9824f0350c11/releases/63aaf8f2426e9824f0350c13/img/envelopesimple-1@2x.svg" alt="" />
                                       <Link to="/signUp"> <div className="sub-text">Subscribe</div></Link>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};
export default HomePage;