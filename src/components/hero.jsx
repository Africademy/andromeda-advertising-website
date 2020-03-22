import React, {Component} from "react";
import Header from "../components/header"
import heroImage from "../images/hero-image.jpeg"

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
                        <button className="hero__welcome__text__btn">Create campaign</button>
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