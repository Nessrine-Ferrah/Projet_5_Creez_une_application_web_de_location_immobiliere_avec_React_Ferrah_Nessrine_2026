import { Link } from 'react-router-dom'
import styles from './Header.module.scss'
import logo from '../../assets/LOGO.png'

const Header = () => {
    return (
    <header className={styles.header}>
        <div className={styles.headerContent}>
            <img 
                src={logo} 
                alt="Logo Kasa" 
                className={styles.headerLogo}
            />
            <nav className={styles.nav}>
                <Link to="/" className={styles.navLink}>Accueil</Link>
                <Link to="/About" className={styles.navLink}>À propos</Link>
            </nav>
        </div>
    </header>
  )

}

export default Header