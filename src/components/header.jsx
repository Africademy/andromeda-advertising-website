import  React, {Component} from "react";

class Header extends Component {
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
                <button className="hero__header__btn">Login</button>
            </header>
        )
    }
}

export default Header;