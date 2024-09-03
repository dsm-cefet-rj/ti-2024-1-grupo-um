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
                        <>
                            <input
                                type="file"
                                id={props.id}
                                className="form-control bg-light input-cefit w-100"
                                accept=".jpeg, .jpg, .png" // Aceitar apenas arquivos JPEG e PNG
                                onChange={(event) => {
                                    const file = event.currentTarget.files[0];
                                    form.setFieldValue(props.name, file);
                                }}
                            />
                            <ErrorMessage name={props.name} render={renderError} />
                        </>
                    )}
                </Field>
            ) : (
                <>
                    <Field
                        name={props.name}
                        type={props.type}
                        id={props.id}
                        className="form-control bg-light input-cefit w-100"
                        placeholder={props.placeholder}
                        maxLength={props.type === "text" && props.name === "CPF" ? "11" : undefined}
                        inputMode={props.name === "CPF" ? "numeric" : undefined}
                        pattern={props.name === "CPF" ? "\\d*" : undefined}
                        onInput={props.name === "CPF" ? (e) => e.target.value = e.target.value.replace(/\D/g, '') : undefined}
                    />
                    <ErrorMessage name={props.name} render={renderError} />
                </>
            )}
        </div>
    );
}

export default InputComponentYup;
