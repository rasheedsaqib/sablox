import styles from './footer.module.scss';
import Link from "next/link";

const Footer = props => {
    return(
        <div className={styles.footer}>
            <hr />

            <div className={styles.bottom}>
                <Link href='/'><a className={styles.logo}>
                    <img src='/logo.png' alt='SaBloX' />
                    <h2>SaBloX</h2>
                </a></Link>
                <p>SaBlox | All Rights Reserved, 2021.</p>
            </div>
        </div>
    )
}

export default Footer;