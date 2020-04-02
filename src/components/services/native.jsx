import React from "react";

class Native extends React.Component {
  render() {
    return (
      <main className="services__list__item">
        <svg width={100} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 210.87 263">
          <g id="Warstwa_2" dataName="Warstwa 2">
            <g id="base">
              <rect width="162" height="263" rx="31.05" />
            </g>
            <g id="louder">
              <path id="louder-outline"
                d="M123.26,134.28a29,29,0,0,1-17.61-5.9,15.64,15.64,0,0,1-24.19-2.17L66.77,104.36A15.64,15.64,0,0,1,79.74,80c.52,0,1,0,1.55.08L143.2,20a15.62,15.62,0,0,1,28.57-9.55l36.45,54.25a15.63,15.63,0,0,1-13,24.35h0a15.63,15.63,0,0,1-6.68-1.5l-36.37,15.91a29,29,0,0,1-28.95,30.86Z"
                fill="#fff"
              />
              <path id="louder-icon" d="M155.66,14.46a5.63,5.63,0,0,0-1.53,7.81l.41.61L83.73,91.67a5.63,5.63,0,0,0-8.66,7.11l14.69,21.85a5.62,5.62,0,0,0,9.92-5.14l6.1-2.67a19.76,19.76,0,0,0,1.32,2.54,19,19,0,0,0,33.56-17.8L190.17,75.9l.41.62a5.63,5.63,0,0,0,9.34-6.28L163.47,16A5.62,5.62,0,0,0,155.66,14.46Zm-28.31,97.31a7.73,7.73,0,0,1-10.65-2.44,7.45,7.45,0,0,1-.54-1l14.13-6.18A7.72,7.72,0,0,1,127.35,111.77Z" />
            </g>
          </g>
        </svg>
        <h3 className="services__list__item__title">Native ads</h3>
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

export default Native;
