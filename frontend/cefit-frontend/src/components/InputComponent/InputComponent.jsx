import "./InputComponent.css";

function InputComponent(props){
    return (
        <div class={props.classes}>
            <label for={props.id} class="form-label" style={{color:"black"}}>{props.text}</label>
            <input type={props.type} class="form-control bg-light input-cefit" id={props.id} placeholder={props.placeholder}/>
        </div>
        /* 
        <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label" style="color: black">Email</label>
            <input type="email" class="form-control bg-light input-cefit" id="exampleInputEmail1" placeholder="seuemail@gmail.com" aria-describedby="emailHelp">
        </div>
        <div class="mb-3">
            <label for="nameInput" class="form-label" style="color: black">Nome Completo</label>
            <input class="form-control input-cefit" type="text" placeholder="Seu Nome Completo Aqui" id="nameInput"aria-label="default input example">
        </div>
        <div class="mb-3">
            <label for="CPFInput" class="form-label" style="color: black">CPF</label>
            <input class="form-control input-cefit" type="text" placeholder="Seu CPF Aqui" id="CPFInput" aria-label="default input example">
        </div>
        <div class="form-group mb-3" style="color:black">
            <label for="age" class="form-label">Data de nascimento:</label>
            <input type="date" class="form-control input-cefit" id="age">
        </div>
        <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label" style="color: black">Senha</label>
            <input type="password" class="form-control bg-light input-cefit" id="exampleInputPassword1" placeholder="Insira sua senha aqui">
        </div> */
    );
}


export default InputComponent;