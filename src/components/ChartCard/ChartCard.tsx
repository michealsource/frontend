import React from 'react'
import styles from './ChartCard.module.css'
type Props = {
    header: string;
    price: string;
    bg: string;
    month: string;
    img: any
};
const ChartCard = (props: Props) => {

    return (
        <div className={styles.cardContainer}>
            <div className={styles.lists}>
                <span className={styles.listHeader}>{props.header}</span>
                <span className={styles.listPrice}>{props.price}</span>
                <div className="d-flex mt-3 ">
                    <span className={styles.listBg}>{props.bg}</span>
                    <span className={styles.listMonth}>{props.month}</span>
                </div>
            </div>

            <img src={props.img} alt="" className={styles.imgFill} />

        </div>
    )
}

export default ChartCard