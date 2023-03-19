import React from "react";
import space from "../img/space.png"

const Orbitians = () => {
    return (

        <div className="orbitian-section">
            <div>
                <img width="100%" src={space} alt="" />
            </div>
            <div className="main">

                <div className="orbitian-text">
                    <h1>The Orbitians</h1>
                    <p>Minted on Sep 30, 2022</p>
                    <h5>Created By</h5>
                    <ul className="logos">
                        <li>                <img src="https://cdn.animaapp.com/projects/63aaf7e2426e9824f0350c11/releases/63aaf8f2426e9824f0350c13/img/avatar-placeholder-43@2x.png" alt="" />
                        </li>
                        <li className="orb">Orbitian</li>
                    </ul>

                    <h5>Description</h5>
                    <div className="description">
                        The Orbitians
                        is a collection of 10,000 unique NFTs on the Ethereum blockchain,<br />There are all sorts of beings in the NFT Universe. The most advanced and friendly of the bunch are Orbitians. <br />They live in a metal space machines, high up in the sky and only have one foot on Earth.<br />
                        These Orbitians are a peaceful race, but they have been at war with a group of invaders for many generations. The invaders are called Upside-Downs, because of their inverted bodies that live on the ground, yet do not know any other way to be. Upside-Downs believe that they will be able to win this war if they could only get an eye into Orbitian territory, so they've taken to make human beings their target.
                    </div>
                    <div className="details">
                        <h5>Details</h5>
                        <div className="site"><img src="https://cdn.animaapp.com/projects/63aaf7e2426e9824f0350c11/releases/63aaf8f2426e9824f0350c13/img/globe-3@2x.svg" alt="" />View on Etherscan</div>
                        <div className="site"><img src="https://cdn.animaapp.com/projects/63aaf7e2426e9824f0350c11/releases/63aaf8f2426e9824f0350c13/img/globe-3@2x.svg" alt="" />View Original</div>
                    </div>
                    <div className="tags">
                        <h5>Tags</h5>
                        <div className="tags-btn">
                            <button>Animation</button>
                            <button>illustration</button>
                            <button>MOON</button>
                            <button>Moon</button>
                        </div>
                    </div>

                </div>

                <div className="timer">
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
                        <button className="place-btn">Place bit</button>
                    </div>
                </div>

            </div>
           

        </div>

    )
}
export default Orbitians;