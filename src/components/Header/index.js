import { Link } from "react-router-dom";
import style from "./Header.module.css";

function Header(){
    return(
        <header className={style.header}>
            <Link to="/home"><span>CRUD</span></Link>
        </header>
    )
}
export default Header;