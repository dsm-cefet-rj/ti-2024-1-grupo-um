import InputComponent from "../InputComponent/InputComponent";
import TextAreaInput from "../TextAreaInput/textArea";
import RadioInput from "../RadioInput/radioInput";
import FormList from "../FormList/formList";
import "./styles.css"

import { useState } from "react";

function FormCreator({fields, buttonText, buttonAction}) {

    
    const [infos, setInfos] = useState({});
    

    const handleSubmitForm = (event) => {
        event.preventDefault();
        buttonAction(infos);
    }

    const getItems = (items) => {
        setInfos({...infos, "items": items})
    }

    const handleChange = (event) => {
        setInfos({...infos, [event.target.id]: event.target.value})
    }

    return(
        <form>
            {fields.map((field) => {
                switch(field.component){
                    case "input":
                        return <InputComponent classes={"form-group mb-3 " + field.classes} id={field.id} type={field.type} text={field.text} placeholder={field.placeholder} onChange={handleChange} />;
                    case "textArea":
                        return <TextAreaInput  classes={"form-group mb-3 " + field.classes} id={field.id} type={field.type} text={field.text} placeholder={field.placeholder} onChange={handleChange}/>;
                    case "radio":
                        return <RadioInput classes={"form group mb-3 " + field.classes} id={field.id} text={field.text} options={field.options} name={field.name} onChange={handleChange}/>;
                    case "formList":
                        return <FormList items={field.items} listTitle={field.listTitle} buttonText={field.buttonText} buttonAction={field.buttonAction} getList={getItems}/>
                    default:
                        return <p>{field.component} not available</p>;
                }
            })}
            <div className="d-flex justify-content-center">
                <button className="btn-submit" onClick={handleSubmitForm}>{buttonText}</button>
            </div>
        </form>
    )
}

export default FormCreator;