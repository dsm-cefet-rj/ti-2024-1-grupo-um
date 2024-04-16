
import "./modal.css";
import FormCreator from "../../components/FormCreator/formCreator";
import { useDispatch } from "react-redux";
import { addExercise } from "../../redux/exercises/slice";

function Modal(props) {
    const dispatch = useDispatch();

    const { setModal, idForm } = props;

    const handleSubmitForm = (info) => {
        dispatch(
            addExercise({...info, idForm})
        )
        setModal(false);
    }
    const formFields = [
        {
            component: "input",
            classes: "",
            id: "name",
            type: "text",
            text: <b>Nome do Exercício:</b>,
            placeholder: "Digite o nome do exercício",
        },
        {
            component: "input",
            classes: "",
            id: "series",
            type: "text",
            text: <b>Séries:</b>,
            placeholder: "Digite quantidade de séries",
        },
        {
            component: "input",
            classes: "",
            id: "peso",
            type: "text",
            text: <b>Repetições:</b>,
            placeholder: "Digite quantidade de repetições",
        },
        {
            component: "textArea",
            classes: "",
            id: "observacoes",
            type: "text",
            text: <b>Observações:</b>,
            placeholder: "Exemplo: ajuste do banco, pausa, descanso",
        }
    ]
    return (
        <>
            <div className="modal-overlay">
                <div className="modal" id="modal">
                    <h2>Adicionar novo exercício</h2>
                    <FormCreator fields={formFields} buttonText={"Salvar Exercício"} buttonAction={handleSubmitForm}/>
                    <span className="modal-close" id="close-modal" onClick={() => {setModal(false)}}>
                    &#10005; {/* HTML code for a multiplication sign */}
                    </span>
                </div>
                
            </div>
        </>
    );
  }
export default Modal;