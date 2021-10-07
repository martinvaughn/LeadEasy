import { Link } from 'react-router-dom';
import './Footer.css';

export default () => {
    return (
        <div id="my-footer">
            <Link to="/">Leads </Link>
            <a href="/#">Log Out</a>
            <a href="/#">Support</a>
        </div>
    )
}