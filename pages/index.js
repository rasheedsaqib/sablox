import withWidth from "../HOC/withWidth";
import SelectedBlog from "../Components/Index/SelectedBlog/selectedBlog";
import Categories from "../Components/Index/Categories/categories";
import Blogs from "../Components/Index/Blogs/blogs";
import axios from "axios";

const Home = props => {
    return (
        <>
            <SelectedBlog/>
            <Categories/>
            <Blogs posts={props.posts}/>
        </>
    )
}

export async function getStaticProps() {

    const posts = await axios.get('http://localhost:3000/api/posts');

    return {
        props: {
            posts: posts.data
        }
    }
}

export default withWidth(Home);
