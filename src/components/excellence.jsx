import React, { Component } from "react";
import anime from "animejs/lib/anime.es";

class Excellence extends Component {
  componentDidMount() {
    const tl = anime.timeline({
      easing: "cubicBezier(.5, .05, .1, .3)",
      duration: 1200,
    });
    tl.add({
      targets: ".excellence__numbers__last-column__navy__amount__value",
      innerHTML: [0, 255],
      round: 1,
      duration: 500,
    }).add({
      targets: ".excellence__numbers__last-column__navy__amount__tag",
      translateY: ["20px", 0],
      opacity: [0, 1],
      delay: 100,
      duration: 700,
    });
  }

  render() {
    return (
      <main className="excellence">
        <h2 className="excellence__title">
          Just take a look
          <br />
          At our excellence
        </h2>
        <p className="excellence__description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam semper
          dui eget sem rhoncus, nec rutrum tortor aliquam.
        </p>
        <section className="excellence__numbers">
          <div className="excellence__numbers__first-column">
            <div className="excellence__numbers__first-column__purple">
              <div className="excellence__numbers__first-column__purple__main">
                <h3 className="excellence__numbers__first-column__purple__main__title">
                  Happy Customer
                </h3>
                <p className="excellence__numbers__first-column__purple__main__subtitle">
                  Interest profile
                </p>
              </div>
              <h3 className="excellence__numbers__first-column__purple__value">
                1 B
              </h3>
            </div>
            <div className="excellence__numbers__first-column__blue">
              <div className="excellence__numbers__first-column__blue__main">
                <h3 className="excellence__numbers__first-column__blue__main__title">
                  Success
                </h3>
                <p className="excellence__numbers__first-column__blue__main__subtitle">
                  Leads using demographics
                </p>
              </div>
              <h3 className="excellence__numbers__first-column__blue__value">
                200%
              </h3>
            </div>
          </div>
          <div className="excellence__numbers__last-column">
            <div className="excellence__numbers__last-column__navy">
              <div className="excellence__numbers__last-column__navy__main">
                <h3 className="excellence__numbers__last-column__navy__main__title">
                  Recommendation
                </h3>
                <p className="excellence__numbers__last-column__navy__main__subtitle">
                  Per month
                </p>
              </div>
              <div className="excellence__numbers__last-column__navy__amount">
                <h3 className="excellence__numbers__last-column__navy__amount__value">
                  {225}
                </h3>
                <h2 className="excellence__numbers__last-column__navy__amount__tag">
                  B
                </h2>
              </div>
            </div>
            <div className="excellence__numbers__last-column__red">
              <div className="excellence__numbers__last-column__red__main">
                <h3 className="excellence__numbers__last-column__red__main__title">
                  More app installed
                </h3>
                <p className="excellence__numbers__last-column__red__main__subtitle">
                  Great achievement
                </p>
              </div>
              <h3 className="excellence__numbers__last-column__red__value">
                {50}k
              </h3>
            </div>
          </div>
        </section>

        <section className="excellence__action">
          <h2 className="excellence__action__title">
            Your growth is Our growth
          </h2>
          <p className="excellence__action__description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam semper
            dui eget sem rhoncus, nec rutrum tortor aliquam.
          </p>
          <button className="excellence__action__btn">
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
      </main>
    );
  }
}

export default Excellence;
