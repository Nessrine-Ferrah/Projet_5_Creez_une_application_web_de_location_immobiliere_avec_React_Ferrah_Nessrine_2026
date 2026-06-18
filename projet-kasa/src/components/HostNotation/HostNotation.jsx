import styles from './HostNotation.module.scss'
import starOrange from '../../assets/starOrange.png'
import starGrey from '../../assets/starGrey.png'

const HostNotation = ({ host, rating }) => {
    return (
        <div className={styles.contentHost}>
            <div className={styles.contentPicture}>
                <p className={styles.nameHost}>{host.name.replace(" ", "\n")}</p>
                <img src={host.picture} 
                alt={`Photo de ${host.name}`}
                className={styles.pictureHost}/>
            </div>
            <div className={styles.startNotation}>
                {[...Array(5)].map((_, index) => (
                    <span key={index} className={styles.star}>
                        {index < rating ? <img src={starOrange} alt="Nombre d'étoiles orange sur 6"/> 
                        :<img src={starGrey} alt="Nombre d'étoiles gris"/>}
                    </span>
                ))}
            </div>
        </div>
    )
}

export default HostNotation