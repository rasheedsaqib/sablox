import styles from './sidebar.module.scss';

const Socials = props => {

    return (
        <div className={styles.content}>
            <p className={styles.title}>Follow us</p>
            <div className={styles.socials}>
                <a href={props.constants.twitter} target='_blank'>
                    <div className={styles.social}>
                        <span> <i className="fab fa-twitter"/> </span>
                    </div>
                </a>
                <a href={props.constants.instagram} target='_blank'>
                    <div className={styles.social}>
                        <span> <i className="fab fa-instagram"/> </span>
                    </div>
                </a>
                <a href={props.constants.linkedin} target='_blank'>
                    <div className={styles.social}>
                        <span> <i className="fab fa-linkedin-in"/> </span>
                    </div>
                </a>
            </div>
        </div>
    )
}

export default Socials;