
function TextAreaInput ({classes, id, text, type, placeholder}) {
    return (
        <div className={classes}>
            <label htmlFor={id} className="form-label">{text}</label>
            <textarea type={type} className="form-control w-100 border-custom" id={id} placeholder={placeholder}/>
        </div>
    );
}

export default TextAreaInput