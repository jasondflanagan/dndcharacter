import React from 'react';


function Footer() {

        return (
            <React.Fragment>
                <footer className="site-footer" exapnd="md" style={{ backgroundImage: 'url(assets/wood-background.jpg)', backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }} >
                    <div className="container">
                        <div className="row">
                            <div className="col-4 col-sm-2 offset-1">
                                <div>
                                    <h5>Links</h5>
                                    <ul className="list-unstyled">
                                        <li><a href="/home">Home</a></li>
                                        <li><a href="/races">Races</a></li>
                                        <li><a href="/classes">Classes</a></li>
                                        <li><a href="/builder">Character Builder</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-6 col-sm-5 text-center">
                                <div>
                                    <h5>Social</h5>
                                    <a className="btn btn-social-icon btn-instagram" href="http://instagram.com/"><i className="fa fa-instagram" /></a>
                                    <a className="btn btn-social-icon btn-facebook" href="http://facebook.com/"><i className="fa fa-facebook" /></a>
                                    <a className="btn btn-social-icon btn-twitter" href="http://twitter.com/"><i className="fa fa-twitter" /></a>
                                    <a className="btn btn-social-icon btn-google" href="http://youtube.com/"><i className="fa fa-youtube" /></a>
                                </div>
                            </div>
                            <div className="col-sm-4 text-center">
                                <div>
                                    <a className="btn btn-link" href="tel:+12065551234"><i className="fa fa-phone" />
                                        1-206-555-1234<br /></a>
                                    <a className="btn btn-link" href="mailto:dungeonsanddragons101@gmail.com"><i className="fa fa-envelope-o" />
                                        dungeonsanddragons101@gmail.com</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
            </React.Fragment >
        );
    }

export default Footer;