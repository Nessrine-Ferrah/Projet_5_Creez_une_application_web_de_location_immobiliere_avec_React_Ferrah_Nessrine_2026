import Banner from '../../components/Banner/Banner'
import styles from './About.module.scss'
import imageAbout from '../../assets/ImageAbout.png'
import cssGeneral from '../../index.css'

const About = () => {
    return (
        <div className={styles.page}>
            <Banner image={imageAbout} opacity={0.3}/>
        </div>
    )

}

export default About