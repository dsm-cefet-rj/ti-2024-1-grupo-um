import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import "./AreaFIT.css";
import imgfit from "./img-fit.png";
import FooterComp from "../../components/Footer/Footer";

function NotLoggedInAreaFIT(){
  
    return(
        <>
        <section id="hero" className="hero">
        <Navbar/>
            <div className="info d-flex align-items-center">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-6 text-center">
                        <h2 data-aos="fade-down"><span>Área FIT</span></h2>
                        <p className="line"></p>
                        <p data-aos="fade-up">Seu local ideal dedicado à saúde e ao condicionamento físico, onde os usuários podem montar seus próprios treinos personalizados de acordo com suas metas e preferências, além de visualizar treinos elaborados por profissionais. Com uma variedade de exercícios e opções de personalização, os usuários têm a liberdade de criar rotinas adaptadas às suas necessidades individuais, promovendo um estilo de vida ativo e saudável.</p>
                        <Link data-aos="fade-up" data-aos-delay="200" to={"/cadastro"} className="btn-get-started">Começar</Link>
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
                    <h2 class="display-4" id = "services-fit">Sua vida FIT em um só lugar</h2>
                    <h3 class="section-subheading text-muted">Conheça a Área FIT</h3>
                </div>
                <div class="row text-center">
                    <div class="col-md-3">
                        
                        <h3 class="info-title-fit">Monte seus treinos</h3>
                        <div className="beneficios">
                            <h5 class="info-title-fit">Empoderamento</h5>
                            <p class="text-muted">Ao assumir o controle do seu treinamento, você se torna mais autoconfiante e empoderado em relação à sua saúde e condicionamento físico.</p>
                            <h5 class="info-title-fit">Flexibilidade</h5>
                            <p class="text-muted">Montar seus próprios treinos oferece flexibilidade para ajustar o programa conforme necessário, levando em consideração compromissos pessoais, mudanças de horário e objetivos em evolução.</p>

                        </div>
                        
                    </div>
                    <div class="col-md-6">
                        <p><img className="areafit-img" src={imgfit} alt="areafit-img"/></p>
                        <h3 class="info-title-fit">Comece sua jornada FIT agora mesmo!</h3>
                        <p class="text-muted">Faça o seu cadastro e aproveite a Área FIT</p>
                        <Link data-aos="fade-up" data-aos-delay="200" to={"/cadastro"} className="btn-get-started">Começar</Link>
                    </div>
                    <div class="col-md-3">
                        
                        <h3 class="info-title-fit">Visualize seus treinos montados pelo personal</h3>
                        <p class="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.</p>
                    </div>
                    
                </div>
            </div>
        </section>
            <FooterComp />
        </>
    );
}

export default NotLoggedInAreaFIT;