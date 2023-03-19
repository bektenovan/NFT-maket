import React from "react";
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-info">
                <div className="marketplace">
                    <div className="nft-logo">
                        <img src="https://cdn.animaapp.com/projects/63aaf7e2426e9824f0350c11/releases/63aaf8f2426e9824f0350c13/img/storefront-3@2x.svg" alt="" />
                        <h4>NFT Marketplace</h4>
                    </div>
                    <div>NFT marketplace UI created with Anima for Figma.</div>
                    <div>Join our community</div>
                    <div className="icons">
                        <a href="">
                            <img src="https://cdn.animaapp.com/projects/63aaf7e2426e9824f0350c11/releases/63aaf8f2426e9824f0350c13/img/discordlogo-1@2x.svg" alt="" />
                        </a>
                        <a href="">
                            <img src="https://cdn.animaapp.com/projects/63aaf7e2426e9824f0350c11/releases/63aaf8f2426e9824f0350c13/img/youtubelogo-1@2x.svg" alt="" />
                        </a>
                        <a href="">
                            <img src="https://cdn.animaapp.com/projects/63aaf7e2426e9824f0350c11/releases/63aaf8f2426e9824f0350c13/img/twitterlogo-1@2x.svg" alt="" />
                        </a>
                        <a href="">
                            <img src="https://cdn.animaapp.com/projects/63aaf7e2426e9824f0350c11/releases/63aaf8f2426e9824f0350c13/img/instagramlogo-1@2x.svg" alt="" />
                        </a>
                    </div>
                </div>
                <div className="explore">
                    <h4>Explore</h4>
                    <div>Marketplace</div>
                    <div>Rankings</div>
                    <div>Connect a wallet</div>
                </div>
                <div className="join-week">
                    <h4>Join our weekly digest</h4>
                    <div className="join-text">Get exclusive promotions & updates straight to your inbox.</div>
                    <div className="subcribe">
                        <input type="text" placeholder="Enter your email here" />
                        <a href="">
                            <div className="btn-sub">
                                <img src="https://cdn.animaapp.com/projects/63aaf7e2426e9824f0350c11/releases/63aaf8f2426e9824f0350c13/img/envelopesimple-1@2x.svg" alt="" />
                                <Link to="/signUp">  <div className="sub-text">Subscribe</div></Link>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
            <div className="crosline">
                <img src="https://cdn.animaapp.com/projects/63aaf7e2426e9824f0350c11/releases/63aaf8f2426e9824f0350c13/img/divider-1@1x.svg" alt="" />
                <p className="line-text">Ⓒ NFT Market. Use this template freely.</p>
            </div>
        </div>
    )
}
export default Footer;