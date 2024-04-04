import "./styles.css"
import { Link } from "react-router-dom";

function FormList({items, listTitle, buttonText, buttonAction, getList }) {
    const handleAddItem = (event) => {
        event.preventDefault();
        buttonAction();
        getList(items);
    }

    return(
        <>
            <div className="my-4">
                <span className="d-flex justify-content-between mb-4 list-header">
                    <h3 className="list-title">{listTitle}</h3>
                    <button className="btn btn-primary list-button" onClick={handleAddItem}>{buttonText}</button>
                </span>
                <div className="list-group cefit-list">
                    {items.map((item) => {
                        return (
                            <Link to="#" className="list-group-item list-group-item-action border-custom" key={items.findIndex((element) => element === item)}>
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