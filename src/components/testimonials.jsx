import React from "react";
import { Controller, Scene } from "react-scrollmagic";
import { Tween } from "react-gsap";
import gsap, { CSSPlugin } from "gsap";
import testimonialsImage from "../images/testimonials1.jpeg";
import opinions from "../data/testimonials";
gsap.registerPlugin(CSSPlugin);

class Testimonials extends React.Component {
  state = {
    animation: false,
  };
  componentDidMount() {
    const slide = document.querySelectorAll(
      ".testimonials__element__content__slideshow__slide"
    );
    const { width } = slide[0].getBoundingClientRect();
    gsap.to(slide, { translateX: -width, duration: 2, delay: 1.5 });
    gsap.to(slide, { translateX: 0, duration: 2, delay: 5 });
  }

  render() {
    console.log(opinions);
    return (
      <main className="testimonials">
        <article className="testimonials__element">
          <section className="testimonials__element__image">
            <Controller>
              <Scene
                indicators={false}
                triggerElement="#trigger-testimonials"
                troggerHook="onEnter"
                duration={1200}
              >
                <Tween from={{ scale: 1.5 }}>
                  <img src={testimonialsImage} alt="image1" />
                </Tween>
              </Scene>
            </Controller>
          </section>
          <section className="testimonials__element__content">
            <h2 className="testimonials__element__content__title">
              Our Clients Testimonials Excellence
            </h2>
            <svg
              width={100}
              viewBox="0 0 48 48"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>ic format quote 48px</title>
              <g fill="#000000">
                <path d="M12 34h6l4-8V14H10v12h6zm16 0h6l4-8V14H26v12h6z" />
              </g>
            </svg>
            <section className="testimonials__element__content__slideshow">
              {opinions.map((opinion) => {
                return (
                  <article className="testimonials__element__content__slideshow__slide">
                    <p className="testimonials__element__content__slideshow__slide__description">
                      {opinion.content}
                    </p>
                    <section className="testimonials__element__content__slideshow__slide__author">
                      <h3 className="testimonials__element__content__slideshow__slide__author__name">
                        {opinion.author.name}
                      </h3>
                      <p className="testimonials__element__content__slideshow__slide__author__position">
                        {opinion.author.position}, {opinion.author.company}
                      </p>
                    </section>
                  </article>
                );
              })}
            </section>
          </section>
        </article>
      </main>
    );
  }
}

export default Testimonials;
