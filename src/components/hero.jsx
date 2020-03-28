import React, {Component} from "react";
import Header from "../components/header"
import heroImage from "../images/hero-image.jpeg"
import anime from "animejs/lib/anime.es";

class Hero extends Component {
    componentDidMount() {
        //anime main title
        anime({
            targets: ".hero__welcome__text__title",
            translateX: ["-200px", 0],
            opacity: [0, 1],
            duration: 1000,
            delay: 500,
            easing: "cubicBezier(.5, .05, .1, .3)",
        })
        //anime photo
        anime({
            targets: ".hero__welcome__image__anime",
            height: ["100%", "0%"],
            duration: 1000,
            easing: 'linear',
        })
        //anime main description
        anime({
            targets: ".hero__welcome__text__description",
            translateX: ["-150px", 0],
            opacity: [0, 1],
            duration: 800,
            delay: 1000,
            easing: "cubicBezier(.5, .05, .1, .3)",
        })
        //anime btn in main
        anime({
            targets: ".hero__welcome__text__btn",
            translateY: ["100px", 0],
            duration: 500,
            delay: 1600,
            easing: "cubicBezier(.5, .05, .1, .3)",
        })
    }

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
                        <div className="hero__welcome__image__anime"></div>
                        <img src={heroImage} alt="hero" />
                    </section>
                </section>
            </main>
        )
    }

}

export default Hero