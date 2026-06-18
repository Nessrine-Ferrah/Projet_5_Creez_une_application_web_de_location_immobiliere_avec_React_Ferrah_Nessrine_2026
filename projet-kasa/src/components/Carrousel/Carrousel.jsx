import { useState } from 'react'
import styles from './Carrousel.module.scss'
import flecheDroite from '../../assets/flecheDroite.png'
import flecheGauche from '../../assets/flecheGauche.png'

const Carrousel = ({pictures}) => {
    const [index, setIndex] = useState(0)

    const next = () => {
        setIndex((index + 1) % pictures.length)
    }

    const prev = () => {
        setIndex((index - 1 + pictures.length) % pictures.length)
    }

   
    return (
        <div className={styles.carrousel}>

            <button onClick={prev} className={styles.btnFlecheG}>
                <img src={flecheGauche} alt="Flèche gauche du carrousel" />
            </button>

            <img 
                src={pictures[index]} 
                alt="Photo du logement" 
                className={styles.pictureCarrousel}
            />

            <button onClick={next} className={styles.btnFlecheD}>
                <img src={flecheDroite} alt="Flèche droite du carrousel" />
            </button>

            <p className={styles.compteurPage}>{index + 1}/{pictures.length}</p>

        </div>
    )

}

export default Carrousel