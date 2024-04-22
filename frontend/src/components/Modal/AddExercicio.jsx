
import "./modal.css";
import FormCreator from "../../components/FormCreator/formCreator";
import { useDispatch } from "react-redux";
import { addExercise } from "../../redux/exercises/slice";

import InputComponentYup from "../../components/InputComponent/InputComponenteYup";

import * as Yup from "yup";
import { Formik, Form } from "formik";

function Modal(props) {
    const dispatch = useDispatch();

    const { setModal, idForm } = props;

    const handleSubmitForm = (info) => {
        dispatch(
            addExercise({ ...info, idForm })
        )
        setModal(false);
    }
    const initialValues = {
        name: "",
        series: "",
        peso: "",
        observacoes: "",
    }
    const validationSchema = Yup.object({
        name: Yup.string().required("Esse campo é obrigatório"),
        series: Yup.string().required("Esse campo é obrigatório.").matches(/^\d{0,2}x\d{0,2}$/, "Deve ser no formato 00x00"),
        peso: Yup.number(),
        observacoes: Yup.string(),
    })

    return (
        <>
            <div className="modal-overlay">
                <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={(values) => {
                        handleSubmitForm(values)
                    }}
                >
                    {({ isValid }) => (
                        <Form>
                            <div className="modal" id="modal">
                                <h2 id="titulo-form">Adicionar novo exercício</h2>
                                <InputComponentYup classes="mt-3" id="nameInput" name="name" text={<b>Nome do exercício:</b>} type="string" placeholder="Digite o nome do exercício" />
                                <InputComponentYup classes="mt-3" id="seriesInput" name="series" text={<b>Séries:</b>} type="string" placeholder="Séries x repetições ou duração (min)" />
                                <InputComponentYup classes="mt-3" id="pesoInput" name="peso" text={<b>Carga:</b>} type="number" placeholder="Carga utilizada (kg)" />
                                <InputComponentYup classes="mt-3" id="observacoesInput" name="observacoes" text={<b>Observações:</b>} type="string" placeholder="Ajuste do banco, descanso, etc..." />

                                <span className="modal-close" id="close-modal" onClick={() => { setModal(false) }}>
                                    &#10005; {/* HTML code for a multiplication sign */}
                                </span>
                                <div className="mt-3 d-flex justify-content-center">
                                    <button className="btn-submit" type="submit" disabled={!isValid}>Salvar exercício</button>
                                </div>
                            </div>


                        </Form>
                    )}

                </Formik>
            </div>
        </>
    );
}
export default Modal;