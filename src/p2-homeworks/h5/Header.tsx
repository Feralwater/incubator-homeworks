import React from 'react'
import {NavLink} from 'react-router-dom'
import {PATH} from "./Routes";
import s from "./Header.module.css"

function Header() {
    return (
        <nav className={s.NavbarItems}>
            <div className={s.btn_close}>Menu</div>
            <ul className={s.nav_menu}>
                <li><NavLink className={s.nav_links} activeClassName={s.active} to={PATH.PRE_JUNIOR}>PreJunior</NavLink>
                </li>
                <li><NavLink className={s.nav_links} activeClassName={s.active} to={PATH.JUNE}>June</NavLink></li>
                <li><NavLink className={s.nav_links} activeClassName={s.active} to={PATH.JUNE_PLUS}>JunePlus</NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default Header
