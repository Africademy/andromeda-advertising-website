import React from "react";

const unActiveBtn = () => {
    return (
        <button className="contact__form-and-map__form__inputs__btn--notActive">Send message<span>
            <svg width={30} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
	            <title>arrow right</title>
	            <g fill="none">
		        <path d="M6 12h12.5m0 0l-6-6m6 6l-6 6" stroke="#fff" strokeLinecap="round" strokeWidth="2"/>
	            </g>
            </svg>
        </span></button>
    )
}

export default unActiveBtn;