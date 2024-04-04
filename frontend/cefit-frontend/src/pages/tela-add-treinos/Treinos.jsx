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
            id: "description",
            type: "text",
            text: <b>Descrição do Treino:</b>,
            placeholder: "Digite a descrição do treino",
        },
        {
            component: "radio",
            classes: "",
            id: "type",
            name: "training-type",
            text: <b>Tipo do Treino:</b>,
            options: [
                {
                    id: "type-option1",
                    value: "snferiores",
                    text: "Inferiores",
                },
                {
                    id: "type-option2",
                    value: "superiores",
                    text: "Superiores",
                },
                {
                    id: "type-option3",
                    value: "cardio",
                    text: "Cardio",
                },
                {
                    id: "type-option4",
                    value: "natacao",
                    text: "Natação",
                },
                {
                    id: "type-option5",
                    value: "crossfit",
                    text: "Crossfit",
                },
                {
                    id: "type-option6",
                    value: "outro",
                    text: "Outro",
                },
            ],
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