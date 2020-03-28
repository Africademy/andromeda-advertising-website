import React, {Component} from "react";
import "../styles/login.scss";

class Login extends Component {
    state = {
        email: "",
        password: "",
        passwordType: "password",
        showPassword: false,
        formFilled: false,
    }
    handleInput = e => {
        this.setState({[e.target.id]: e.target.value})
    }
    handleVisibility = () => {
        this.state.showPassword === false ?
            this.setState({
                showPassword: !this.state.showPassword,
                passwordType: "text"
        })
            :
            this.setState({showPassword: !this.state.showPassword,
            passwordType: "password"
            })
    }
    validate = e => {
        if(e.target.value !== "") {
            this.setState({formFilled: !this.state.formFilled});
        }
    }
    render() {
        return (
            <main className="login">
                <section className="login__left"></section>
                <section className="login__right">
                    <form className="login__right__form">
                        <h1 className="login__right__form__title">Become<br/>our client</h1>
                        <section className="login__right__form__input">
                            <label htmlFor="email">E-mail address</label>
                            <input placeholder="e.g. john@mail.com"
                                   type="text"
                                   id="email"
                                   value={this.state.email}
                                   onChange={e => this.handleInput(e)}
                                   onKeyDown={e => this.validate(e)}
                            />
                        </section>
                        <section className="login__right__form__input" >
                            <label htmlFor="password">Password</label>
                            <input value={this.state.password}
                                   type={this.state.passwordType}
                                   id="password"
                                   onChange={e => this.handleInput(e)}
                                   onKeyDown={e => this.validate(e)}
                            />
                            <div className="login__right__form__input__strenght"></div>
                            <div className="login__right__form__input__checkbox">
                                <input type="checkbox" onChange={this.handleVisibility} checked={this.state.showPassword} />
                                <label>Show password</label>
                            </div>
                        </section>
                        {this.state.formFilled === false ?
                            <button>Login</button>
                            :
                            <button className="login__right__form__btn">Login</button>
                        }
                    </form>
                </section>
            </main>
        )
    }
}

export default Login;