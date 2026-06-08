import { Link } from 'react-router-dom'
import styles from './Error.module.scss'

const Error = () => {
    return (
        <div className={styles.page}>
            <div className={styles.error}>
                <h1 className={styles.errorTitle}>404</h1>
                <p className={styles.errorText}>
                    Oups! La page que vous demandez n'existe pas.
                </p>
                <Link to="/" className={styles.ErrorLink}>
                    Retourner sur la page d’accueil
                </Link>
            </div>
        </div>
    )
}

export default Error