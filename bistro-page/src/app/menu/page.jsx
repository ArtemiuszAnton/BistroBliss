import Header from '../../components/Header/Header';
import style from './menu.module.scss';
import Link from 'next/link';
import menuArr from '../../storage/storage';


export default function Menu() {

    const arrSizeFood = [
        { img: 'M', count: 'Lemonade' },
        { img: 'L', count: 'Main courses' },
        { img: 'XL', count: 'Dessert' }
    ];

    return <>

        <Header />
        <div className={style.menu_wrapper}>
            <div className={style.menu_title}>
                <h1>Our Menu</h1>
                <p>We consider all the drivers of change gives you the components you need to change to create a truly happens.</p>
            </div>
            <div className={style.container}>
                {menuArr.map((elem, id) => <Link href={`/menu/${elem.id}`} key={id}>
                    <div className={style.item}>
                        <div className={style[elem.img]}></div>
                        <div className={style.text_container}>
                            <p className={style.price}>{elem.price}</p>
                            <h2>{elem.title}</h2>
                            <p>{elem.description}</p>
                        </div>

                    </div>
                </Link>
                )}
            </div>
        </div>
    </>
}