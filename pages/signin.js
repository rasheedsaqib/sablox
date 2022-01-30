import {default as SignInPage} from "../Components/Auth/signin";
import {toast} from "react-toastify";
import axios from "../util/axios";
import {useContext, useState} from "react";
import AuthContext from "../store/AuthContext";
import {useRouter} from "next/router";

const SignIn = props => {

    const router = useRouter();
    const {isAuth, signIn} = useContext(AuthContext);

    if(isAuth){
        router.push('/');
    }

    const [loading, setLoading] = useState(false);

    const handleSignIn = (email, password) => {
        if(email.length === 0 || password.length === 0){
            toast.warn('Enter all the fields!');
        }else{
            setLoading(true);
            axios.post('/signin', {email, password})
                .then(res => {
                    if(res.status === 200){
                        toast.success(res.data.message);
                        signIn(res.data.token, res.data.user);
                    }
                    setLoading(false);
                })
        }
    }

    return(
        <>
            <SignInPage handleSignIn={handleSignIn} loading={loading} />
        </>
    )
}

export default SignIn;