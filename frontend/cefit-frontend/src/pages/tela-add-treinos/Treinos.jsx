import Navbar from "../../components/Navbar/Navbar";
import FooterComp from "../../components/Footer/Footer";
import FormCreator from "../../components/FormCreator/formCreator";
import "./styles.css";
import { useDispatch, useSelector } from "react-redux";
import { add } from "../../redux/exercises/slice";


function AddTreinos() {
    const dispatch = useDispatch();

    const handleAddExercise = () => {
        dispatch(
            add(
                {
                    name: "Exercício extra",
                    description: "Descrição"
                }
            )
        )
    }

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
            items: useSelector(rootReducer => rootReducer.exercises),
            buttonText: "+ Exercício",
            listTitle: "Exercícios",
            buttonAction: handleAddExercise,
        }
    ]

    return (
        <>
            <Navbar />
            <div className="container form-card p-5">
                <div className="container mx-4 cefit-form">
                    <h2>Adicionar Novo Treino</h2>
                    <FormCreator fields={formFields} buttonText={"Salvar Treino"} buttonAction={() => {}}/>
                </div>
            </div>
            <FooterComp />
        </>
    )
}

export default AddTreinos;