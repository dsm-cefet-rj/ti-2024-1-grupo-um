import cefit from "./logo.png";
import "./CefetImage.css";

function CefetImage(){
    return(
        <div className="cefit-logo text-center rounded-5 m-auto">
            <img src={cefit} alt="foto cefit" className="p-1" width="100%" height="100%"/>
        </div>
    );
}

export default CefetImage;