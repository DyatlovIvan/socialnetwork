import { NavLink } from 'react-router-dom'
import style from './Header.module.css'

export function Header(){
    return(
        <header className={style.header}>
            <img src="https://cdn.pixabay.com/photo/2015/12/29/19/46/cat-1113335_960_720.png" alt="logo"/>
            <div className={style.loginBlock}>
                <NavLink to = {'/login'}>Login</NavLink>

            </div>
        </header>
    )
}