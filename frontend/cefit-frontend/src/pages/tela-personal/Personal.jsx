import Navbar from "../../components/Navbar/Navbar";
import "././../tela-personais/Personais.css";

function Personal() {

  const barra = "100";

  return (
    <div className="">
      <Navbar/>
        <div className="card mt-4 m-auto mb-4" id="card-block-personal">
          <a href="page2.html" className="back-button">
            <span className="seta"><i className="fas fa-arrow-left"></i></span>
          </a>
          {/* inicio fulaninho */}
          <div className="card-body text-center m-auto">
            <img src="images/user.png" alt="avatar"
              className="rounded-circle img-fluid" style={{ width: "150px" }} />
            <h5 className="my-3">Fulaninho</h5>
            <div className="margin-bottom-10px mb-4">
              <img className="imagem-estrela" src="images/star.png" alt="imagem estrela" />
              <img className="imagem-estrela" src="images/star.png" alt="imagem estrela" />
              <img className="imagem-estrela" src="images/star.png" alt="imagem estrela" />
            </div>
            <div className="d-flex justify-content-center mb-2">
              <button type="button" className="btn btn-primary">Favoritar</button>
              <button type="button" className="btn btn-outline-primary ms-1">Enviar mensagem</button>
            </div>
          </div>
        </div>
          {/* fim fulaninho */}

          {/* inicio desc fulaninho */}
        <div className="card m-auto mb-4" id="card-block-personal">
          <div className="card-body">
            <div className="row">
              <div className="col-sm-3">
                <p className="mb-0">Nome completo</p>
              </div>
              <div className="col-sm-9">
                <p className="text-muted mb-0">Fulaninho de Tal da Silva</p>
              </div>
            </div>
            <hr />
            <div className="row">
              <div className="col-sm-3">
                <p className="mb-0">Idade</p>
              </div>
              <div className="col-sm-9">
                <p className="text-muted mb-0">32</p>
              </div>
            </div>
            <hr />
            <div className="row">
              <div className="col-sm-3">
                <p className="mb-0">Formação acadêmica</p>
              </div>
              <div className="col-sm-9">
                <p className="text-muted mb-0">Educação Física - PUC</p>
                <p className="text-muted mb-0">Nutrição - UFRJ</p>
              </div>
            </div>
            <hr />
            <div className="row">
              <div className="col-sm-3">
                <p className="mb-0">Cidade</p>
              </div>
              <div className="col-sm-9">
                <p className="text-muted mb-0">Rio de Janeiro, RJ</p>
              </div>
            </div>
          </div>
        </div>
      
        {/* fim desc fulaninho */}
        {/* inicio biografia */}
        <div className="card m-auto mb-4" id="card-block-personal">
          <div className="card-body">
            <p className="mb-4" style={{ fontWeight: "bold" }}>Biografia</p>
            <p className="mb-1" style={{ fontSize: "0.85rem" }}>Meu nome é Fulaninho de Tal. Sou um personal trainer apaixonado por fitness e bem-estar. Nasci e cresci em São Paulo e desde pequeno sempre fui ligado aos esportes.
              Depois de me formar em Educação Física pela Universidade de São Paulo, mergulhei de cabeça no mundo do treinamento personalizado. Minha abordagem é prática e focada em resultados. Quero ajudar meus clientes a atingirem seus objetivos de forma eficaz.
              Acredito em equilíbrio. Meu método combina treinamento de força, cardio e nutrição para garantir resultados duradouros. Minha energia contagiante e meu compromisso com o sucesso dos meus clientes são o que me destacam.
              Fora do trabalho, adoro viver um estilo de vida saudável e estou sempre em busca de desafios para mim e para os outros. Com minha paixão pelo fitness e minha dedicação aos meus clientes, continuo fazendo a diferença aqui em São Paulo e além.</p>
          </div>
        </div>
        {/* fim biografia */}
        
        {/* inicio stats fulaninho */}
        <div className="m-auto mb-4" id="card-block-personal">
            <div className="card mb-4">
              <div className="card-body">
                <p className="mb-4">Especialidades</p>
                <p className="mb-1" style={{ fontSize: ".77rem" }}>Emagrecimento</p>
                <div className="progress rounded" style={{ height: "5px" }}>
                  <div className="progress-bar" role="progressbar" style={{ width: `${barra}%` }} aria-valuenow={barra}
                    aria-valuemin="0" aria-valuemax="100"></div>
                </div>
                <p className="mt-4 mb-1" style={{ fontSize: ".77rem" }}>Ganho de massa muscular</p>
                <div className="progress rounded" style={{ height: "5px" }}>
                  <div className="progress-bar" role="progressbar" style={{ width: "72%" }} aria-valuenow="72"
                    aria-valuemin="0" aria-valuemax="100"></div>
                </div>
                <p className="mt-4 mb-1" style={{ fontSize: ".77rem" }}>Forma física</p>
                <div className="progress rounded" style={{ height: "5px" }}>
                  <div className="progress-bar" role="progressbar" style={{ width: "89%" }} aria-valuenow="89"
                    aria-valuemin="0" aria-valuemax="100"></div>
                </div>
                <p className="mt-4 mb-1" style={{ fontSize: ".77rem" }}>Condicionamento físico</p>
                <div className="progress rounded" style={{ height: "5px" }}>
                  <div className="progress-bar" role="progressbar" style={{ width: "55%" }} aria-valuenow="55"
                    aria-valuemin="0" aria-valuemax="100"></div>
                </div>
                <p className="mt-4 mb-1" style={{ fontSize: ".77rem" }}>Esportes</p>
                <div className="progress rounded mb-2" style={{ height: "5px" }}>
                  <div className="progress-bar" role="progressbar" style={{ width: "66%" }} aria-valuenow="66"
                    aria-valuemin="0" aria-valuemax="100"></div>
                </div>
              </div>
            </div>
        </div>
        {/* fim desc fulaninho */}
    </div>
  );
}

export default Personal;