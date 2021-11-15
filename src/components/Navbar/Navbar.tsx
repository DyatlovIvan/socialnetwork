import style from './Navbar.module.css'
import {NavLink} from "react-router-dom";

export function Navbar(){
    return(
        <nav className={style.nav}>

            <div className={style.item}>
                <NavLink to = 'profile'>Profile</NavLink>
            </div>
            <div className={style.item}>
                <NavLink to = 'dialogs'>Messages</NavLink>
            </div>
            <div className={style.item}>
                <NavLink to = 'users'>Users</NavLink>
            </div>
            <div className={style.item}>News</div>
            <div className={style.item}>Music</div>
            <div className={style.item}>Settings</div>


        </nav>
    )
}