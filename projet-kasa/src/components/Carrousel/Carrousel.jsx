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

    const onePicture = pictures.length === 1

    return (
        <div className={styles.carrousel}>
            {!onePicture && (
                <button onClick={prev} className={styles.btnFlecheG}>
                    <img src={flecheGauche} alt="Flèche gauche du carrousel" className={styles.btnFleche} />
                </button>
                )
            }

            <img 
                src={pictures[index]} 
                alt="Photo du logement" 
                className={styles.pictureCarrousel}
            />
            
            

            {!onePicture && (
                <button onClick={next} className={styles.btnFlecheD}>
                    <img src={flecheDroite} alt="Flèche droite du carrousel" className={styles.btnFleche} />
                </button>
                )
            }

            {!onePicture && (<p className={styles.compteurPage}>{index + 1}/{pictures.length}</p>)}

        </div>
    )

}

export default Carrousel