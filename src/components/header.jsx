import  React, {Component} from "react";
import {Link} from "react-router-dom";

class Header extends Component {
    componentDidMount() {
        const header = document.querySelector(".hero__header");
        const loginBtn = document.querySelector(".hero__header__btn");
        window.addEventListener("scroll", () => {
            if(window.scrollY > 100) {
                header.classList.add("fillHeader")
                loginBtn.classList.add("changeBtn")
            } else {
                header.classList.remove("fillHeader")
                loginBtn.classList.remove("changeBtn")
            }
        })
    }

    render() {
        return (
            <header className="hero__header">
                <div className="hero__header__logo">
                    <h2 className="hero__header__logo__name">Andromeda</h2>
                </div>
                <nav className="hero__header__nav">
                    <button className="hero__header__nav__btn">
                        <li className="hero__header__nav__btn__item">Advertisers</li>
                    </button>
                    <button className="hero__header__nav__btn">
                        <li className="hero__header__nav__btn__item">Publishers</li>
                    </button>
                    <button className="hero__header__nav__btn">
                        <li className="hero__header__nav__btn__item">Company</li>
                    </button>
                    <button className="hero__header__nav__btn">
                        <li className="hero__header__nav__btn__item">Blog</li>
                    </button>
                    <button className="hero__header__nav__btn">
                        <li className="hero__header__nav__btn__item">Resources</li>
                    </button>
                    <button className="hero__header__nav__btn">
                        <li className="hero__header__nav__btn__item">Help</li>
                    </button>
                </nav>
                <button className="hero__header__burger">
                    <svg width={30} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <title>menu</title>
                        <g fill="none">
                            <path d="M3 5h18" stroke="#000000" strokeLinecap="round" strokeWidth="2"/>
                            <path d="M3 12h18" stroke="#000000" strokeLinecap="round" strokeWidth="2"/>
                            <path d="M3 19h18" stroke="#000000" strokeLinecap="round" strokeWidth="2"/>
                        </g>
                    </svg>
                </button>
                <Link to="/login">
                    <button className="hero__header__btn">Login</button>
                </Link>
            </header>
        )
    }
}

export default Header;