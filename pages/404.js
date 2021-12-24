import Link from "next/link";
import withWidth from "../HOC/withWidth";

const NotFound = () => {
    return(
        <div className='not-found'>
            <p>Page you are looking for was not Found!</p>
            <Link href='/'><a>Return to Home</a></Link>
        </div>
    )
}

export default withWidth(NotFound);
