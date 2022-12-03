import './modal.scss'

export function Modal(props) {

    return (
        <div className='modal-wrapper'>
            <div className="modal">
                <div className='modal-header'>
                    <h1 className="modal-title">
                        {props.content}
                    </h1>
                    <button onClick={props.onClose}>X</button>
                </div>
            </div>
        </div>
    )
}