import { FC } from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer:FC = () => {
    return (
        <div id="my-footer">
            <Link to="/">Leads </Link>
            <a href="/#">Log Out</a>
            <a href="/#">Support</a>
        </div>
    )
}

export default Footer;