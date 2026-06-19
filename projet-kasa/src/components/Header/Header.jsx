import { NavLink} from 'react-router-dom'
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
                <NavLink to="/" className={({ isActive }) => isActive ? styles.active : styles.navLink}>Accueil</NavLink>
                <NavLink to="/About" className={({ isActive }) => isActive ? styles.active : styles.navLink}>A propos</NavLink>
            </nav>
        </div>
    </header>
  )

}

export default Header