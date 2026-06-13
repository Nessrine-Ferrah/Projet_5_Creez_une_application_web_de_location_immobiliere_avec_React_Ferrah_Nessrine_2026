import styles from './Banner.module.scss'

const Banner = ({image, children, opacity}) => {
    return (
        <div className={styles.banner} style={{ backgroundImage: `linear-gradient(rgba(0,0,0,${opacity}), rgba(0,0,0,${opacity})), url(${image})`}}>
            {children}
        </div>
    )
}

export default Banner