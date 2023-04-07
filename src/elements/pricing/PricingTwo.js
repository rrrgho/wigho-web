import React from 'react';
import { FiCheck } from "react-icons/fi";
import {Link} from "react-router-dom";

const PricingTwo = () => {
    return (
        <div className="row row--15">

            {/* Start PRicing Table Area  */}
            <div className="col-lg-4 col-md-6 col-12">
                <div className="rn-pricing style-2">
                    <div className="pricing-table-inner">
                        <div className="pricing-header">
                            <h4 className="title">Basic Plan</h4>
                            <div className="pricing">
                                <div className="price-wrapper">
                                    <span className="currency">IDR</span>
                                    <span className="price">1,99jt</span>
                                </div>
                                <span className="subtitle">Exclude Monthly Maintenance</span>
                            </div>
                        </div>
                        <div className="pricing-body">
                            <ul className="list-style--1">
                                <li><FiCheck /> Free Domain 1 Year</li>
                                <li><FiCheck /> Max 2 Page</li>
                                <li><FiCheck /> 1 Design Revision</li>
                                <li><FiCheck /> Seo Friendly</li>
                                <li><FiCheck /> Mobile Friendly</li>
                                <li><FiCheck /> 1 Month Free Maintenance</li>
                            </ul>
                        </div>
                        <div className="pricing-footer">
                            <Link className="btn-default btn-border" to="/consult">Get Your Deal</Link>
                        </div>
                    </div>
                </div>
            </div>
            {/* End PRicing Table Area  */}

            {/* Start PRicing Table Area  */}
            <div className="col-lg-4 col-md-6 col-12">
                <div className="rn-pricing style-2 active zoom-in-out-effect">
                    <div className="pricing-table-inner">
                        <div className="pricing-header">
                            <h4 className="title">Starter Plan</h4>
                            <div className="pricing">
                                <div className="price-wrapper">
                                    <span className="currency">IDR</span>
                                    <span className="price">4,99jt</span>
                                </div>
                                <span className="subtitle">Exclude Monthly Maintenance</span>
                            </div>
                        </div>
                        <div className="pricing-body">
                            <ul className="list-style--1">
                                <li><FiCheck /> Free Domain 1 Year</li>
                                <li><FiCheck /> Max 5 Page</li>
                                <li><FiCheck /> 3 Design Revision</li>
                                <li><FiCheck /> Seo Friendly</li>
                                <li><FiCheck /> Mobile Friendly</li>
                                <li><FiCheck /> 3 Months Free Maintenance</li>
                            </ul>
                        </div>
                        <div className="pricing-footer">
                            <Link className="btn-default" to="/consult">Get Your Deal</Link>
                        </div>
                    </div>
                </div>
            </div>
            {/* End PRicing Table Area  */}

            {/* Start PRicing Table Area  */}
            <div className="col-lg-4 col-md-6 col-12">
                <div className="rn-pricing style-2">
                    <div className="pricing-table-inner">
                        <div className="pricing-header">
                            <h4 className="title">Enterprise Plan</h4>
                            <div className="pricing">
                                <div className="price-wrapper">
                                    <span className="currency">IDR</span>
                                    <span className="price">7,99jt</span>
                                </div>
                                <span className="subtitle">Exclude Monthly Maintenance</span>
                            </div>
                        </div>
                        <div className="pricing-body">
                            <ul className="list-style--1">
                                <li><FiCheck /> Free Domain 1 Year</li>
                                <li><FiCheck /> Free Email Business 6 Months</li>
                                <li><FiCheck /> Unlimited Email Business Account</li>
                                <li><FiCheck /> Private Cloud Hosting</li>
                                <li><FiCheck /> Max 12 Page</li>
                                <li><FiCheck /> 6 Design Revision</li>
                                <li><FiCheck /> Seo Friendly</li>
                                <li><FiCheck /> Mobile Friendly</li>
                                <li><FiCheck /> 6 Months Free Maintenance</li>
                            </ul>
                        </div>
                        <div className="pricing-footer">
                            <Link className="btn-default btn-border" to="/consult">Get Your Deal</Link>
                        </div>
                    </div>
                </div>
            </div>
            {/* End PRicing Table Area  */}
        </div>
    )
}
export default PricingTwo;
