import React from 'react';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__container">
                <a href="https://drive.google.com/open?id=1DVHAZgyCByGn_sg9-a52pYhCW3gZ_F28"
                    className="footer__link"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <i className="fa fa-download icon" aria-hidden="true"></i>
                    My Resume
            </a>
                <p className="footer__text">
                    © 2019 Phu Chau. Made in the Finland.
                </p>
            </div>

        </footer>
    );
}

export default Footer;
