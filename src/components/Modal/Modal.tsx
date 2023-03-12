import React, { useState } from 'react'
import styles from './Modal.module.css'
type Props = {
    openModal: boolean
}

const Modal = (props: Props) => {
    if (!props.openModal) return null
    return (
        <div className={styles.overLay}>
            <div className={styles.modalContainer}>
                <h2>Page Settings</h2>
                <div>
                    <h6>Board</h6>
                    <div>
                        <button>X-Traded</button>
                        <button>OTC</button>
                        <button>FI</button>
                        <button>Diravatives</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Modal