import "./InputComponent.css";
import { Field, ErrorMessage } from "formik";

function InputComponentYup(props) {
    const renderError = (message) => <p className="erro">{message}</p>;

    return (
        <div className={props.classes}>
            <label htmlFor={props.id} className="form-label" style={{ color: "black" }}>{props.text}</label>
            {props.type === "file" ? (
                <Field name={props.name}>
                    {({ field, form }) => (
                        <input
                            type="file"
                            id={props.id}
                            className="form-control bg-light input-cefit w-100"
                            onChange={(event) => {
                                form.setFieldValue(props.name, event.currentTarget.files[0]);
                            }}
                        />
                    )}
                </Field>
            ) : (
                <Field
                    name={props.name}
                    type={props.type}
                    id={props.id}
                    className="form-control bg-light input-cefit w-100"
                    placeholder={props.placeholder}
                    maxLength={props.type === "text" && props.name === "CPF" ? "11" : undefined} // Limita o CPF a 11 caracteres
                    inputMode={props.name === "CPF" ? "numeric" : undefined} // Teclado numérico para CPF
                    pattern={props.name === "CPF" ? "\\d*" : undefined} // Aceita apenas números para CPF
                    onInput={props.name === "CPF" ? (e) => e.target.value = e.target.value.replace(/\D/g, '') : undefined} // Apenas números
                />
            )}
            <ErrorMessage name={props.name} render={renderError} />
        </div>
    );
}

export default InputComponentYup;
