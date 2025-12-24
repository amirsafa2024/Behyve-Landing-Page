import behyveLogo from "./Behyve-logo.svg";
import appStore from "./DlAppStore.svg";
import googlePlay from "./DlGooglePlay.svg";
import "./Footer.css";

function Footer() {
    return (
        <div>
            <div id="footer-top-part">
                <div className="footer-description ">
                    <a href="#">
                        <img src={behyveLogo} />
                    </a>
                    <p>
                        behyve - Lorem ipsum dolor sit amet consectetur
                        adipisicing elit. Illum, mollitia sed voluptas cumque,
                        officiis quibusdam fuga quia voluptatum voluptatem
                        adipisci dolorum et velit exercitationem eligendi, odio
                        nisi numquam beatae eveniet?
                    </p>
                    <address>
                        <a href="#">+34 686 614851</a>
                        <br />
                        <a href="#">suppurt@behyve.net</a>
                    </address>
                </div>
                <div className="footer-item-container">
                    <h3>Fine the islands finest</h3>
                    <div id="footer-ul-container">
                        <ul>
                            <li>
                                <a href="#">Sport</a>
                            </li>
                            <li>
                                <a href="#">Artists</a>
                            </li>
                            <li>
                                <a href="#">Soul</a>
                            </li>
                            <li>
                                <a href="#">Hospitality</a>
                            </li>
                            <li>
                                <a href="#">Beauty</a>
                            </li>
                            <li>
                                <a href="#">Family</a>
                            </li>
                            <li>
                                <a href="#">Health</a>
                            </li>
                            <li>
                                <a href="#">Others</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="footer-item-container">
                    <h3>Explore The Hype</h3>
                    <ul>
                        <li>
                            <a href="#">Events</a>
                        </li>
                        <li>
                            <a href="#">Partners</a>
                        </li>
                        <li>
                            <a href="#">About</a>
                        </li>
                        <li>
                            <a href="#">Blog</a>
                        </li>
                        <li>
                            <a href="#">For Providers</a>
                        </li>
                    </ul>
                </div>
                <div className="footer-item-container">
                    <h3>Download the app</h3>
                    <div className="downloadAppBtn">
                        <a href="#">
                            <img src={appStore} alt="" />
                        </a>
                    </div>
                    <div className="downloadAppBtn">
                        <a href="#">
                            <img src={googlePlay} alt="" />
                        </a>
                    </div>
                </div>
            </div>
            <div id="footer-bottom-part">
                <div id="footer-separator-line"></div>
                <div id="test">
                    <span>2024 behyve. All rights reserved.</span>
                    <a href="#">Careers</a>
                    <a href="#">Privacy Policy</a>
                    <a href="#">Terms of Services</a>
                    <a href="#">Cookies Settings</a>
                </div>
            </div>
        </div>
    );
}

export default Footer;
