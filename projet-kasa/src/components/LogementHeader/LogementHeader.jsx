import styles from './LogementHeader.module.scss'

const LogementHeader = ({title, location, tags}) => {
    return (
        <div className={styles.contentHeader}>
            <div className={styles.textHeader}>
                <h1 className={styles.titleHeader}>{title}</h1>
                <p className={styles.paragHeader}>{location}</p>
            </div>
            <div className={styles.tagsHeader}>
                {tags.map((tag, index)=>(
                    <p className={styles.contentTags} key={index}>{tag}</p>
                ))}
            </div>
        </div>

    )
}

export default LogementHeader