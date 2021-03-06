import React, { useEffect, useRef } from 'react';

const Contact = () => {
    // get reference of contact class
    const refContact = useRef(null);
    // get reference of social media class
    const refGithub = useRef(null);
    const refLinkid = useRef(null);
    const refFacebook = useRef(null);

    const onScrolling = (firstClass, classElement, classAnimation) => {
        const lastItemOffset = firstClass.current.offsetTop + firstClass.current.clientHeight;
        const pageOffset = window.pageYOffset + window.innerHeight;
        if (lastItemOffset <= pageOffset) {
            classElement.forEach(element => {
                element.current.classList.add(classAnimation)
            });
        }
    }

    const callScrolling = () => {
        onScrolling(refContact, [refGithub, refFacebook, refLinkid], "rotate-center")
    }

    useEffect(() => {
        window.addEventListener("scroll", callScrolling);

        return () => {
            window.removeEventListener("scroll", callScrolling);
        }
    })



    return (
        <section className="contact" ref={refContact} >
            <div className="contact__email">
                <h1 className="contact__email__title heading-3">Get in touch</h1>
                <form className="contact-form row" action="mailto:vinhphu101195@gmail.com" method="post" encType="text/plain">
                    <div className="form-field col x-50 form-field-name">
                        <input id="name" className="input-text js-input" type="text" required />
                        <label className="label" htmlFor="name">Name</label>
                    </div>
                    <div className="form-field col x-50 form-field-email">
                        <input id="email" className="input-text js-input" type="email" required />
                        <label className="label" htmlFor="email">E-mail</label>
                    </div>
                    <div className="form-field col x-100 form-field-message">
                        <input id="message" className="input-text js-input" type="text" required />
                        <label className="label" htmlFor="message">Message</label>
                    </div>
                    <input className="btn form-field-btn" type="submit" value="Sent" />

                </form>
            </div>

            <div className="contact__infor">
                <h1 className="heading-3  contact__infor__header">please contact me</h1>
                <div className="contact__infor__detail">
                    <div className="contact__infor__adress">
                        <i className="fas fa-map-marker-alt fa-2x">
                            <span className="contact__infor__text place">Yo-kylä 5A03</span>
                        </i>
                    </div>

                    <div className="contact__infor__phone">
                        <i className="fas fa-mobile-alt fa-2x">
                            <span className="contact__infor__text phone">(+358) 469547704 (WhatsApp)</span>
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
                                rel="noopener noreferrer"
                            >
                                <i className="fab fa-github" ref={refGithub} aria-hidden="true" />
                            </a>
                        </div>
                        <div>
                            <a
                                href="https://www.linkedin.com/in/phu-chau-155369171/"
                                target="_blank"
                                className="contact-icon"
                                rel="noopener noreferrer"
                            >
                                <i
                                    className="fab fa-linkedin-in"
                                    ref={refLinkid}
                                    aria-hidden="true"
                                />
                            </a>
                        </div>
                        <div>
                            <a
                                href="https://www.facebook.com/vinhphu.chau.79"
                                target="_blank"
                                className="contact-icon"
                                rel="noopener noreferrer"
                            >
                                <i
                                    className="fab fa-facebook"
                                    ref={refFacebook}
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
