import "./InputComponent.css";
import { Formik, Form, Field, ErrorMessage } from "formik";

function InputComponentYup(props){
    const renderError = (message) => <p className="erro">{message}</p>;
    return (
        <div className={props.classes}>
            <label htmlFor={props.id} className="form-label" style={{color:"black"}}>{props.text}</label>
            <Field
                name={props.name}
                type={props.type}
                id={props.id}
                className="form-control bg-light input-cefit w-100"
                placeholder={props.placeholder}
            />
            <ErrorMessage name={props.name} render={renderError} />
        </div>
    );
}
export default InputComponentYup;