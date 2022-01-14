import React from 'react';


function Footer() {

        return (
            <React.Fragment>
                <footer className="site-footer" exapnd="md">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-3 offset-1">
                                <div>
                                    <h5 className='mt-3'></h5>
                                    <ul className="list-unstyled">
                                        <li><a href="/home" className='nav-link-footer'>Home</a></li>
                                        <li><a href="/races" className='nav-link-footer'>Races</a></li>
                                        <li><a href="/classes" className='nav-link-footer'>Classes</a></li>
                                        <li><a href="/builder" className='nav-link-footer'>Character Builder</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-sm-3 text-center">
                           {/*     <div>
                                    <h5>Social</h5>
                                    <a className="btn btn-social-icon btn-instagram" href="http://instagram.com/"><i className="fa fa-instagram" /></a>
                                    <a className="btn btn-social-icon btn-facebook" href="http://facebook.com/"><i className="fa fa-facebook" /></a>
                                    <a className="btn btn-social-icon btn-twitter" href="http://twitter.com/"><i className="fa fa-twitter" /></a>
                                    <a className="btn btn-social-icon btn-google" href="http://youtube.com/"><i className="fa fa-youtube" /></a>
                                </div>
                           */}
                            </div>
                            <div className="col-sm-5 text-center">
                                <div>
                                <h5></h5>
                                    <a className="btn btn-link" href="tel:+18887852625"><i className="fa fa-phone" />  888.785.2625<br /></a>
                                    <a className="btn btn-link" href="mailto:dungeonsanddragons101@gmail.com"><i className="fa fa-envelope-o" />  dungeonsanddragons101@gmail.com</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
            </React.Fragment >
        );
    }

export default Footer;