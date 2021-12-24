import styles from './navbar.module.scss';
import withWidth from '../../HOC/withWidth';
import Link from "next/link";

const Navbar = props => {
    return(
        <div className={styles.navbar}>
            <Link href='/'><a className={styles.logo}>
                <img src='/logo.png' alt='SaBloX' />
                <h2>SaBloX</h2>
            </a></Link>

            <ul className={styles.navItems}>
                <li>
                    <Link href='/'><a>Home</a></Link>
                </li>
                <li>
                    <Link href='/'><a>Categories <div> <i className="fas fa-chevron-down" /> </div> </a></Link>
                </li>
                <li>
                    <Link href='/'><a>Demo</a></Link>
                </li>
                <li>
                    <Link href='/'><a>Contact</a></Link>
                </li>
            </ul>

            <div className={styles.buttons}>
                <Link href='/'><a>Signin</a></Link>
                <Link href='/'><a>Signup</a></Link>
            </div>
        </div>
    )
}

export default withWidth(Navbar);