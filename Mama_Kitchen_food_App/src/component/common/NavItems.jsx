import { Link } from "react-router-dom";

const NavItems = ({ to, navname }) => (
        
        <li>
            <Link to={to} className="hover:text-yellow-500 transition-colors duration-200 ">{navname}</Link>
        </li>
    );

export default NavItems;