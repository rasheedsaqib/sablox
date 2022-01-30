import '../styles/globals.scss'
import Head from "next/head";
import Notification from "../UI/Notification/notification";
import 'react-toastify/dist/ReactToastify.css';
import {useRouter} from "next/router";
import {ToastContainer} from "react-toastify";
import {AuthContextProvider} from '../store/AuthContext';

const MyApp = ({Component, pageProps}) => {

    const router = useRouter();

    let showNewsletter = true;
    if(['/signup', '/signin'].includes(router.pathname)){
        showNewsletter = false;
    }

    return (
        <AuthContextProvider>
            <Head>
                <title>SaBloX</title>

                <link rel="preconnect" href="https://fonts.googleapis.com"/>
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin={+true}/>
                <link
                    href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;300;400;500;600;700;800;900&display=swap"
                    rel="stylesheet"/>


                <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css"/>

                <link rel='icon' href='/favicon.ico'/>

            </Head>

            <ToastContainer autoClose={2000} />

            {showNewsletter ? <Notification/> : null}

            <Component {...pageProps} />
        </AuthContextProvider>
    )
}

export default MyApp
