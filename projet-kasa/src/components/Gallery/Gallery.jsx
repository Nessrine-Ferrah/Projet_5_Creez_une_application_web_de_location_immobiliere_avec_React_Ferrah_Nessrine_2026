import styles from './Gallery.module.scss'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'


const Gallery = () => {
    const [logements, setLogements] = useState([])
    useEffect(() => {
    fetch('/datas/logements.json')
      .then(res => res.json())
      .then(data => setLogements(data))
    }, [])

    return (
        <div className={styles.containGallery}>
            {logements.map((logement) => (
            <Link  key={logement.id} to={`/logement/${logement.id}`} >
                <article  className={styles.cardLogement}>
                    <img
                        src={logement.cover}
                        alt={`${logement.title} cover`}
                        className={styles.imgCard}
                    />
                    <p className={styles.titleCard}>{logement.title}</p>
                </article>
            </Link>
            ))}  
        </div>

    )

}

export default Gallery