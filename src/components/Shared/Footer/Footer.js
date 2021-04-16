import { Container } from '@material-ui/core';
import React from 'react';
import img from '../../../image/footerbg.jpg'
import FooterBottom from './FooterBottom';
import FooterMiddle from './FooterMiddle';
import FooterTop from './FooterTop';
const Footer = () => {
    const footerStyle = {
        background: `url(${img}),
            linear-gradient(rgba(17,17, 17, 0.8), rgba(17,17, 17, 0.8))`,
        backgroundBlendMode: 'overlay',
        width: '100%',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        color: '#808080'
    }
    return (
        <footer style={footerStyle}>
            <Container>
                <FooterTop />
                <FooterMiddle />
            </Container>
            <FooterBottom />
        </footer>
    );
};

export default Footer;