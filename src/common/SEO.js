import PropTypes from "prop-types";
import React from 'react'
import { Helmet } from "react-helmet";


const SEO = ( {title} ) => {
    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>{title}</title>
                <meta name="robots" content="noindex, follow" />
            </Helmet>
        </>
    )
}
SEO.propTypes = {
    title: PropTypes.string
};

export default SEO;


