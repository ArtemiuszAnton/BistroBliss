'use client';
import styles from "./page.module.scss";
import Header from '../components/Header/Header';


export default function Home() {

  const menuArr = [
    { img: styles.img_1, title: 'Breakfest', text: 'In the new era of technology we look in the future with certainty and pride for our life.' },
    { img: styles.img_2, title: 'Main Dishes', text: 'In the new era of technology we look in the future with certainty and pride for our life.' },
    { img: styles.img_3, title: 'Drinks', text: 'In the new era of technology we look in the future with certainty and pride for our life.' },
    { img: styles.img_4, title: 'Desserts', text: 'In the new era of technology we look in the future with certainty and pride for our life.' }
  ]

  return <>

    <Header />

    <main>

      <div className={styles.section_1}>
        <div className={styles.img_food}></div>

        <div className={styles.culinary}>
          <div className={styles.marketing_text}>
            <h1>
              Best food for
              your taste
            </h1>
            <p>
              Discover delectable cuisine and unforgettable moments
              in our welcoming, culinary haven.
            </p>

          <div className={styles.btns}>
            <div>Book A Table</div>
            <div>Explore Menu</div>
          </div>

          </div>

        </div>
      </div>

      <div className={styles.section_2}>

        <h1>Browse Our Menu</h1>

        <div className={styles.menu}>
          {menuArr.map(el =>
            <div className={styles.block_menu}>
              <div className={el.img}></div>
              <h2>{el.title}</h2>
              <p>{el.text}</p>
              <p className={styles.exp_menu}>Explore Menu</p>
            </div>
          )}
        </div>

      </div>



    </main>
  </>

}
