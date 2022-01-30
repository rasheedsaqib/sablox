import {default as SignupPage} from "../Components/Auth/signup";
import {toast} from 'react-toastify';
import {validateEmail} from "../util/util";
import axios from "../util/axios";
import {useState} from "react";

const Signup = props => {

    const [loading, setLoading] = useState(false);

    const handleSignup = (firstName, lastName, email, phone, password, confirmPassword, newsletter, terms) => {
        if (firstName.length === 0 || lastName.length === 0 || email.length === 0 || phone.length === 0 || password.length === 0 || confirmPassword.length === 0) {
            toast.warn("Enter all the fields!");
        } else if (!validateEmail(email)) {
            toast.warn("Enter a valid email!");
        } else if (password.length < 5) {
            toast.warn("Passwords should be at least 5 characters long!!");
        } else if (password !== confirmPassword) {
            toast.warn("Passwords don't match!");
        } else if (!terms) {
            toast.warn("Please accept terms and privacy policy!");
        } else {
            setLoading(true);
            axios.post('/signup', {firstName, lastName, email, phone, password})
                .then(res => {
                    if (res.status === 201) {
                        toast.success('Signup successful!')
                    }
                    setLoading(false)
                })
        }
    }

    return (
        <>
            <SignupPage handleSignup={handleSignup} loading={loading} setLoading={setLoading} />
        </>
    )
}

export default Signup;