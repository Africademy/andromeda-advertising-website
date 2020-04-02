import React, {useEffect, useState} from "react";
import anime from "animejs/lib/anime.es";

const BurgerIcon = (props) => {
    const [isMenuOpen, setMenu] = useState(props.isMenuOpen);

    useEffect(() => {
        anime({
            targets: '#burgerBtn',
            rotate: 180,
            duration: 200,
            easing: 'linear',
        })
        console.log('changed');
    }, [isMenuOpen])
  return (
    <svg id='burgerBtn' width={30} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <title>menu</title>
      <g fill="none">
        <path
          d="M3 5h18"
          stroke="#000000"
          strokeLinecap="round"
          strokeWidth="2"
        />
        <path
          d="M3 12h18"
          stroke="#000000"
          strokeLinecap="round"
          strokeWidth="2"
        />
        <path
          d="M3 19h18"
          stroke="#000000"
          strokeLinecap="round"
          strokeWidth="2"
        />
      </g>
    </svg>
  );
};

export default BurgerIcon;
