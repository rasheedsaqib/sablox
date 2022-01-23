import styles from './sidebar.module.scss';

const Ads = props => {
    return(
        <div className={styles.content}>
            <p className={styles.title}>Advertisement</p>
            <div className={styles.ads}>
                <p>Ads here</p>
            </div>
        </div>
    )
}

export default Ads;