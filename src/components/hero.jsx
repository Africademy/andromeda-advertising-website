import React, {Component} from "react";
import Header from "../components/header"
import heroImage from "../images/hero-image.jpeg"
import anime from "animejs/lib/anime.es";

class Hero extends Component {
    render() {
        return (
            <main className="hero">
                <Header />

                <section className="hero__welcome">
                    <section className="hero__welcome__text">
                        <h1 className="hero__welcome__text__title">Advertising your brands</h1>
                        <p className="hero__welcome__text__description">Creativity without strategy is called art, <br/>
                        creative with strategy is called advertising</p>
                        <button className="hero__welcome__text__btn">Create campaign
                            <span>
                           <svg width={30} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
	<title>arrow right</title>
	<g fill="none">
		<path d="M6 12h12.5m0 0l-6-6m6 6l-6 6" stroke="#fff" strokeLinecap="round" strokeWidth="2"/>
	</g>
</svg>
                       </span>
                        </button>
                    </section>
                    <section className="hero__welcome__empty"></section>
                    <section className="hero__welcome__image">
                        <img src={heroImage} alt="hero-image" />
                    </section>
                </section>
            </main>
        )
    }

}

export default Hero