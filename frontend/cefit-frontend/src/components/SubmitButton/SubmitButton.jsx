function SubmitButton(props){
    return(
        <div className="d-flex w-100  mt-3">
            <button type="submit" className="btn btn-primary w-100">{props.nomeButton}</button>
        </div>
    );
}

export default SubmitButton;