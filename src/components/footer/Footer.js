import React from 'react';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__container">
                <a href="https://drive.google.com/file/d/1tGndbJok4LyOsKt_uHL1ZP9vhRVq0pOa/view"
                    className="footer__link"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <i class="fa fa-download icon" aria-hidden="true"></i>
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
