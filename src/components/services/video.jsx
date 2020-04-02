import React from "react";

class VideoAds extends React.Component {
  render() {
    return (
      <main className="services__list__item">
          <svg height={120} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 301.1 186.39">
            <g id="Warstwa_2" dataName="Warstwa 2">
              <g id="base">
                <rect y="24.07" width="234.35" height="162.32" rx="25.04" />
              </g>
              <g id="details">
                <path
                  d="M72.14,140.47a5.1,5.1,0,0,1-5.1-5.09V75.08a5.09,5.09,0,0,1,7.41-4.54l59,30.15a5.09,5.09,0,0,1,0,9.07l-59,30.16A5.1,5.1,0,0,1,72.14,140.47ZM77.23,83.4v43.66L120,105.23Z"
                  fill="#fff"
                />
              </g>
              <g id="louder-video">
                <path id="louder-video__outline"
                  d="M213.49,130.78a29,29,0,0,1-17.61-5.9,16.47,16.47,0,0,1-2.51,2.09,15.64,15.64,0,0,1-21.69-4.26L157,100.86a15.63,15.63,0,0,1,13-24.35c.52,0,1,0,1.56.08l61.91-60.13A15.62,15.62,0,0,1,262,6.91l36.45,54.25a15.63,15.63,0,0,1-13,24.35h0A15.69,15.69,0,0,1,278.8,84L242.44,99.92a29,29,0,0,1-28.95,30.86Z"
                  fill="#fff"
                />
                <path id="louder-video__icon" d="M245.89,11a5.62,5.62,0,0,0-1.53,7.81l.41.61L174,88.17a5.63,5.63,0,0,0-8.66,7.11L180,117.13a5.63,5.63,0,0,0,9.93-5.14l6.1-2.67a18.57,18.57,0,0,0,1.32,2.54,19,19,0,0,0,33.56-17.8l49.5-21.66.42.62a5.63,5.63,0,0,0,9.34-6.28L253.7,12.49A5.62,5.62,0,0,0,245.89,11Zm-28.32,97.31a7.72,7.72,0,0,1-10.64-2.44,6.52,6.52,0,0,1-.54-1l14.13-6.18A7.72,7.72,0,0,1,217.57,108.27Z" />
              </g>
            </g>
          </svg>
        <h3 className="services__list__item__title">Video ads</h3>
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

export default VideoAds;
