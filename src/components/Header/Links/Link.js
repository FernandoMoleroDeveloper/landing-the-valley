import "./Link.css"

const Link = (props) => {

    return (
    <div className="link">
        <a className={props.type + " link_nav"} href={props.nav}>{props.name}</a>
    </div>
    )
}

export default Link