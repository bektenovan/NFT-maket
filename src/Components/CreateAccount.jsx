import React from "react";

const CreateAccount = () => {
    return (
        <div className="create">
            <div className="create-img">
                <img src="https://cdn.animaapp.com/projects/63aaf7e2426e9824f0350c11/releases/63aaf8f2426e9824f0350c13/img/image-placeholder-85@1x.png" alt="" />
            </div>
            <div className="create-form">
                <div className="create-headline">
                    <h3>Create Account</h3>
                    <div className="create-p">Welcome! enter your details and start creating, collecting and selling NFTs.</div>
                </div>
                <div className="forms">
                    <div className="type-forms">
                        <div className="type-form">
                            <img src="https://cdn.animaapp.com/projects/63aaf7e2426e9824f0350c11/releases/63aaf8f2426e9824f0350c13/img/user-4@2x.svg" alt="" />
                            <input type="text" placeholder="Username" name="" id="" />
                        </div>
                    </div>
                    <div className="type-forms">
                        <div className="type-form">
                            <img src="https://cdn.animaapp.com/projects/63aaf7e2426e9824f0350c11/releases/63aaf8f2426e9824f0350c13/img/envelopesimple-4@2x.svg" alt="" />
                            <input type="text" placeholder="Email Address" name="" id="" />
                        </div>
                    </div>
                    <div className="type-forms">
                        <div className="type-form">
                            <img src="https://cdn.animaapp.com/projects/63aaf7e2426e9824f0350c11/releases/63aaf8f2426e9824f0350c13/img/lockkey@2x.svg" alt="" />
                            <input type="text" placeholder="Password" name="" id="" />
                        </div>
                    </div>
                    <div className="type-forms">
                        <div className="type-form">
                            <img src="https://cdn.animaapp.com/projects/63aaf7e2426e9824f0350c11/releases/63aaf8f2426e9824f0350c13/img/lockkey@2x.svg" alt="" />
                            <input type="text" placeholder="Confirm Password" name="" id="" />
                        </div>
                    </div>
                    <button className="create-btn">
                            Create account
                    </button>
                </div>
            </div>
        </div>
    )
}
export default CreateAccount;