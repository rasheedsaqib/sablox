import styles from './newsletter.module.scss';
import withWidth from "../../HOC/withWidth";

const Newsletter = props => {
    return (
        <div className={styles.newsletter}>
            <p className={styles.upperTitle}>NEWSLETTER</p>
            <h1 className={styles.upperLine}>Subscribe Mail List.</h1>

            <p className={styles.line}>Subscribe to keep up with fresh news and exciting updates. <br/> We promise not
                to spam you!</p>

            <div className={styles.input}>
                <input type='email' placeholder='Email' />
                <button>Subscribe</button>
            </div>
        </div>
    )
}

export default withWidth(Newsletter);