import Navbar from "../../components/Navbar/Navbar";
import FormCreator from "../../components/FormCreator/formCreator";
import constants from "./constants";

function Anamnese(){
    return(
        <>
        <Navbar/>
        <div className="container mt-4 px-5">
            <h2>Faça sua Anamnese</h2>
            <p>Para responder a anamnese, caso a resposta seja <b>Não</b> não é necessário preencher os campos de texto. Caso contrário, favor preencher o campo de texto.</p>
            <FormCreator fields={constants.formFields} buttonText="Salvar" />
        </div>
        </>
    )
}

export default Anamnese