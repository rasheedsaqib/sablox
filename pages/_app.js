import '../styles/globals.scss'
import Head from "next/head";
import Navbar from "../UI/Navbar/navbar";
import Notification from "../UI/Notification/notification";
import Newsletter from "../UI/Newsletter/newsletter";
import Footer from "../UI/Footer/footer";

function MyApp({Component, pageProps}) {
    return (
        <>
            <Head>
                <title>SaBloX</title>

                <link rel="preconnect" href="https://fonts.googleapis.com"/>
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin={+true}/>
                <link
                    href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;300;400;500;600;700;800;900&display=swap"
                    rel="stylesheet"/>


                <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css" />

            </Head>

            <Notification/>
            <Navbar/>

            <Component {...pageProps} />

            <Newsletter />
            <Footer />
        </>
    )
}

export default MyApp
