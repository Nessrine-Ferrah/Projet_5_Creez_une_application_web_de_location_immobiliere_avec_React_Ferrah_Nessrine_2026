import styles from './Collapse.module.scss'
import buttonCollapse from '../../assets/buttonCollapse.png'
import { useState } from 'react'


const Collapse = ({ title, children }) => {
    const [ open, setOpen ] = useState(false)

    return (
        <div className={styles.collapse}>
            <div className={styles.headerColl}>
                <p className={styles.titleColl}>{title}</p>
                <button className={styles.buttonColl} onClick={()=> setOpen(!open) }>
                    <img 
                        src={buttonCollapse} 
                        alt="Boutton collapse" 
                        className={`${styles.iconButton} ${open ? styles.rotate : ""}`}
                    />
                </button>
            </div>
            <div className={`${styles.content} ${open ? styles.transitionContent : ""}`}>
                {open && <p className={styles.textColl}>{children}</p>}
            </div>
        </div>
    )
}

export default Collapse