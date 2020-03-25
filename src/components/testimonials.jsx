import React from "react";
import testimonialsImage from "../images/testimonials1.jpeg";

class Testimonials extends React.Component {
    render() {
        return (
            <main className="testimonials">
            <article className="testimonials__element">
                <section className="testimonials__element__image">
                    <img src={testimonialsImage} alt="image1"/>
                </section>
                <section className="testimonials__element__content">
                    <h2 className="testimonials__element__content__title">Our Clients Testimonials Excellence</h2>
                    <svg width={100} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                        <title>ic format quote 48px</title>
                        <g fill="#000000">
                            <path d="M12 34h6l4-8V14H10v12h6zm16 0h6l4-8V14H26v12h6z"/>
                        </g>
                    </svg>
                    <p className="testimonials__element__content__description">According to statistics, over 80% of creators and creative companies across the world decided to trust our service</p>
                    <section className="testimonials__element__content__author">
                    <h3 className="testimonials__element__content__author__name">John Smith</h3>
                    <p className="testimonials__element__content__author__position">CEO, Company</p>
                    </section>
                </section>
            </article>
            </main>
        )
    }
}

export default Testimonials;