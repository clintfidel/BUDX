import { useState } from "react";
import { Link } from "react-router-dom";
import { routes } from "../routes"

function Modal() {
    const [checkboxMarked, setCheckboxMarked] = useState(false);
    const [showForm, setShowForm] = useState(true);

    const closeModal = () => {
        const modal = document.querySelector(".modal");
        modal.classList.add("hide");
    }

    return (
        <div className="modal">
            <div className="modal-content text-center">
                <p className="modal-content__info">This website requires you to be 18 years or older to enter.</p>
                {
                    showForm
                ?
                    <>
                        <h1 className="modal-content__question">Are you over 18 years?</h1>
                        <div className="modal-content__buttons">
                            <button className="btn" onClick={closeModal} disabled={!checkboxMarked}>YES, I am</button>
                            <button className="btn" onClick={() => setShowForm(false)}>NO, I’m not</button>
                        </div>
                        <div className="modal-content__checkbox">
                            <input type="checkbox" onClick={() => setCheckboxMarked(!checkboxMarked)} />
                            <p>I have read and understood the 
                                <Link to={routes.TermsAndConditions}>
                                    Terms, Conditions & Privacy Policy 
                                </Link>
                                for this site.
                            </p>
                        </div>
                    </>
                :
                    <h2 className="modal-content__decline">
                        Sorry! You can't access this site because you are under age.
                    </h2>
                }
            </div>
        </div>
    )
}

export default Modal;