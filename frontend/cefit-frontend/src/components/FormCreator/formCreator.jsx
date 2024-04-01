import InputComponent from "../InputComponent/InputComponent";
import TextAreaInput from "../TextAreaInput/textArea";
import RadioInput from "../RadioInput/radioInput";
import SubmitButton from "../SubmitButton/SubmitButton";

function FormCreator({fields, buttonText}) {
    return(
        <form>
            {fields.map((field) => {
                switch(field.component){
                    case "input":
                        return <InputComponent classes={"form-group mb-3 " + field.classes} id={field.id} type={field.type} text={field.text} placeholder={field.placeholder} />;
                    case "textArea":
                        return <TextAreaInput  classes={"form-group mb-3 " + field.classes} id={field.id} type={field.type} text={field.text} placeholder={field.placeholder} />;
                    case "radio":
                        return <RadioInput classes={"form group mb-3 " + field.classes} id={field.id} text={field.text} options={field.options} name={field.name} />;
                    default:
                        return <p>{field.component} not available</p>;
                }
            })}
            <SubmitButton nomeButton={buttonText} />
        </form>
    )
}

export default FormCreator;