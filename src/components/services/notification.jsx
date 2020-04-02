import React from "react";

class Notification extends React.Component {
  render() {
    return (
      <main className="services__list__item">
        <svg
          height={100}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 233.9 263"
        >
          <g id="Warstwa_2" dataName="Warstwa 2">
            <g id="louder-push">
              <path
                id="bell-main"
                d="M218.38,221.83l-18.81-31.36a93.19,93.19,0,0,1-13.29-47.93V115.06a76.79,76.79,0,0,0-54.79-73.47V21.92a21.92,21.92,0,1,0-43.83,0V41.59a76.79,76.79,0,0,0-54.79,73.47v27.48A93.23,93.23,0,0,1,19.6,190.46L.78,221.82a5.5,5.5,0,0,0,4.69,8.31H213.68a5.48,5.48,0,0,0,4.7-8.3Z"
              />
              <path id="bell-small" d="M75.07,241.08a38.12,38.12,0,0,0,69,0Z" />
              <circle
                id="add__outline"
                cx="172.24"
                cy="61.66"
                r="61.66"
                fill="#ff0043"
              />
              <circle id="add__bg" cx="172.24" cy="62.5" r="51.66" />
              <path
                d="M198.44,56.05H178.7V36.3a6.46,6.46,0,0,0-12.91,0V56.05H146A6.46,6.46,0,0,0,146,69h19.75V88.71a6.46,6.46,0,0,0,12.91,0V69h19.74a6.46,6.46,0,1,0,0-12.91Z"
                fill="#fff"
              />
            </g>
          </g>
        </svg>
        <h3 className="services__list__item__title">Push notification</h3>
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

export default Notification;
