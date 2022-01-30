import styles from './auth.module.scss';
import Link from "next/link";
import {useRef} from "react";

const Signup = props => {

    let newsletter = useRef(null);
    let termsAndService = useRef(null);

    const onSubmit = e => {
        e.preventDefault();
        console.log(e.target.elements);
        props.handleSignup(e.target.elements.firstName.value,
            e.target.elements.lastName.value,
            e.target.elements.email.value,
            e.target.elements.phone.value,
            e.target.elements.password.value,
            e.target.elements.confirmPassword.value,
            newsletter.checked, termsAndService.checked);
    }

    return (
        <div className={styles.auth}>
            <form onSubmit={e => onSubmit(e)} className={styles.form}>
                <Link href='/'><a className='logo'>
                    <img src='/logo.png' alt='SaBloX'/>
                    <h2>SaBloX</h2>
                </a></Link>

                <h2 className={styles.title}>Sign up</h2>
                <p className={styles.line}>Get access to all the blogs blogs</p>

                <div className={styles.row}>
                    <div className={styles.input}>
                        <p>First Name <span>*</span></p>
                        <input type='text' name='firstName' placeholder='Enter First name'/>
                    </div>
                    <div className={styles.input}>
                        <p>Last Name <span>*</span></p>
                        <input type='text' name='lastName' placeholder='Enter Last name'/>
                    </div>

                    <div className={styles.input}>
                        <p>Email <span>*</span></p>
                        <input type='email' name='email' placeholder='Enter email'/>
                    </div>
                    <div className={styles.input}>
                        <p>Phone</p>
                        <input type='phone' name='phone' placeholder='Enter phone'/>
                    </div>

                    <div className={styles.input}>
                        <p>Password <span>*</span></p>
                        <input type='password' name='password' placeholder='Enter password'/>
                    </div>

                    <div className={styles.input}>
                        <p>Confirm Password <span>*</span></p>
                        <input type='password' name='confirmPassword' placeholder='Enter password again'/>
                    </div>
                </div>

                <div style={{marginTop: '2rem'}}>
                    <label className={styles.container}>I want to receive newsletter emails.
                        <input ref={el => newsletter = el} type="checkbox"/>
                        <span className={styles.checkmark}/>
                    </label>
                    <br/>
                    <label className={styles.container}>I agree to <a> terms </a> and <a>privacy policy</a>.
                        <input ref={el => termsAndService = el} type="checkbox"/>
                        <span className={styles.checkmark}/>
                    </label>
                </div>

                <button type='submit'>{props.loading ? 'Loading...' : 'Sign up'}</button>

                <p>Already have an account?<Link href='/signin'><a>Sign in</a></Link></p>

            </form>
            <div className={styles.image}>
                <div className={styles.img}/>
            </div>

        </div>
    )
}

export default Signup;