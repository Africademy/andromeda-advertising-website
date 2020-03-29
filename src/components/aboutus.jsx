import React, { Component } from "react";
import aboutUs1 from "../images/aboutus-1.jpeg";
import aboutUs2 from "../images/aboutus-2.jpeg";
import aboutUs3 from "../images/aboutus-3.jpeg";
import { Controller, Scene } from "react-scrollmagic";
import { Tween } from "react-gsap";

class AboutUs extends Component {
  render() {
    return (
      <main className="aboutus">
        <article className="aboutus__element">
          <Controller>
            <Scene
              indicators={false}
              duration={600}
              triggerElement="#trigger-first-image"
              triggerHook="onCenter"
              offset={100}
            >
              <Tween from={{ y: 100 }}>
                <section className="aboutus__element__image">
                  <img id="" src={aboutUs1} alt="image1" />
                </section>
              </Tween>
            </Scene>
          </Controller>
          <section className="aboutus__element__content">
            <h2 id="trigger" className="aboutus__element__content__title">
              Trusted by content creators across the world
            </h2>
            <p
              id="trigger-second-image"
              className="aboutus__element__content__description"
            >
              According to statistics, over 80% of creators and creative
              companies across the world decided to trust our service
            </p>
            <button className="aboutus__element__content__btn">
              Get Started
              <span>
                <svg
                  width={30}
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>arrow right</title>
                  <g fill="none">
                    <path
                      d="M6 12h12.5m0 0l-6-6m6 6l-6 6"
                      stroke="#fff"
                      strokeLinecap="round"
                      strokeWidth="2"
                    />
                  </g>
                </svg>
              </span>
            </button>
          </section>
        </article>
        <article className="aboutus__element">
          <Controller>
            <Scene
              indicators={false}
              duration={800}
              offset={300}
              triggerHook="onCenter"
              triggerElement="#trigger-second-image"
            >
              <Tween from={{ y: 100 }}>
                <section className="aboutus__element__image--second">
                  <img src={aboutUs2} alt="image1" />
                </section>
              </Tween>
            </Scene>
          </Controller>
          <section className="aboutus__element__content">
            <h2 className="aboutus__element__content__title">
              For Advertisers
            </h2>
            <p className="aboutus__element__content__description">
              According to statistics, over 80% of creators and creative
              companies across the world decided to trust our service
            </p>
            <button
              id="trigger-third-image"
              className="aboutus__element__content__btn--second"
            >
              Create campaign
              <span>
                <svg
                  width={30}
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>arrow right</title>
                  <g fill="none">
                    <path
                      d="M6 12h12.5m0 0l-6-6m6 6l-6 6"
                      stroke="#fff"
                      strokeLinecap="round"
                      strokeWidth="2"
                    />
                  </g>
                </svg>
              </span>
            </button>
          </section>
        </article>

        <article className="aboutus__element">
          <Controller>
            <Scene
              indicators={false}
              triggerHook="onCenter"
              triggerElement="#trigger-third-image"
              duration={800}
            >
              <Tween from={{ y: 100 }}>
                <section className="aboutus__element__image--third">
                  <img src={aboutUs3} alt="image1" />
                </section>
              </Tween>
            </Scene>
          </Controller>
          <section className="aboutus__element__content">
            <h2 className="aboutus__element__content__title">
              How To Monetize
              <br /> Your Site
            </h2>
            <p className="aboutus__element__content__description">
              According to statistics, over 80% of creators and creative
              companies across the world decided to trust our service
            </p>
            <button className="aboutus__element__content__btn">
              Get started
              <span>
                <svg
                  width={30}
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>arrow right</title>
                  <g fill="none">
                    <path
                      d="M6 12h12.5m0 0l-6-6m6 6l-6 6"
                      stroke="#fff"
                      strokeLinecap="round"
                      strokeWidth="2"
                    />
                  </g>
                </svg>
              </span>
            </button>
          </section>
        </article>
      </main>
    );
  }
}

export default AboutUs;
