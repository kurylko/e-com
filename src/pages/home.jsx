import { Link } from "react-router-dom";

export const Home = () => {
    return (
        <div>
            <Link to="/categories"> go to categories page </Link>
            <ul>
                <li>
                    <b>file name:</b> home.jsx
                </li>
                <li>
                    <b>component name:</b> Home
                </li>
            </ul>
        </div>
    );
};