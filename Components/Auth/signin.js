import styles from './auth.module.scss';
import Link from "next/link";
import {useRouter} from "next/router";

const SignIn = props => {

    const router = useRouter();

    const onSubmit = e => {
        e.preventDefault();
        props.handleSignIn(e.target.elements.email.value, e.target.elements.password.value);
        router.push('/');
    }

    return (
        <div className={styles.auth}>
            <form className={styles.form} onSubmit={e => onSubmit(e)}>
            <Link href='/'><a className='logo'>
                <img src='/logo.png' alt='SaBloX'/>
                <h2>SaBloX</h2>
            </a></Link>

            <h2 className={styles.title}>Sign in</h2>
            <p className={styles.line}>Get access to all the blogs blogs</p>

            <div className={styles.row}>
                <div className={styles.input} style={{width: '150%'}}>
                    <p>Email<span>*</span></p>
                    <input type='email' name='email' placeholder='Enter email'/>
                </div>
                <br/>
                <div className={styles.input} style={{width: '150%'}}>
                    <p>Password</p>
                    <input type='password' name='password' placeholder='Enter password'/>
                </div>
            </div>

            <div style={{marginTop: '1rem'}}>
                <label className={styles.container}>Remember me
                    <input type="checkbox"/>
                    <span className={styles.checkmark}/>
                </label>
            </div>

            <button type='submit'>{props.loading ? 'Loading' : 'Sign in'}</button>

            {/* eslint-disable-next-line react/no-unescaped-entities */}
            <p>Don't have an account?<Link href='/signup'><a>Sign up</a></Link></p>

        </form>
    <div className={styles.image}>
        <div className={styles.img}/>
    </div>

</div>
)
}

export default SignIn;