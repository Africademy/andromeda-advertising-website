import React, {Component} from "react";
import NotActive from "../components/btns/notActiveBnt";
import API_KEY from "../API/API_KEY";
import { GoogleMap, LoadScript , Marker,} from "@react-google-maps/api"

class Contact extends Component {
    constructor() {
        super();
        this.state = {
            fullname: "",
            nameIsFilled: false,
            email: "",
            emailIsFilled: false,
            message: "",
            messageIsFilled: false,
            position: {
                lat: 51.505429,
                lng: -0.111130
            },
            formIsFilled: false,
        }
    }
    submitForm = e => {
        e.preventDefault()
    }
    handleInput = e => {
        this.setState({[e.target.name]: e.target.value})
    }
    validateName = e => {
        this.state.fullname === "" ? this.setState({nameIsFilled: false}) : this.setState({nameIsFilled: true})
    }
    validateEmail = e => {
        this.state.email === "" ? this.setState({emailIsFilled: false}) : this.setState({emailIsFilled: true})
    }
    validateMessage = e => {
        this.state.message === "" ? this.setState({messageIsFilled: false}) : this.setState({messageIsFilled: true})
    }
    validateForm = () => {
        const {nameIsFilled, emailIsFilled, messageIsFilled} = this.state;
        if(nameIsFilled === false && emailIsFilled === false && messageIsFilled === false) {

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
                    <form onSubmit={e => this.submitForm(e)} className="contact__form-and-map__form">
                        <h2 className="contact__form-and-map__form__title">Let us know yourself</h2>
                        <section className="contact__form-and-map__form__inputs">
                        <section className="contact__form-and-map__form__inputs__fullname">
                            <label htmlFor="fullname">Full name</label>
                            <input onKeyDown={e => this.validateName(e)} onChange={e => this.handleInput(e)} value={this.state.fullname} placeholder="John Doe" type="text" name="fullname"/>
                        </section>
                        <section className="contact__form-and-map__form__inputs__email">
                            <label htmlFor="email">Email address</label>
                            <input onKeyDown={e => this.validateEmail(e)} onChange={e => this.handleInput(e)} value={this.state.email} placeholder="example@gmail.com" type="text" name="email"/>
                        </section>
                        <section className="contact__form-and-map__form__inputs__message">
                            <label htmlFor="email">Message</label>
                            <textarea onKeyDown={e => this.validateMessage(e)} onChange={e => this.handleInput(e)} value={this.state.message} name="message" placeholder="Share your thoughts..."></textarea>
                        </section>
                            {this.state.formIsFilled === false ? <NotActive /> :
                        <button className="contact__form-and-map__form__inputs__btn">Send message<span>
                            <svg width={30} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
	                            <title>arrow right</title>
	                            <g fill="none">
		                            <path d="M6 12h12.5m0 0l-6-6m6 6l-6 6" stroke="#fff" strokeLinecap="round" strokeWidth="2"/>
	                            </g>
                            </svg>
                            </span>
                        </button>}
                    </section>
                        </form>
                </section>
            </main>
        );
    }
}

export default Contact;