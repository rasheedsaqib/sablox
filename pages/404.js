import Link from "next/link";
import withWidth from "../HOC/withWidth";
import Navbar from "../UI/Navbar/navbar";
import Footer from "../UI/Footer/footer";

const NotFound = () => {
    return(
        <>
            <Navbar />
            <div className='not-found'>
                <p>Page you are looking for was not Found!</p>
                <Link href='/'><a>Return to Home</a></Link>
            </div>
            <Footer />
        </>
    )
}

export default withWidth(NotFound);
