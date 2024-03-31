import "./styles_nav.css";
import logo from "./logo.png"

function Navbar(){
    return(
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
                    <a href="./../login-area/login.html" class="signin-button">Sign in</a>
                    <a href="./../sign-up-area/cadastro.html" class="signup-button">Sign up</a>
                </div>
                <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
            </div>
        </nav>
    )
}

export default Navbar;