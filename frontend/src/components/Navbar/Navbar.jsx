import "./styles_nav.css";
import logo from "../../images/logo.png";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import rootReducer from "../../redux/root-reducer";
import { logoutUser } from "../../redux/user/slice";
import { clearExercises } from "../../redux/exercises/slice";
import { clearPersonals } from "../../redux/personal/slice";
import { clearAnamnese } from "../../redux/anamnese/slice";
import { clearTrainings } from "../../redux/trainings/slice";
import { clearAlunos } from "../../redux/aluno/slice";



function Navbar() {
    const user = useSelector(rootReducer => rootReducer.user);
    const dispatch = useDispatch();
    const currentUserNavbar = user.logged ? user.user : null;
    const currentPersonalNavbar = user.loggedPersonal ? user.personal : null;

    function Logout() {
        dispatch(logoutUser({token: currentUserNavbar ? user.logged : user.loggedPersonal}));
        dispatch(clearExercises());
        dispatch(clearPersonals());
        dispatch(clearAnamnese());
        dispatch(clearTrainings());
        dispatch(clearAlunos());
    }
    return (
        <>
            <div className="nav-container">
                <nav className="navbar navbar-expand-lg fixed-top" id="navbar2">
                    <div className="container-fluid">
                        {/* logo */}
                        <a className="navbar-brand me-auto" href="/#"><img src={logo} alt="logo" className="logo-img" /></a>

                        <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                            <div className="offcanvas-header">
                                <h5 className="offcanvas-title" id="offcanvasNavbarLabel"><img src={logo} alt="logo" className="logo-img" /></h5>
                                <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                            </div>
                            <div className="offcanvas-body">
                                <ul className="navbar-nav justify-content-center flex-grow-1 pe-3">
                                    <li className="nav-item">
                                        <Link className="nav-link mx-lg-2" aria-current="page" to={"/"}>Home</Link>
                                    </li>
                                    {!currentPersonalNavbar ? (
                                        <>
                                            <li className="nav-item">
                                                <Link className="nav-link mx-lg-2" aria-current="page" to={`/areaFIT`}>Área FIT</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className="nav-link mx-lg-2" aria-current="page" to={"/personais"}>Personais</Link>
                                            </li>
                                            {currentUserNavbar && (
                                                <>
                                                    <li className="nav-item">
                                                        <Link className="nav-link mx-lg-2" aria-current="page" to={"/anamnese"}>Anamnese</Link>
                                                    </li>
                                                    <li className="nav-item">
                                                        <Link to={"/perfil"} className="nav-link">Perfil</Link>
                                                    </li>
                                                </>
                                            )}
                                        </>
                                    ) : (
                                        <>
                                            <li className="nav-item">
                                                <Link to={"/perfilPersonal"} className="nav-link">Perfil</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link to={"/meusAlunos"} className="nav-link">Meus Alunos</Link>
                                            </li>
                                        </>
                                    )}
                                </ul>
                            </div>
                        </div>
                        {
                            (currentUserNavbar || currentPersonalNavbar) ? (
                                <div>
                                    <span>Olá, {currentUserNavbar?.nome || currentPersonalNavbar?.nome}! </span>
                                    <button to="/login" className="signup-button" type="button" onClick={Logout}>Logout</button>
                                </div>
                            ) : (
                                <div className="d-flex">
                                    <Link to="/login" className="signup-button">Sign In</Link>
                                    <Link to="/cadastro" className="signup-button">Sign Up</Link>
                                </div>
                            )

                        }

                        <button className="navbar-toggler ml-auto custom-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                    </div>
                </nav>
            </div>
        </>

    )
}

export default Navbar;