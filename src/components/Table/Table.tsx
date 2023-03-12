import React from 'react'
import styles from './Table.module.css'
import { tableData } from '../../constants/tableDatas';
type ButtonProps = {
    // 👇️ type as React.CSSProperties
    style?: React.CSSProperties;
    bgStle?: React.CSSProperties

};
const Table = ({ style, bgStle }: ButtonProps) => {
    return (
        <div className={`${styles.tableContainer}`}>
            <h3 className={styles.heading}>Buy Board</h3>
            <table className={`${styles.table} ${styles.sticky}`}>
                <thead>
                    <tr>
                        <th>Product</th>
                        <th>Quantity</th>
                        <th>Price</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody className={styles.tableBody}>

                    {tableData.map((item, index) => (
                        <tr key={index}>
                            <td>{item.Product}</td>
                            <td>{item.Quantity}</td>
                            <td className={styles.priceText} style={style}>{item.Price}</td>
                            <td><span className={styles.buyText} style={bgStle}>{item.action}</span></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default Table