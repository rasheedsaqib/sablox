import styles from './sidebar.module.scss';

const Socials = props => {
    return(
        <div className={styles.content}>
            <p className={styles.title}>Follow us</p>
            <div className={styles.socials}>
                <div className={styles.social}>
                    <span> <i className="fab fa-twitter" /> </span>
                </div>
                <div className={styles.social}>
                    <span> <i className="fab fa-instagram" /> </span>
                </div>
                <div className={styles.social}>
                    <span> <i className="fab fa-linkedin-in" /> </span>
                </div>
            </div>
        </div>
    )
}

export default Socials;