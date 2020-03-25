import React, {Component} from "react";

class Excellence extends Component {
    render() {
        return (
            <main className="excellence">
                <h2 className="excellence__title">Just take a look<br/>At our excellence</h2>
                <p className="excellence__description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam semper dui eget sem rhoncus, nec rutrum tortor aliquam.</p>
                <section className="excellence__numbers">
                    <div className="excellence__numbers__first-column">
                        <div className="excellence__numbers__first-column__purple">
                            <div className="excellence__numbers__first-column__purple__main">
                                <h3 className="excellence__numbers__first-column__purple__main__title">Happy Customer</h3>
                                <p className="excellence__numbers__first-column__purple__main__subtitle">Interest profile</p>
                            </div>
                            <h3 className="excellence__numbers__last-column__navy__value">1 B</h3>
                        </div>
                        <div className="excellence__numbers__first-column__blue">
                            <div className="excellence__numbers__first-column__blue__main">
                            <h3 className="excellence__numbers__first-column__blue__main__title">Success</h3>
                            <p className="excellence__numbers__first-column__blue__main__subtitle">Leads using demographics</p>
                        </div>
                        <h3 className="excellence__numbers__last-column__navy__value">200%</h3>
                        </div>
                    </div>
                    <div className="excellence__numbers__last-column">
                        <div className="excellence__numbers__last-column__navy">
                            <div className="excellence__numbers__last-column__navy__main">
                                <h3 className="excellence__numbers__last-column__navy__main__title">Recommendation</h3>
                                <p className="excellence__numbers__last-column__navy__main__subtitle">Per month</p>
                            </div>
                                <h3 className="excellence__numbers__last-column__navy__value">225 B</h3>
                        </div>
                        <div className="excellence__numbers__last-column__red">
                            <div className="excellence__numbers__last-column__red__main">
                                <h3 className="excellence__numbers__last-column__red__main__title">More app installed</h3>
                                <p className="excellence__numbers__last-column__red__main__subtitle">Great achievement</p>
                            </div>
                            <h3 className="excellence__numbers__last-column__red__value">50k</h3>
                        </div>
                    </div>
                </section>
            </main>
        )
    }
}

export default Excellence;