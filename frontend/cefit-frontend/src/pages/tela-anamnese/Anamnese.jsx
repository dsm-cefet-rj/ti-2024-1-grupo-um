import Navbar from "../../components/Navbar/Navbar";
import FormCreator from "../../components/FormCreator/formCreator";
import constants from "./constants";
import FooterComp from "../../components/Footer/Footer";
import './style.css'

function Anamnese(){
    return(
        <>
            <Navbar/>
            <div className="form-card p-5">
                <div className="container cefit-form">
                    <h2>Faça sua Anamnese</h2>
                    <p>Para responder a anamnese, caso a resposta seja <b>Não</b> não é necessário preencher os campos de texto. Caso contrário, favor preencher o campo de texto.</p>
                    <FormCreator fields={constants.formFields} buttonText="Salvar" />
                </div>
            </div>
            <FooterComp />
        </>
    )
}

export default Anamnese