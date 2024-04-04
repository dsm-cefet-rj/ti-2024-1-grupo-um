import Navbar from "../../components/Navbar/Navbar";
import FooterComp from "../../components/Footer/Footer";
import FormCreator from "../../components/FormCreator/formCreator";
import "./styles.css";
import { useDispatch, useSelector } from "react-redux";
import { addExercise } from "../../redux/exercises/slice";
import { addTraining } from "../../redux/trainings/slice"


function AddTreinos() {
    const dispatch = useDispatch();

    const handleAddExercise = () => {
        dispatch(
            addExercise(
                {
                    name: "Exercício extra",
                    description: "Descrição"
                }
            )
        )
    }

    const handleSubmitForm = (info) => {
        dispatch(
            addTraining(info)
        )
    }

    const formFields = [
        {
            component: "input",
            classes: "",
            id: "title",
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
                    id: "type",
                    value: "inferiores",
                    text: "Inferiores",
                },
                {
                    id: "type",
                    value: "superiores",
                    text: "Superiores",
                },
                {
                    id: "type",
                    value: "cardio",
                    text: "Cardio",
                },
                {
                    id: "type",
                    value: "natacao",
                    text: "Natação",
                },
                {
                    id: "type",
                    value: "crossfit",
                    text: "Crossfit",
                },
                {
                    id: "type",
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
                    <FormCreator fields={formFields} buttonText={"Salvar Treino"} buttonAction={handleSubmitForm}/>
                </div>
            </div>
            <FooterComp />
        </>
    )
}

export default AddTreinos;