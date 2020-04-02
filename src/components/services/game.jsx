import React from "react";

class GameAds extends React.Component {
  render() {
    return (
      <main className="services__list__item">
        <svg width={150} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 325.49 207.03">
          <g id="Warstwa_2" dataName="Warstwa 2">
            <g id="louder-game">
              <path
                d="M282.78,164.05l-19-80.82C258.64,61.45,238.58,39.07,208,39.07H75.72C53.35,39.07,27,53.48,20,83.23l-19,80.82A35,35,0,0,0,35,207a27.6,27.6,0,0,0,23.54-13.32l14.65-24.42a14,14,0,0,1,12-6.77H198.58a14,14,0,0,1,12,6.77l14.65,24.41A27.59,27.59,0,0,0,248.74,207,35,35,0,0,0,282.78,164.05ZM106.26,109.11h-9.5v9.49a8.31,8.31,0,0,1-16.62,0v-9.49h-9.5a8.32,8.32,0,0,1,0-16.63h9.5V83a8.31,8.31,0,0,1,16.62,0v9.49h9.5a8.32,8.32,0,0,1,0,16.63Zm71.21,0a8.32,8.32,0,1,1,8.32-8.31A8.32,8.32,0,0,1,177.47,109.11Zm17.81,17.8a8.31,8.31,0,1,1,8.31-8.31A8.31,8.31,0,0,1,195.28,126.91Zm0-35.61A8.31,8.31,0,1,1,203.59,83,8.31,8.31,0,0,1,195.28,91.3Zm17.8,17.81a8.32,8.32,0,1,1,8.31-8.31A8.32,8.32,0,0,1,213.08,109.11Z"
                fillRule="evenodd"
                id='gamepad'
              />
              <path
                d="M225.08,149.88a33.14,33.14,0,0,1-20.18-6.77,18.16,18.16,0,0,1-2.88,2.4,17.91,17.91,0,0,1-24.85-4.88l-16.83-25A17.9,17.9,0,0,1,175.2,87.69a17.68,17.68,0,0,1,1.78.09l71-68.91a17.91,17.91,0,0,1,32.75-11l41.77,62.17A17.91,17.91,0,0,1,307.59,98h0a18,18,0,0,1-7.66-1.71l-41.68,18.23a33.25,33.25,0,0,1-33.17,35.37Z"
                id='louder-game__outline'
              />
              <path id='louder-game__icon' d="M262.21,12.56a6.45,6.45,0,0,0-1.75,9l.47.7Q220.36,61.63,179.77,101a6.45,6.45,0,0,0-9.92,8.15l16.83,25.05a6.45,6.45,0,0,0,11.38-5.9l7-3.06a21.15,21.15,0,0,0,1.51,2.91A21.82,21.82,0,0,0,245,107.79L301.76,83l.47.71a6.45,6.45,0,1,0,10.71-7.2L271.16,14.31A6.45,6.45,0,0,0,262.21,12.56ZM229.76,124.08a8.86,8.86,0,0,1-12.2-2.79,10.64,10.64,0,0,1-.62-1.21L233.13,113A8.84,8.84,0,0,1,229.76,124.08Z" />
            </g>
          </g>
        </svg>
        <h3 className="services__list__item__title">Game ads</h3>
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

export default GameAds;
