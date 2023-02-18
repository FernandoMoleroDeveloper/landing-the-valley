import "./Header.css"
import Link from "./Links/Link"
import Logo from "./Logo/Logo"

const Header = () => {
    return <div className="header">
        <div className="link"> 
            <Link name="Facebook" nav="https://es-la.facebook.com/TheValleyDBS/"></Link>
            <Link name="Instagram" nav="https://www.instagram.com/thevalleydbs/"></Link>
            <Link name="Twitter" nav="https://twitter.com/TheValleyDBS"></Link>
        </div>
            <Logo></Logo>
        <div className="link">
            <Link name="Docu React" nav="#"></Link>
            <Link type="btn" name="Ir a The Valley" nav="https://thevalley.es/"></Link>
        </div>
       
       
    </div>
}

export default Header

