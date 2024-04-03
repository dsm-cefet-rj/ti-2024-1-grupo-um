import "./styles.css"
import { Link } from "react-router-dom";

function FormList({items, listTitle, buttonText, buttonAction }) {
    return(
        <>
            <div className="my-4">
                <span className="d-flex justify-content-between mb-4">
                    <h3 className="listTitle">{listTitle}</h3>
                    <button className="btn btn-primary" onClick={buttonAction}>{buttonText}</button>
                </span>
                <div className="list-group cefit-list">
                    {items.map((item) => {
                        return (
                            <Link to="#" className="list-group-item list-group-item-action">
                                <div className="d-flex w-100 flex-column">
                                    <h5 className="mb-1">{item.name}</h5>
                                    <small>{item.description}</small>
                                </div>
                            </Link>
                        )
                    })}
                </div>
            </div>
        </>
    )
}

export default FormList;