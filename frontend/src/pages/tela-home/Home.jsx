import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import "./home.css";
import FooterComp from "../../components/Footer/Footer";
import "./trainer.png";
import areafit_icon from "./areafit_icon.png";
import personal_icon from "./trainer.png"
import {useSelector} from "react-redux";

function Home(){
    const currentUser = useSelector(rootReducer => rootReducer.user);
    return(
        <>
        <section id="hero" className="hero">
        <Navbar/>
            <div className="info d-flex align-items-center">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-6 text-center">
                        <h2 data-aos="fade-down">Bem vindo ao <span>CEFIT</span></h2>
                        <p className="line"></p>
                        <p data-aos="fade-up">Sua plataforma dedicada à conexão entre personal trainers e entusiastas do fitness. Aqui, você pode encontrar o personal ideal, criar seu próprio treino e acompanhar seu progresso, tudo em um só lugar. Transforme sua jornada fitness com o CEFIT hoje mesmo!</p>
                        <Link data-aos="fade-up" data-aos-delay="200" to={currentUser.logged ? "/areaFIT" : "/cadastro"} className="btn-get-started">Começar</Link>
                        </div>
                    </div>
                </div>
            </div>
        
            <div id="hero-carousel" className="carousel slide" data-bs-ride="carousel" data-bs-interval="5000">
                <div className="carousel-item active" style={{backgroundImage: `url('https://usercontent.one/wp/ignitetraininghub.se/wp-content/uploads/2022/09/25102022-_MS_6087-HDR-scaled.jpg')`}}></div>
                
                <div className="carousel-item" style={{backgroundImage: `url(https://www.primalstrength.com/cdn/shop/files/gymdesign_render_Two_collumn_grid_cb1b5850-fa8e-4a7b-a2b3-190c2e45facd.jpg?v=1680719688&width=1500)`}}></div>
                
                <div className="carousel-item" style={{backgroundImage: `url(https://wallpapercave.com/wp/wp12424948.jpg)`}}></div>
                
                <div className="carousel-item" style={{backgroundImage: `url(https://sweatybusiness.se/wp-content/uploads/2022/11/Ignite_Training_Hub_Stockholm_Skillrun_Technogym_hiit-1024x683.jpeg)`}}></div>
                
                <a className="carousel-control-prev" href="#hero-carousel" role="button" data-bs-slide="prev">
                <span className="carousel-control-prev-icon bi bi-chevron-left" aria-hidden="true"></span>
                </a>
        
                <a className="carousel-control-next" href="#hero-carousel" role="button" data-bs-slide="next">
                <span className="carousel-control-next-icon bi bi-chevron-right" aria-hidden="true"></span>
                </a>
            </div>
        </section>
        {/*servicos*/}
        <section className="page-section" id="services">
            <div className="container">
                <div className="text-center">
                    <h2 className="display-4" id = "services">Serviços</h2>
                    <h3 className="section-subheading text-muted">Conheça o CEFIT</h3>
                </div>
                <div className="row text-center">
                    <div className="col-md-6">
                        <p><img className="areafit-icon" src={areafit_icon} alt="areafit-icon"/></p>
                        <h4 className="info-title"><Link to="/areaFIT"> Área FIT</Link></h4>
                        <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.</p>
                    </div>
                    <div className="col-md-6">
                        <p><img className="personal-icon" src={personal_icon} alt="personal-icon"/></p>
                        <h4 className="info-title"><Link to="/personais">Personais</Link></h4>
                        <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.</p>
                    </div>
                    
                </div>
            </div>
        </section>
        <FooterComp />
        </>
    )
}

export default Home;