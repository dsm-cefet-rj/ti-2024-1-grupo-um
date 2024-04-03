import Navbar from "../../components/Navbar/Navbar";
import FormCreator from "../../components/FormCreator/formCreator";
import "./styles.css";
import { useSelector } from "react-redux";

const formFields = [
    {
        component: "input",
        classes: "",
        id: "nomeTreino",
        type: "text",
        text: <b>Nome do Treino:</b>,
        placeholder: "Digite o nome do treino",
    },
    {
        component: "input",
        classes: "",
        id: "dataInicio",
        type: "date",
        text: <b>Data de Início:</b>,
        placeholder: "",
    },
    {
        component: "input",
        classes: "",
        id: "dataFim",
        type: "date",
        text: <b>Data de Fim:</b>,
        placeholder: "",
    },
    {
        component: "textArea",
        classes: "",
        id: "observacoes",
        type: "text",
        text: <b>Observações:</b>,
        placeholder: "Digite observações sobre o treino",
    },
    {
        component: "formList",
        items: [],
        buttonText: "+ Exercício",
        listTitle: "Exercícios",
        buttonAction: () => {},
    }
]

function setListItems(items) {
    formFields.find((field) => field.component === "formList").items = items;
}

function AddTreinos() {
    setListItems(useSelector(rootReducer => rootReducer.exercisesReducer));

    return (
        <>
            <Navbar />
            <div className="form-card p-5">
                <div className="container mx-4 cefit-form">
                    <h2>Adicionar Novo Treino</h2>
                    <FormCreator fields={formFields} buttonText={"Salvar Treino"}/>
                </div>
            </div>
        </>
    )
}

export default AddTreinos;