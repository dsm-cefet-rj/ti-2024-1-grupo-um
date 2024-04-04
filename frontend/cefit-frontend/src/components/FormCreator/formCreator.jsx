import InputComponent from "../InputComponent/InputComponent";
import TextAreaInput from "../TextAreaInput/textArea";
import RadioInput from "../RadioInput/radioInput";
import FormList from "../FormList/formList";

function FormCreator({fields, buttonText, buttonAction}) {
    const handleSubmitForm = (event) => {
        event.preventDefault();
        buttonAction();
    }

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
                    case "formList":
                        return <FormList items={field.items} listTitle={field.listTitle} buttonText={field.buttonText} buttonAction={field.buttonAction}/>
                    default:
                        return <p>{field.component} not available</p>;
                }
            })}
            <div className="d-flex justify-content-center">
                <button className="btn btn-primary" onClick={handleSubmitForm}>{buttonText}</button>
            </div>
        </form>
    )
}

export default FormCreator;