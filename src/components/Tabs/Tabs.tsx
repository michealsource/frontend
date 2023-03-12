import React, { useState } from 'react'
import { tab } from '../../constants/tab'
import styles from './Tabs.module.css'
const Tabs = () => {
    const [activeTab, setActiveTab] = useState(0)
    return (
        <div>
            {tab.map((item, index) => (
                <div key={index} className={styles.tabContainer}>
                    <div

                        className={`${styles.countContainer} ${index === activeTab && styles.activeTabLink}`}
                        onClick={() => setActiveTab(index)}>
                        <span>{item.name}</span>
                        {item.hasCount && <span className={styles.countBox}>{item.count}</span>}
                    </div>
                    {index === activeTab && <div className={styles.activeBottomLine} />}

                </div>

            ))}

            <div className={styles.horizontalLine} />

        </div>
    )
}

export default Tabs