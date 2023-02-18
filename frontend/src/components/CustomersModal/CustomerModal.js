import './CustomersModal.css'
import ReactDOM from "react-dom/client";

const CustomerModal = (props) => {

    const showHideClassName = props.show ? "modal display-block" : "modal display-none"

    const modalForm = () => {
        return (
            <form>
                <div>
                    <label>Kundnummer:</label>
                    <input type="text"></input>
                </div>
                <div>
                    <label>Organisationsnummer:</label>
                    <input type="text"/>
                </div>
            </form>
        )
    }


    return (
        <div className={showHideClassName}>
            {modalForm()}
        </div>)
}
export default CustomerModal;
