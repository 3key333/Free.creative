import style from './header.module.scss'

function Header () {
    return(
        <header>
            <div className={style.headerInner}>
                
                <div className={style.logo}>

                    <img src="/logo.svg" alt="" />

                    <p>Разрабатываем фирменные <br /> стили с 2009 года</p>

                </div>

                <nav className={style.headerNav}>

                    <a href="#" className={style.number}>8 (495) 156-39-11</a>

                    <a href="#" className={style.websites}><img src="/facebook.svg" alt="" /></a>

                    <a href="#" className={style.websites}><img src="/inst.svg" alt="" /></a>
                  
                </nav>

            </div>
        </header>
    )
}

export default Header