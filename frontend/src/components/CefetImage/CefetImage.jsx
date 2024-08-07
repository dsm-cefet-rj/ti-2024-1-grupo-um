import logo from "../../images/logo.png";
import loginPersonal from "../../pages/tela-login/LoginPersonal"
import "./CefetImage.css";

function CefetImage(color){
    return(
        <div className="cefit-logo text-center rounded-5 m-auto">
            <a href="/LoginPersonal">
                <img src={logo} alt="foto cefit" className="p-1" width="100%" height="100%"/>
            </a>
        </div>
    );
}

export default CefetImage;