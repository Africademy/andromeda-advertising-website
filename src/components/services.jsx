import React, {Component} from "react";
import NativeAds from "./services/native";
import BanerAds from "./services/baner";
import VideoAds from "./services/video";
import EbookAds from "./services/ebook";
import NotificationAds from "./services/notification";
import GameAds from "./services/game";

import gsap, {CSSPlugin} from "gsap";
gsap.registerPlugin(CSSPlugin);

class Services extends Component {
    render() {
        return (
            <main className="services">
                <h2 className="services__title">Your growth is Our growth</h2>
                <p className="services__description">The more users will trust us, the better we will be in. So all we need is your help.
                    The better we will be in. So all we need is your help.
                </p>
                <section className="services__list">
                    <NativeAds />
                    <BanerAds />
                    <VideoAds />
                    <EbookAds />
                    <NotificationAds />
                    <GameAds />
                </section>
                <section className="services__action">
                <h2 className="services__action__title">Create your campaign with few steps</h2>
                <p className="services__action__description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam semper dui eget sem rhoncus, nec rutrum tortor aliquam.</p>
                <button className="services__action__btn">Get started<span>
                    <svg width={30} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
	<title>arrow right</title>
	<g fill="none">
		<path d="M6 12h12.5m0 0l-6-6m6 6l-6 6" stroke="#fff" strokeLinecap="round" strokeWidth="2"/>
	</g>
</svg>
                </span></button>
                </section>
            </main>
        )
    }
}

export default Services;