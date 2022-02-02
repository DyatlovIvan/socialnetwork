import style from './Navbar.module.scss'
import {NavLink} from "react-router-dom";

export function Navbar() {
    return (
        <nav className={style.nav}>

            <div>
                <NavLink to='/profile' className={style.item} activeClassName={style.active}>Profile</NavLink>
            </div>
            <div>
                <NavLink to='/dialogs' className={style.item} activeClassName={style.active}>Messages</NavLink>
            </div>
            <div>
                <NavLink to='/users' className={style.item} activeClassName={style.active}>Users</NavLink>
            </div>
            <div className={style.item}>News</div>
            <div className={style.item}>Music</div>
            <div className={style.item}>Settings</div>


        </nav>
    )
}