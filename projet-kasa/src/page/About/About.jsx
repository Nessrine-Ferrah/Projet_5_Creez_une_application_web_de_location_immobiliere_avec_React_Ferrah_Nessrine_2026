import Banner from '../../components/Banner/Banner'
import Collapse from '../../components/Collapse/Collapse'
import styles from './About.module.scss'
import imageAbout from '../../assets/ImageAbout.png'
import { aboutData } from './aboutData'

const About = () => {
    return (
        <div className={styles.page}>
            <Banner image={imageAbout} opacity={0.3}/>
            <div className={styles.containerColl}>
                {aboutData.map((about, index) => (
                    <Collapse key={index} title={about.title}>
                        {about.content}
                    </Collapse>
                ))}
            </div>
        </div>
    )

}

export default About