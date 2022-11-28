

export function Modal(props) {

    return (
        <div className="modal">
            <button onClick={props.onClose}>X</button>
            <div className="modal-content">
                User Created !
            </div>
        </div>
    )
}