import "./InputComponent.css";

//INSTRUÇOES PROPS DO COMPONENTE:

//props.classes -> Carrega todas as classes do bootstrap / css que o input deve ter.
//props.id -> Define o id tanto da label, quanto to input para associação.
//props.type -> Define o tipo do input (email, text, date, etc...) do bootstrap.
//props.text -> texto que vai ser exibido no label.
//props.placeholder -> texto de placeholder dentro do input.
function InputComponent(props){
    return (
        <div class={props.classes}>
            <label for={props.id} class="form-label" style={{color:"black"}}>{props.text}</label>
            <input type={props.type} class="form-control bg-light input-cefit" id={props.id} placeholder={props.placeholder}/>
        </div>
    );
}

//exemplos de inputs html + css bootstrap
{/* <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label" style="color: black">Email</label>
        <input type="email" class="form-control bg-light input-cefit" id="exampleInputEmail1" placeholder="seuemail@gmail.com" aria-describedby="emailHelp">
    </div>
    <div class="mb-3">
        <label for="nameInput" class="form-label" style="color: black">Nome Completo</label>
        <input type="text" class="form-control input-cefit"  id="nameInput" placeholder="Seu Nome Completo Aqui" aria-label="default input example">
    </div> */}


export default InputComponent;