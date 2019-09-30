import React from 'react';

const Contact = () => {
    return (
        <section className="contact">
            <div className="contact__email">
                <h1 className="contact__email__title heading-3">Get in touch</h1>
                <form className="contact-form row">
                    <div className="form-field col x-50">
                        <input id="name" className="input-text js-input" type="text" required />
                        <label className="label" htmlFor="name">Name</label>
                    </div>
                    <div className="form-field col x-50">
                        <input id="email" className="input-text js-input" type="email" required />
                        <label className="label" htmlFor="email">E-mail</label>
                    </div>
                    <div className="form-field col x-100">
                        <input id="message" className="input-text js-input" type="text" required />
                        <label className="label" htmlFor="message">Message</label>
                    </div>
                    <div className="form-field col x-100 align-center">
                        <input className="submit-btn" type="submit" value="Submit" />
                    </div>
                </form>
            </div>

            <div className="contact__infor">
                <h1 className="heading-3  contact__infor__header">FEEL FREE TO CONTACT</h1>
                <div className="contact__infor__detail">
                    <div className="contact__infor__adress">
                        <i className="fas fa-map-marker-alt fa-2x">
                            <span className="contact__infor__text place">Yo-kylä 5A03</span>
                        </i>
                    </div>

                    <div className="contact__infor__phone">
                        <i className="fas fa-mobile-alt fa-2x">
                            <span className="contact__infor__text phone">(+358) 469547704</span>
                        </i>
                    </div>

                    <div className="contact__infor__email">
                        <i className="fa fa-envelope fa-2x">
                            <span className="contact__infor__text">
                                <a href="mailto:vinhphu101195@gmail.com" className="gmail">
                                    vinhphu101195@gmail.com
                            </a>
                            </span>
                        </i>
                    </div>
                    <hr />
                    <div className="contact__infor__social-media">
                        <div>
                            <a
                                href="https://github.com/vinhphu101195"
                                target="_blank"
                                className="contact-icon "
                            >
                                <i className="fab fa-github rotate-center" aria-hidden="true" />
                            </a>
                        </div>
                        <div>
                            <a
                                href="https://www.linkedin.com/in/phu-chau-155369171/"
                                target="_blank"
                                className="contact-icon"
                            >
                                <i
                                    className="fab fa-linkedin-in rotate-center"
                                    aria-hidden="true"
                                />
                            </a>
                        </div>
                        <div>
                            <a
                                href="https://www.facebook.com/vinhphu.chau.79"
                                target="_blank"
                                className="contact-icon"
                            >
                                <i
                                    className="fab fa-facebook rotate-center"
                                    aria-hidden="true"
                                />
                            </a>
                        </div>
                    </div>
                </div></div>
        </section>
    );
}

export default Contact;
