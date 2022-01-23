import styles from './sidebar.module.scss';

const Newsletter = props => {
    return(
        <div className={styles.content}>
            <p className={styles.title}>Newsletter</p>
            <div className={styles.newsletter}>
                <input type='email' placeholder='Email' />
                <button>Subscribe</button>
            </div>
        </div>
    )
}

export default Newsletter;