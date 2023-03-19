import React from "react";

const ConnectWallet = () =>{
    return(
        <div className="create">
        <div className="create-img">
            <img src="https://cdn.animaapp.com/projects/63aaf7e2426e9824f0350c11/releases/63aaf8f2426e9824f0350c13/img/image-placeholder-84@1x.png" alt="" />
        </div>
        <div className="create-form">
            <div className="connect-headline">
                <h1>Connect wallet</h1>
                <div className="create-p"> Choose a wallet you want to connect. <br/>There are several wallet providers.</div>
            </div>
            <div className="forms">
                <button><img className="forms-img" src="https://cdn.animaapp.com/projects/63aaf7e2426e9824f0350c11/releases/63aaf8f2426e9824f0350c13/img/metamask@2x.svg" alt="" />Metamask</button>
                <button><img className="forms-img" src="https://cdn.animaapp.com/projects/63aaf7e2426e9824f0350c11/releases/63aaf8f2426e9824f0350c13/img/walletconnect-1@2x.svg" alt="" />Wallet Connect</button>
                <button><img  className="forms-img"src="https://cdn.animaapp.com/projects/63aaf7e2426e9824f0350c11/releases/63aaf8f2426e9824f0350c13/img/coinbase-1@2x.svg" alt="" />Coinbase</button>
            </div> 
        </div>
    </div>
    )
}
export default ConnectWallet;