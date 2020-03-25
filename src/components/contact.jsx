import React, {Component} from "react";
import API_KEY from "../API/API__KEY";
import { GoogleMap, LoadScript ,useGoogleMap, Marker,} from "@react-google-maps/api"

class Contact extends Component {
    constructor() {
        super();
        this.state = {
            fullname: "",
            email: "",
            message: "",
            response: undefined,
            position: {
                lat: 51.505429,
                lng: -0.111130
            }
        }
    }

    render() {
        return (
            <main className="contact">
                <section className="contact__head">
                <h2 className="contact__head__title">Let's connect</h2>
                <p className="contact__head__description">If you want to collab with us, feel free to contact us</p>
                </section>
                <section className="contact__form-and-map">
                    <section className="contact__form-and-map__map">
                        <LoadScript
                            id="script-loader"
                            googleMapsApiKey={API_KEY}
                        >
                            <GoogleMap
                                mapContainerStyle={{width: "100%", height: "100%"}}
                                zoom={16}
                                center={this.state.position}

                            >
                                <Marker position={this.state.position} />
                            </GoogleMap>
                        </LoadScript>
                    </section>
                    <section className="contact__form-and-map__form">
                        <h2 className="contact__form-and-map__form__title">Let us know yourself</h2>
                        <section className="contact__form-and-map__form__inputs">
                        <section className="contact__form-and-map__form__inputs__fullname">
                            <label htmlFor="fullname">Full name</label>
                            <input value={this.state.fullname} placeholder="John Doe" type="text" name="fullname"/>
                        </section>
                        <section className="contact__form-and-map__form__inputs__email">
                            <label htmlFor="email">Email address</label>
                            <input value={this.state.email} placeholder="example@gmail.com" type="text" name="email"/>
                        </section>
                        <section className="contact__form-and-map__form__inputs__message">
                            <label htmlFor="email">Message</label>
                            <textarea value={this.state.message} name="message" placeholder="Share your thoughts..."></textarea>
                        </section>
                        <button className="contact__form-and-map__form__inputs__btn">Send message<span>
                            <svg width={30} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
	<title>arrow right</title>
	<g fill="none">
		<path d="M6 12h12.5m0 0l-6-6m6 6l-6 6" stroke="#fff" strokeLinecap="round" strokeWidth="2"/>
	</g>
</svg>
                        </span></button>
                    </section>
                        </section>
                </section>
            </main>
        );
    }
}

export default Contact;