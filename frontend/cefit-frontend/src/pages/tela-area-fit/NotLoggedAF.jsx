import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import TreinoCard from "../../components/TreinosCard/TreinosCard";

function NotLoggedInAreaFIT(){
    const Treinos = [
        {
            title: "Treino A",
            description: "Pernas",
            type: "inferiores"
        },
        {
            title: "Treino B",
            description: "Costas",
            type: "superiores"
        },
        {
            title: "Treino C",
            description: "Esteira",
            type: "cardio"
        },
        {
            title: "Treino D",
            description: "Natação",
            type: "natacao"
        }
    ];
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
                        {/* <a data-aos="fade-up" data-aos-delay="200" href="#get-started" className="btn-get-started">Começar</a> */}
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
        
        <h1 className="display-4">Exemplos</h1>
        <div className="container mt-2" id="container-card">
        <div className="row justify-content-center"id="row-card">
          
                {Treinos.map((treino, index) => (
                  <div key={index} className="col mb-3">
                    <TreinoCard
                      title={treino.title}
                      description={treino.description}
                      type={treino.type}
                    />
                  </div>)
                  )
                }
          
        </div>
    </div>
        </>
    )
}

export default NotLoggedInAreaFIT;