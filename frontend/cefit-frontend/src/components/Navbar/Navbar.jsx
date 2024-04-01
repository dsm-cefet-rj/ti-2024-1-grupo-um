import "./styles_nav.css";
import logo from "./logo.png";
import { Link } from "react-router-dom";

function Navbar(){
    return(
        <>
        <nav class="navbar navbar-expand-lg fixed-top">
            <div class="container-fluid">
                {/* logo */}
                <a class="navbar-brand me-auto" href="#"><img src={logo} alt="logo" class="logo-img"/></a>

                <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                    <div class="offcanvas-header">
                        <h5 class="offcanvas-title" id="offcanvasNavbarLabel"><img src={logo} alt="logo" class="logo-img"/></h5>
                        <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <div class="offcanvas-body">
                        <ul class="navbar-nav justify-content-center flex-grow-1 pe-3">
                            <li class="nav-item">
                                <a class="nav-link mx-lg-2" aria-current="page" href="/frontend/prototipo-html/index.html">Home</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link mx-lg-2 active" href="/frontend/prototipo-html/fit-area/fit.html">Área FIT</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link mx-lg-2" href="/frontend/prototipo-html/trainers-area/page2.html">Personais</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="d-flex">
                    <Link to="/" className="signup-button">Sign in</Link>
                    <Link to="/cadastro" className="signup-button">Sign up</Link>
                </div>
                <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
            </div>
        </nav>
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>
        </>
        
    )
}

export default Navbar;