import "./Navbar.css";
import behyveLogo from "./Behyve-logo.svg";
import dropDown from "./3line.svg";

function Navbar() {
    return (
        <nav className="main-navbar">
            <ul className="main-nav">
                <li id="main-logo">
                    <a href="#">
                        <img src={behyveLogo} alt="Behyve Logo" />
                    </a>
                </li>
                <li className="normal-li">
                    <a href="#" className="normal-item">
                        Sport
                    </a>
                </li>
                <li className="normal-li">
                    <a href="#" className="normal-item">
                        Soul
                    </a>
                </li>
                <li className="normal-li">
                    <a href="#" className="normal-item">
                        Beauty
                    </a>
                </li>
                <li className="normal-li">
                    <a href="#" className="normal-item">
                        Health
                    </a>
                </li>
                <li className="normal-li">
                    <a href="#" className="normal-item">
                        Artists
                    </a>
                </li>
                <li className="normal-li">
                    <a href="#" className="normal-item">
                        Hospitality
                    </a>
                </li>
                <li className="normal-li">
                    <a href="#" className="normal-item">
                        Family
                    </a>
                </li>
                <li className="normal-li">
                    <a href="#" className="normal-item">
                        Others
                    </a>
                </li>
                <li className="normal-li">
                    <a href="#" className="normal-item">
                        Events
                    </a>
                </li>
                <li id="drop-down">
                    <img src={dropDown} alt="" />
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;
