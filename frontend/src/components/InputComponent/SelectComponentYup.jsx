import "./InputComponent.css";
import { Field, ErrorMessage } from "formik";

function SelectComponentYup(props) {
    const renderError = (message) => <p className="erro">{message}</p>;
    return (
        <div className={props.classes}>
            <label htmlFor={props.id} className="form-label" style={{ color: "black" }}>{props.text}</label>
            <Field
                name={props.name}
                as="select"
                id={props.id}
                className="form-control bg-light input-cefit w-100"
            >
                <option value={""}>Selecione uma opção</option>
                {props.options.map(option => (
                    <option key={option} value={option}>{option}</option>
                ))}
            </Field>
            <ErrorMessage name={props.name} render={renderError} />
        </div>
    );
}
export default SelectComponentYup;