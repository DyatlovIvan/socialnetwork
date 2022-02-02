import { NavLink } from 'react-router-dom'
import style from './Header.module.css'

type HeaderType = {
    login:string | null
    isAuth:boolean
    logout:()=>void
}

export function Header({login,isAuth,logout}:HeaderType){
    return(
        <header className={style.header}>
            <img src="https://cdn.pixabay.com/photo/2015/12/29/19/46/cat-1113335_960_720.png" alt="logo"/>
            <div className={style.loginBlock}>
                {isAuth
                    ? <div className={style.login}>{login}  <button className={style.button} onClick={logout}>Log out</button></div>
                    :<NavLink className={style.button} style={{textDecoration:"none"}} to = {'/login'}>Login</NavLink>}
            </div>
        </header>
    )
}