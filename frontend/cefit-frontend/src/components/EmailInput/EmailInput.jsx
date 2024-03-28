import "./EmailInput.css";

function EmailInput(){
    return(
        <div className="mb-3">
            <label for="exampleInputEmail1" className="form-label" style={{color: "black"}}>Email</label>
            <input type="email" className="form-control bg-light input-cefit" id="exampleInputEmail1" placeholder="seuemail@gmail.com" aria-describedby="emailHelp"/>
        </div>
    );
}

export default EmailInput;