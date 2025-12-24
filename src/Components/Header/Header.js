import "./Header.css";
function Header() {
    return (
        <div id="parent-header">
            <div className="header-left">
                <a className="header left-aligned-header-items" href="#">
                    DOWNLOAD THE APP
                </a>
                <a className="header left-aligned-header-items" href="#">
                    App Store
                </a>
                <a className="header left-aligned-header-items" href="#">
                    Google Play
                </a>
            </div>
            <div className="header-right">
                <a className="header right-aligned-header-items" href="#">
                    For Businesses
                </a>
                <a className="header right-aligned-header-items" href="#">
                    For Providers
                </a>
                <a className="header" id="login-button" href="#">
                    Login
                </a>
            </div>
        </div>
    );
}

export default Header;
