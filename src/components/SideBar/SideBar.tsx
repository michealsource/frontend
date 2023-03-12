import React from 'react'
import styles from './SideBar.module.css'
import { links, bottomLinks } from '../../constants/sideBarLinks'
import logo from '../../assets/images/logo.png'
const SideBar = () => {
    return (
        <div className={styles.sideBarContainer}>

            <div>
                <img src={logo} alt="" className={styles.logoImg} />

                {links.map((item, index) => (
                    <div key={index} className={styles.link}>
                        <img src={item.image} width={24} height={24} />
                    </div>

                ))}
            </div>

            <div>

                {bottomLinks.map((item, index) => (
                    <div key={index} className={styles.link}>
                        <img src={item.image} width={35} height={35} />
                    </div>

                ))}
            </div>

        </div>
    )
}

export default SideBar