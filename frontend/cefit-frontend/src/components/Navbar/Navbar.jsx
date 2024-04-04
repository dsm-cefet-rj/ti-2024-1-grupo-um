import "./styles_nav.css";
import logo from "../../images/logo.png";
import { Link } from "react-router-dom";

function Navbar(){
    return(
        <>
            <div className="nav-container">
                <nav className="navbar navbar-expand-lg fixed-top" id="navbar2">
                    <div className="container-fluid">
                        {/* logo */}
                        <a className="navbar-brand me-auto" href="#"><img src={logo} alt="logo" className="logo-img"/></a>

                        <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                            <div className="offcanvas-header">
                                <h5 className="offcanvas-title" id="offcanvasNavbarLabel"><img src={logo} alt="logo" className="logo-img"/></h5>
                                <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                            </div>
                            <div className="offcanvas-body">
                                <ul className="navbar-nav justify-content-center flex-grow-1 pe-3">
                                    <li className="nav-item">
                                        <Link className="nav-link mx-lg-2" aria-current="page" to={"/"}>Home</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link mx-lg-2" aria-current="page" to={"/areaFIT"}>Área FIT</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link mx-lg-2" aria-current="page" to={"/personais"}>Personais</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="d-flex">
                            <Link to="/login" className="signup-button">Sign in</Link>
                            <Link to="/cadastro" className="signup-button">Sign up</Link>
                        </div>
                        <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                    </div>
                </nav>
            </div>
        </>
        
    )
}

export default Navbar;