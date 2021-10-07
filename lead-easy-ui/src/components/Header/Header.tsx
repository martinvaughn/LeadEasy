import { Link } from "react-router-dom";
import './Header.css';

function Header() {
    return (
    <div id="my-header">
        <Link to="/">Leads </Link>
        <a href="/#">Log Out</a>
        <a href="/#">Support</a>
    </div>)
}

export default Header