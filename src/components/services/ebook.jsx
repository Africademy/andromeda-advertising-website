import React from "react";

class EbookAds extends React.Component {
  render() {
    return (
      <main className="services__list__item">
        <svg height={100} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 310.84 282.75">
          <g id="Warstwa_2" dataName="Warstwa 2">
            <g id="base">
              <rect
                x="36.8"
                y="-17.06"
                width="208.47"
                height="282.07"
                rx="31.05"
                transform="translate(17.06 265.02) rotate(-90)"
              />
              <rect
                x="75.5"
                y="245.73"
                width="131.07"
                height="37.02"
                rx="18.51"
              />
            </g>
            <g id="details">
              <rect
                x="88.37"
                y="184.51"
                width="105.33"
                height="23.44"
                rx="11.72"
                fill="#fff"
              />
            </g>
            <g id="louder-ebook">
              <path id='louder-ebook__outline'
                d="M238.11,114.47a9.94,9.94,0,0,1-6.75-2.62c-.27-.25-15.47-13.76-36.54-13.76a51.28,51.28,0,0,0-16.24,2.68,9.81,9.81,0,0,1-3.16.51,10,10,0,0,1-10-10V13.19a10,10,0,0,1,6.83-9.48A71.31,71.31,0,0,1,194.82,0c19.52,0,35,8.18,43.31,13.83C246.46,8.18,261.91,0,281.43,0A71.26,71.26,0,0,1,304,3.71a10,10,0,0,1,6.84,9.48V91.28a10,10,0,0,1-10,10,9.86,9.86,0,0,1-3.16-.51,51.23,51.23,0,0,0-16.24-2.68c-21.15,0-36.39,13.62-36.54,13.76A10.08,10.08,0,0,1,238.11,114.47Z"
                fill="#fff"
              />
              <path id='louder-ebook__icon' d="M238.13,26.39s-27.07-25.08-62.71-13.2V91.28c35.64-11.88,62.71,13.2,62.71,13.2s27.07-25.08,62.71-13.2V13.19C265.2,1.31,238.13,26.39,238.13,26.39Z" />
            </g>
          </g>
        </svg>
        <h3 className="services__list__item__title">E-book ads</h3>
        <p className="services__list__item__description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam semper
          dui eget sem rhoncus, nec rutrum tortor aliquam.
        </p>
        <button className="services__list__item__btn">
          Explore more
          <span>
            <svg
              width={20}
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>arrow right</title>
              <g fill="none">
                <path
                  d="M6 12h12.5m0 0l-6-6m6 6l-6 6"
                  strokeLinecap="round"
                  strokeWidth="2"
                />
              </g>
            </svg>
          </span>
        </button>
      </main>
    );
  }
}

export default EbookAds;
