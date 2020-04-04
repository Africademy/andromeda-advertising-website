import React, { Component, createRef } from "react";
import BurgerIcon from "../components/btns/burgerIcon";
import ExitIcon from "../components/btns/exitMenu";
import { Link } from "react-router-dom";
import animejs from "animejs/lib/anime.es";

class Header extends Component {
  constructor() {
    super();
    this.state = {
      isMenuOpen: false,
      advertisers: false,
    };
    this.nav = createRef(null);
    this.dropdown = createRef(null);
  }

  componentDidMount() {
    const header = document.querySelector(".hero__header");
    const loginBtn = document.querySelector(".hero__header__btn");
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        header.classList.add("fillHeader");
        loginBtn.classList.add("changeBtn");
      } else {
        header.classList.remove("fillHeader");
        loginBtn.classList.remove("changeBtn");
      }
    });
  }
  handleMenu = () => {
    if (this.state.isMenuOpen === false) {
      animejs({
        targets: ".hero__header__nav-section",
        translateX: ["100vw", 0],
        easing: "linear",
        duration: 300,
      });
      this.setState({ isMenuOpen: !this.state.isMenuOpen });
    } else {
      animejs({
        targets: ".hero__header__nav-section",
        translateX: [0, "100vw"],
        easing: "linear",
        duration: 300,
      });
      this.setState({ isMenuOpen: !this.state.isMenuOpen });
    }
  };
  handleFocus = (e) => {
    if (window.innerWidth <= 500) {
      if (this.state.advertisersFocus === false) {
        this.dropdown.current.style.display = "block";
        this.setState({ [e.target.id]: !this.state.advertisersFocus });
      } else {
        this.dropdown.current.style.display = "none";
        this.setState({ [e.target.id]: !this.state.advertisersFocus });
      }
    }
  };

  render() {
    return (
      <header className="hero__header">
        <Link to="/">
          <button className="hero__header__logo">
            <h2 className="hero__header__logo__name">Andromeda</h2>
          </button>
        </Link>
        <section ref={this.nav} className="hero__header__nav-section">
          <nav className="hero__header__nav-section__nav">
            <button
              id="advertisers"
              onfocusin={{ color: "#ff0043" }}
              onFocus={true}
              className="hero__header__nav-section__nav__btn"
            >
              <Link to="/advertisers">
                <li className="hero__header__nav-section__nav__btn__item">
                  Advertisers
                </li>
              </Link>
              <ul
                ref={this.dropdown}
                className="hero__header__nav-section__nav__btn__item__dropdown"
              >
                <li>Our team</li>
                <li>Best advertisers</li>
                <li>Our recommendations</li>
              </ul>
            </button>
            <Link to="/publishers">
              <button className="hero__header__nav-section__nav__btn">
                <li className="hero__header__nav-section__nav__btn__item">
                  Publishers
                </li>
              </button>
            </Link>
            <Link to="/company">
              <button className="hero__header__nav-section__nav__btn">
                <li className="hero__header__nav-section__nav__btn__item">
                  Company
                </li>
              </button>
            </Link>
            <Link to="/blog">
              <button className="hero__header__nav-section__nav__btn">
                <li className="hero__header__nav-section__nav__btn__item">
                  Blog
                </li>
              </button>
            </Link>
            <Link to='/resources' >
            <button className="hero__header__nav-section__nav__btn">
              <li className="hero__header__nav-section__nav__btn__item">
                Resources
              </li>
            </button>
            </Link>
            <Link to="/help">
              <button className="hero__header__nav-section__nav__btn">
                <li className="hero__header__nav-section__nav__btn__item">
                  Help
                </li>
              </button>
            </Link>
          </nav>
          <Link to="/login">
            <button className="hero__header__btn">Login</button>
          </Link>
        </section>
        <button onClick={this.handleMenu} className="hero__header__burger">
          {this.state.isMenuOpen === false ? (
            <BurgerIcon isMenuOpen={this.state.isMenuOpen} />
          ) : (
            <ExitIcon isMenuOpen={this.state.isMenuOpen} />
          )}
        </button>
      </header>
    );
  }
}

export default Header;
