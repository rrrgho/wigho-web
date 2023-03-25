import React from 'react';
import SEO from "../../common/SEO";
import HeaderOne from "../../common/header/HeaderOne";
import FooterTwo from "../../common/footer/FooterTwo";
import {FaSistrix} from "react-icons/fa";

const Error404 = () => {
    return (
        <>
            <SEO title="Consult | Wigho Digital Solutions"/>
            <main className="page-wrapper">
                <HeaderOne btnStyle="btn-small btn-icon round" HeaderSTyle="" />

                <div className="error-area ptb--200 ptb_sm--60 ptb_md--80">
                    <div className="container">
                        <div className="row align-item-center">
                            <div className="col-lg-12">
                                <div className="error-inner">
                                    <h1>404</h1>
                                    <h2 className="title">Something’s not right.</h2>
                                    <p className="description"> The URL you visit not found or maybe broken .</p>
                                    <div className="view-more-button">
                                        <a className="btn-default" href="/">Go Back Home</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <FooterTwo />
            </main>
        </>

    )
}
export default Error404
