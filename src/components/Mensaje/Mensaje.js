import "./Mensaje.css"

const Mensaje = (props) => {

    return (
        <p className={props.type + " message_text"}>{props.text}</p>
    )
}

export default Mensaje