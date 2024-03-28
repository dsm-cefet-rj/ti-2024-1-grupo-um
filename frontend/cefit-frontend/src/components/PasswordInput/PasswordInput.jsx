import "./PasswordInput.css";

function PasswordInput(){
    return(
        <div className="mb-3">
            <label for="exampleInputPassword1" className="form-label" style={{color:"black"}}>Senha</label>
            <input type="password" className="form-control bg-light input-cefit" id="exampleInputPassword1" placeholder="Insira sua senha aqui"/>
        </div>
    );
}

export default PasswordInput;