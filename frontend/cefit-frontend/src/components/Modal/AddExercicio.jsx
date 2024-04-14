
import "./modal.css";
import FormCreator from "../../components/FormCreator/formCreator";
import { useDispatch, useSelector } from "react-redux";
import { addExercise } from "../../redux/exercises/slice";
import { useNavigate } from "react-router-dom";



function Modal(props) {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmitForm = (info) => {
        dispatch(
            addExercise(info)
        )
        navigate("/add-treinos");
    }
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
    const formFields = [
        {
            component: "input",
            classes: "",
            id: "title",
            type: "text",
            text: <b>Nome do Exercício:</b>,
            placeholder: "Digite o nome do exercício",
        },
        {
            component: "input",
            classes: "",
            id: "description",
            type: "text",
            text: <b>Séries:</b>,
            placeholder: "Digite quantidade de séries",
        },
        {
            component: "input",
            classes: "",
            id: "description",
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
    const { onCloseButtonClick } = props;
    return (
        <>
            <div className="modal-overlay">
                <div className="modal" id="modal">
                    <h2>Adicionar novo exercício</h2>
                    <FormCreator fields={formFields} buttonText={"Salvar Exercício"} buttonAction={handleSubmitForm}/>
                    <span className="modal-close" id="close-modal" onClick={onCloseButtonClick}>
                    &#10005; {/* HTML code for a multiplication sign */}
                    </span>
                
                </div>
                
            </div>
        </>
    );
  }
export default Modal;