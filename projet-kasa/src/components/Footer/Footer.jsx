import styles from './Footer.module.scss'
import logo from '../../assets/LOGOblanc.png'

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.footerContent}>
                <img 
                    src={logo} 
                    alt="Logo Kasa" 
                    className={styles.footerLogo}
                />
                <p className={styles.footerText}>
                    © 2020 Kasa. All rights reserved
                </p>
            </div>
        </footer>
    )
}

export default Footer