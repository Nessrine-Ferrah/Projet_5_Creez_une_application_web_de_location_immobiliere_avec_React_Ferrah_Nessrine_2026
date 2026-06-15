import Banner from '../../components/Banner/Banner'
import styles from './Home.module.scss'
import styles2 from '../../components/Banner/Banner.module.scss'
import imageHome from '../../assets/ImageHome.png'
import Gallery from '../../components/Gallery/Gallery'

const Home = () => {
    return (
        <div className={styles.page}>
            <Banner image={imageHome} opacity={0.6}>
                <h1 className={styles2.titleBanner}>Chez vous, partout et ailleurs</h1>
            </Banner>
            <Gallery />
        </div>
    )

}

export default Home

