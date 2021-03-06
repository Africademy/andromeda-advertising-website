import React from "react";

class BanerAds extends React.Component {
  render() {
    return (
      <main className="services__list__item">
        <svg height={120} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 344.44 293.76">
          <g id="Warstwa_2" dataName="Warstwa 2">
            <g id="base">
              <rect
                x="36.8"
                y="-6.05"
                width="208.47"
                height="282.07"
                rx="31.05"
                transform="translate(6.05 276.03) rotate(-90)"
              />
              <rect
                x="75.5"
                y="256.74"
                width="131.07"
                height="37.02"
                rx="18.51"
              />
            </g>
            <g id="details">
              <rect
                x="33.8"
                y="183.8"
                width="105.33"
                height="23.44"
                rx="11.72"
                fill="#fff"
              />
              <rect
                x="33.8"
                y="142.22"
                width="80.77"
                height="23.44"
                rx="11.72"
                fill="#fff"
              />
            </g>
            <g id="louder-banner">
              <path id="louder-banner__outline"
                d="M234.94,163.44a36.18,36.18,0,0,1-22-7.38,19,19,0,0,1-3.14,2.61,19.52,19.52,0,0,1-27.1-5.32L164.35,126a19.53,19.53,0,0,1,16.2-30.42,18.19,18.19,0,0,1,1.95.1l77.36-75.15A19.53,19.53,0,0,1,295.58,8.64l45.55,67.79a19.53,19.53,0,0,1-16.21,30.43h0a19.61,19.61,0,0,1-8.35-1.87l-45.45,19.88a36.27,36.27,0,0,1-36.18,38.57Z"

              />
              <path id="louder-banner__icon" d="M275.44,13.69a7,7,0,0,0-1.91,9.76l.51.77-88.5,86a7,7,0,0,0-10.82,8.88l18.36,27.31a7,7,0,0,0,12.4-6.43l7.62-3.33a22.82,22.82,0,0,0,1.66,3.17,23.79,23.79,0,0,0,41.93-22.24l61.87-27.07.52.77a7,7,0,1,0,11.67-7.85L285.2,15.61A7,7,0,0,0,275.44,13.69ZM240.05,135.3a9.64,9.64,0,0,1-13.3-3,8.19,8.19,0,0,1-.67-1.32l17.65-7.72A9.64,9.64,0,0,1,240.05,135.3Z" />
            </g>
          </g>
        </svg>
        <h3 className="services__list__item__title">Banner ads</h3>
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

export default BanerAds;
