import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import "./Personais.css";
import FooterComp from "../../components/Footer/Footer";
import personal from "./images/personal-trainer.png";
import consultoria from "./images/consultor.png";


function NotLoggedInPersonais(){
  
    return(
        <>
        <section id="hero" className="hero">
        <Navbar/>
            <div className="info d-flex align-items-center">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-6 text-center">
                        <h2 data-aos="fade-down"><span>Personais</span></h2>
                        <p className="line"></p>
                        <p data-aos="fade-up">O local ideal dedicado a você que busca por um personal adequado e qualificado para iniciar a sua jornada FIT.</p>
                        {/* <a data-aos="fade-up" data-aos-delay="200" href="#get-started" className="btn-get-started">Começar</a> */}
                        <Link data-aos="fade-up" data-aos-delay="200" to={"/cadastro"} className="btn-get-started">Começar</Link>
                        <div>
                        <Link data-aos="fade-up" data-aos-delay="200" to={"/cadastroPersonal"} className="btn-get-started">Quero ser um personal CEFIT</Link>
                        </div>
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
         {/*servicos areafit*/}
         <section class="page-section" id="services">
            <div class="container">
                <div class="text-center">
                    <h2 class="display-4" id = "services-fit">Encontre seu personal ideal</h2>
                    <h3 class="section-subheading text-muted">Conheça os personais CEFIT</h3>
                </div>
                <div class="row text-center">
                    <div class="col-md-6">
                        <p><img className="personal-icon" src={consultoria} alt="consult"/></p>
                        <h3 class="info-title-fit">Treinos montados</h3>
                        <div className="beneficios">
                            <p class="text-muted">Ao solicitar uma consultoria com um valor acessível, o personal recebe sua Anamnese e monta seus treinos com base nos seus objetivos!</p>
                            <Link data-aos="fade-up" data-aos-delay="200" to={"/cadastro"} className="btn-get-started">Começar minha jornada FIT</Link>

                        </div>
                        
                    </div>
                    
                    <div class="col-md-6">
                    <p><img className="personal-icon" src={personal} alt="personal-icon"/></p>
                        <h3 class="info-title-fit">Seja um personal CEFIT</h3>
                        <p class="text-muted">Ao se tornar um personal CEFIT, você pode possuir uma quantidade ilimitada de alunos por uma taxa que cabe no seu bolso!</p>
                        <Link data-aos="fade-up" data-aos-delay="200" to={"/cadastroPersonal"} className="btn-get-started">Quero ser um personal CEFIT</Link>
                    </div>
                    
                </div>
            </div>
        </section>
      
            <FooterComp />
        </>
    );
}

export default NotLoggedInPersonais;