import React from 'react'
import styles from './Table.module.css'
const Table = () => {
    return (
        <div className={styles.tableContainer}>
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
                    <tr>
                        <td>Soybeans (SSBS) </td>
                        <td>2003</td>
                        <td className={styles.priceText}> 6,471.39</td>
                        <td><span className={styles.buyText}> Buy</span></td>
                    </tr>
                    <tr>
                        <td>Paddy Rice (SPRL)</td>
                        <td>86</td>
                        <td className={styles.priceText}> 6,471.39</td>
                        <td><span className={styles.buyText}> Buy</span></td>
                    </tr>
                    <tr>
                        <td>Maize (SMAZ)</td>
                        <td>2003</td>
                        <td className={styles.priceText}> 6,471.39</td>
                        <td>
                            <span className={styles.buyText}> Buy</span>

                        </td>
                    </tr>

                    <tr>
                        <td>Sorghum (SSGM) </td>
                        <td>2003</td>
                        <td className={styles.priceText}> 6,471.39</td>
                        <td ><span className={styles.buyText}> Buy</span></td>
                    </tr>

                    <tr>
                        <td>Sorghum (SSGM) </td>
                        <td>2003</td>
                        <td className={styles.priceText}> 6,471.39</td>
                        <td ><span className={styles.buyText}> Buy</span></td>
                    </tr>

                    <tr>
                        <td>Sorghum (SSGM) </td>
                        <td>2003</td>
                        <td className={styles.priceText}> 6,471.39</td>
                        <td ><span className={styles.buyText}> Buy</span></td>
                    </tr>

                    <tr>
                        <td>Sorghum (SSGM) </td>
                        <td>2003</td>
                        <td className={styles.priceText}> 6,471.39</td>
                        <td ><span className={styles.buyText}> Buy</span></td>
                    </tr>

                    <tr>
                        <td>Sorghum (SSGM) </td>
                        <td>2003</td>
                        <td className={styles.priceText}> 6,471.39</td>
                        <td ><span className={styles.buyText}> Buy</span></td>
                    </tr>

                    <tr>
                        <td>Sorghum (SSGM) </td>
                        <td>2003</td>
                        <td className={styles.priceText}> 6,471.39</td>
                        <td ><span className={styles.buyText}> Buy</span></td>
                    </tr>

                    <tr>
                        <td>Sorghum (SSGM) </td>
                        <td>2003</td>
                        <td className={styles.priceText}> 6,471.39</td>
                        <td ><span className={styles.buyText}> Buy</span></td>
                    </tr>

                    <tr>
                        <td>Sorghum (SSGM) </td>
                        <td>2003</td>
                        <td className={styles.priceText}> 6,471.39</td>
                        <td ><span className={styles.buyText}> Buy</span></td>
                    </tr>

                    <tr>
                        <td>Sorghum (SSGM) </td>
                        <td>2003</td>
                        <td className={styles.priceText}> 6,471.39</td>
                        <td ><span className={styles.buyText}> Buy</span></td>
                    </tr>

                    <tr>
                        <td>Sorghum (SSGM) </td>
                        <td>2003</td>
                        <td className={styles.priceText}> 6,471.39</td>
                        <td ><span className={styles.buyText}> Buy</span></td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Table