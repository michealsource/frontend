import React, { useState } from 'react'
import styles from './Modal.module.css'
import verticalLine from '../../assets/images/verticalLine.png'
type Props = {
    openModal: boolean
    onClose: any
}

const Modal = (props: Props) => {
    if (!props.openModal) return null
    return (
        <div className={styles.overLay} onClick={props.onClose}>
            <div className={styles.modalContainer} onClick={(e) => { e.stopPropagation() }}>
                <h2 className={styles.headerTitle}>Page Settings</h2>
                <div className={styles.topHeader}>
                    <h6>Board</h6>
                    <div>
                        <button className={styles.bordBtn}>X-Traded</button>
                        <button className={styles.bordBtn}>OTC</button>
                        <button className={styles.bordBtn}>FI</button>
                        <button className={styles.bordBtn}>Diravatives</button>
                    </div>
                </div>

                <div className={styles.productHeader}>
                    <h6>Product</h6>
                    <div className={styles.productItems}>
                        <button className={styles.bordBtn}>All</button>
                        <button className={styles.bordBtn}>SBBS</button>
                        <button className={styles.bordBtn}>SPRL</button>
                        <button className={styles.bordBtn}>SGNG</button>
                        <button className={styles.bordBtn}>SCOC</button>
                        <button className={styles.bordBtn}>SMAZ</button>
                        <button className={styles.bordBtn}>SGNG</button>
                        <button className={styles.bordBtn}>SSGM</button>
                        <button className={styles.bordBtn}>FETC</button>
                    </div>
                </div>

                <div>
                    <span>Sticky header</span>
                </div>

                <img src={verticalLine} alt="" className={styles.Vertical} />
                <div className={styles.actionContainer}>
                    <button className={styles.resetBtn}>Reset</button>
                    <button className={styles.applytBtn}>Apply</button>
                </div>
            </div>
        </div>
    )
}

export default Modal