import style from './style.module.scss'

function Menu() {
    return (
        <div>
            <nav className={style.navigation}>
                <ul>
                <li className={style.navigationMenu}><a href="#">menu</a></li>
                <li className={style.navigationMenu}><a href="#">menu</a></li>
                <li className={style.navigationMenu}><a href="#">menu</a></li>
                <li className={style.navigationMenu}><a href="#">menu</a></li>
                <li className={style.navigationMenu}><a href="#">menu</a></li>
                </ul>
            </nav>
        </div>
    );
}

export default Menu;