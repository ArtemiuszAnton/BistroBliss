'use client';

import Header from '../../../components/Header/Header';
import style from './id.module.scss';
import { useParams } from 'next/navigation';
import storage from '../../../storage/storage';
import { useEffect, useState } from 'react';

export default function Id() {
    const { id } = useParams();
    const [data, setData] = useState({});
    const [totalPrice, setTotalPrice] = useState('0');
    const [basketItems, setBasketItems] = useState(JSON.parse(localStorage.getItem('basketArr')) || []);

    const addToBasket = () => {
        const checkItems = basketItems.filter((el) => el.id === data.id);
        if (checkItems.length) return;
        const basket = [...basketItems, { ...data, price: totalPrice }];
        localStorage.setItem('basketArr', JSON.stringify(basket));
        setBasketItems(basket)
;  // Обновляем состояние корзины
    }

    useEffect(() => {
        const resultItem = storage.find((el) => el.id === id);
        if (resultItem) {
            setData(resultItem);
            setTotalPrice(resultItem.price);
        }
    }, [id]);

    const arrSizeFood = [
        { size: 'S', count: '1s', priceIndex: 1 },
        { size: 'M', count: '2s', priceIndex: 2 },
        { size: 'L', count: '3s', priceIndex: 2.5 },
        { size: 'XL', count: '4s', priceIndex: 3 }
    ];

    return (
        <>
            <Header />
            <div className={style.wrrapper_color}>
                <div className={style.wrrapper_item}>
                    <div className={style[data.img]}></div>
                    <div className={style.text_item}>
                        <h1>{data.title}</h1>
                        <h2>{data.description}</h2>
                        <p>Size</p>

                        <div className={style.buttons_wrapper}>
                            {arrSizeFood.map((el, i) => (
                                <button
                                    key={i}
                                    className={style.count_button}
                                    onClick={() => 
                                        setTotalPrice((parseFloat(data.price) * el.priceIndex).toFixed(2))}
                                >
                                    <p className={style.size}>{el.size}</p>
                                    <p className={style.count}>{el.count}</p>
                                </button>
                            ))}
                        </div>

                        <div className={style.total}>
                            <div className={style.price}>
                                <p>Total:</p>
                                <p>{totalPrice} $</p>
                            </div>

                            <div className={style.line}></div>
                            <div className={style.text_description}>
                                <div className={style.img_info}></div>
                                <p>The cost is not final. Download our mobile app to see the final price and place your order. Earn loyalty points and enjoy your favorite coffee with up to 20% discount.</p>
                            </div>
                            <button className={style.add} onClick={addToBasket}>Add to Order</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}