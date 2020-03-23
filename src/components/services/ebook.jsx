import React from "react"

class EbookAds extends React.Component {
    render() {
        return (
            <main className="services__list__item">
                <div className="services__list__item__icon"></div>
                <h3 className="services__list__item__title">E-book ads</h3>
                <p className="services__list__item__description">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam semper dui eget sem rhoncus, nec rutrum tortor aliquam.
                </p>
                <button className="services__list__item__btn">Explore more
                    <span>
                            <svg width={20} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
	<title>arrow right</title>
	<g fill="none">
		<path d="M6 12h12.5m0 0l-6-6m6 6l-6 6" strokeLinecap="round" strokeWidth="2"/>
	</g>
</svg>
                        </span>
                </button>
            </main>
        )
    }
}

export default EbookAds;