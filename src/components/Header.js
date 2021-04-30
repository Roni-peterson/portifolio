import React from "react";
import Typed from "react-typed";



const Header = () => {
    return (
        <div className="header-wraper">
            <div className="main-info">
                <h1> Desenvolvimento Web e Mobile </h1>
                <Typed
                    className="typed-text"
                    strings={[" Desenvolvimento Web", "Designer Web","Desenvolvimento Mobile"]}
                    typeSpeed={40}
                    backSpeed={60}
                    loop={Infinity}
                />
                <a href="a" className="btn-main-offer">contate-me</a>
            </div>
        </div>
    )
}

export default Header
