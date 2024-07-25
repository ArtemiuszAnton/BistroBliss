import style from './header.module.css';

export default function Header() {
    return <header>
        <div className={style.up_header}>
            <div className={style.contacts}>
                <div className={style.phone}></div>
                <p>(414) 857 - 0107</p>
                <div className={style.email}></div>
                <p>yummy@bistrobliss</p>
            </div>

            <div className={style.soc_networks}>
                <div className={style.icon_block}>
                    <div className={style.twitter}></div>
                </div>
                <div className={style.icon_block}>
                    <div className={style.fb}></div>
                </div>
                <div className={style.icon_block}>
                    <div className={style.ig}></div>
                </div>
                <div className={style.icon_block}>
                    <div className={style.github}></div>
                </div>
            </div>
        </div>

        <div className={style.down_header}>
            <div className={style.bistro_logo}>
                <div className={style.ramen}></div>
                <h3>Bistro Bliss</h3>
            </div>

            <div className={style.navigation}>
                <div>
                    Home
                </div>
                <div>
                    About
                </div>
                <div>
                    Menu
                </div>
            </div>

            <div className={style.right_btn}>
                Book A Table
            </div>
        </div>
    </header>

}