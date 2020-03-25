import React, {Component} from "react";

class Footer extends Component {
    render() {
        return (
            <main className="footer">
                <section className="footer__website-map">
                    <section className="footer__website-map__company-summary">
                        <h3>Andromeda</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus convallis lorem eu risus blandit tincidunt eget vel sapien.</p>
                    </section>
                    <section className="footer__website-map__list">
                        <h3>Our Services</h3>
                        <ul>
                            <li>Advertisers</li>
                            <li>Publishers</li>
                        </ul>
                    </section>
                    <section className="footer__website-map__list">
                        <h3>About</h3>
                        <ul>
                            <li>Our story</li>
                            <li>Careers</li>
                            <li>Guidelines</li>
                        </ul>
                    </section>
                    <section className="footer__website-map__list">
                        <h3>Resources</h3>
                        <ul>
                            <li>Case studies</li>
                            <li>Webinar</li>
                            <li>Blogs</li>
                        </ul>
                    </section>
                    <section className="footer__website-map__contact">
                        <h3>Contact Us</h3>
                        <ul>
                            <li>
                                <button>
                                <svg height={30} id="Capa_1" version="1.1" viewBox="0 0 96.124 96.123" xmlns="http://www.w3.org/2000/svg" x="0" y="0" xmlSpace="preserve">
                                    <title>facebook logo</title>
                                    <g fill="rgba(255, 255, 255, 0.3)">
                                        <path d="M72.089.02L59.624 0C45.62 0 36.57 9.285 36.57 23.656v10.907H24.037a1.96 1.96 0 0 0-1.96 1.961v15.803a1.96 1.96 0 0 0 1.96 1.96H36.57v39.876a1.96 1.96 0 0 0 1.96 1.96h16.352a1.96 1.96 0 0 0 1.96-1.96V54.287h14.654a1.96 1.96 0 0 0 1.96-1.96l.006-15.803a1.963 1.963 0 0 0-1.961-1.961H56.842v-9.246c0-4.444 1.059-6.7 6.848-6.7l8.397-.003a1.96 1.96 0 0 0 1.959-1.96V1.98A1.96 1.96 0 0 0 72.089.02z"/>
                                    </g>
                                </svg>
                                </button>
                            </li>
                            <li>
                                <button>
                                <svg height={35} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <title>twitter</title>
                                    <g fill="rgba(255, 255, 255, 0.3)">
                                        <path d="M22 5.922a8.193 8.193 0 0 1-2.356.646A4.12 4.12 0 0 0 21.448 4.3a8.272 8.272 0 0 1-2.607.996 4.103 4.103 0 0 0-6.991 3.74A11.648 11.648 0 0 1 3.392 4.75a4.072 4.072 0 0 0-.554 2.062 4.1 4.1 0 0 0 1.824 3.414 4.103 4.103 0 0 1-1.858-.515v.052a4.107 4.107 0 0 0 3.29 4.023 4.155 4.155 0 0 1-1.08.143c-.266 0-.522-.026-.773-.076a4.105 4.105 0 0 0 3.832 2.85 8.232 8.232 0 0 1-5.095 1.753c-.332 0-.658-.02-.979-.056a11.597 11.597 0 0 0 6.289 1.846c7.547 0 11.673-6.252 11.673-11.673l-.014-.531A8.193 8.193 0 0 0 22 5.922z"/>
                                    </g>
                                </svg>
                                </button>
                            </li>
                            <li>
                                <button>
                                <svg className="footer__website-map__contact__icon" height={30} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <title>instagram</title>
                                    <g fill="rgba(255, 255, 255, 0.3)">
                                        <path className="footer__website-map__contact__icon__path" d="M7 3a4 4 0 0 0-4 4v10a4 4 0 0 0 4 4h10a4 4 0 0 0 4-4V7a4 4 0 0 0-4-4H7zm0-2h10a6 6 0 0 1 6 6v10a6 6 0 0 1-6 6H7a6 6 0 0 1-6-6V7a6 6 0 0 1 6-6zm5.483 7.99a3 3 0 1 0-.88 5.934 3 3 0 0 0 .88-5.935zm1.808 7.433A5 5 0 1 1 9.795 7.49a5 5 0 0 1 4.496 8.932zM17.5 8a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"/>
                                        <path d="M0 0h24v24H0z" fill="none"/>
                                    </g>
                                </svg>
                                </button>
                        </li>
                            <li>
                                <button>
                                <svg height={30} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <title>youtube</title>
                                    <g fill="none">
                                        <path d="M14 12l-3.5 2v-4l3.5 2z" fill="rgba(255, 255, 255, 0.3)" stroke="rgba(255, 255, 255, 0.3)" strokeLinecap="round" strokeWidth="2"/>
                                        <path d="M2 12.707v-1.415c0-2.895 0-4.343.905-5.274.906-.932 2.332-.972 5.183-1.053C9.438 4.927 10.818 4.9 12 4.9c1.181 0 2.561.027 3.912.065 2.851.081 4.277.121 5.182 1.053.906.931.906 2.38.906 5.274v1.415c0 2.896 0 4.343-.905 5.275-.906.931-2.331.972-5.183 1.052-1.35.039-2.73.066-3.912.066-1.181 0-2.561-.027-3.912-.066-2.851-.08-4.277-.12-5.183-1.052C2 17.05 2 15.602 2 12.708z" stroke="rgba(255, 255, 255, 0.3)" strokeWidth="2"/>
                                    </g>
                                </svg>
                                </button>
                            </li>
                            <li>
                                <button>
                                <svg height={30} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <title>linkedin</title>
                                    <g fill="none">
                                        <path d="M21.372 1H2.63C1.73 1 1 1.709 1 2.578v18.849C1 22.293 1.73 23 2.63 23H21.37c.901 0 1.629-.707 1.629-1.573V2.577C23 1.71 22.272 1 21.372 1zm-13.7 18.415H4.348v-9.93h3.323v9.93zM6.007 8.13h-.022c-1.116 0-1.837-.768-1.837-1.718 0-.976.743-1.718 1.88-1.718s1.837.742 1.858 1.718c0 .95-.72 1.718-1.88 1.718zM19.65 19.415h-3.316v-5.311c0-1.335-.488-2.252-1.69-2.252-.923 0-1.463.617-1.7 1.217-.088.203-.11.501-.11.8v5.546H9.508s.043-9 0-9.93h3.325v1.408c.437-.676 1.227-1.643 2.991-1.643 2.19 0 3.826 1.42 3.826 4.47v5.695zm-6.837-8.49a.062.062 0 0 1 .02-.031v.03h-.02z" fill="rgba(255, 255, 255, 0.3)"/>
                                    </g>
                                </svg>
                                </button>
                            </li>
                        </ul>
                    </section>
                </section>
            </main>
        )
    }
}

export default Footer;