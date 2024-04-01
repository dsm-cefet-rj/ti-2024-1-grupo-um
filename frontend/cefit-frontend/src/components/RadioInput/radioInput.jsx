import "./styles.css"

function RadioInput({classes, id, text, options, name}) {
    return (
        <div className={classes}>
            <label for={id} className="form-label">{text}</label>
            <div id={id}>
                {options.map((option) => {
                    return(<div className="form-check">
                        <input className="form-check-input border-custom" type="radio" name={name} id={option.id} value={option.value} />
                        <label className="form-check-label" for={option.id} >
                            {option.text}
                        </label>
                    </div>)
                })}
            </div>
            
        </div>
    )
}

export default RadioInput;