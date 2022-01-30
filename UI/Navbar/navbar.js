import styles from './navbar.module.scss';
import Link from "next/link";
import {useContext} from "react";
import AuthContext from "../../store/AuthContext";

const Navbar = props => {

    const {signOut, isAuth} = useContext(AuthContext);

    function handleSignOut(e) {
        e.preventDefault();
        signOut();
    }

    return(
        <div className={styles.navbar}>
            <Link href='/'><a className='logo'>
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
                {isAuth ? (
                        <>
                            <a>Profile</a>
                            <a onClick={e => handleSignOut(e)}>Sign out</a>
                        </>
                    ) :
                    (
                        <>
                            <Link href='/signin'><a>Signin</a></Link>
                            <Link href='/signup'><a>Signup</a></Link>
                        </>
                    )
                }
            </div>
        </div>
    )
}

export default Navbar;