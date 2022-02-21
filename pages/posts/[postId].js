import {useRouter} from "next/router";
import withWidth from '../../HOC/withWidth';
import {default as PostPage} from "../../Components/Post/post";
import axios from "../../util/axios";
import Navbar from "../../UI/Navbar/navbar";
import Newsletter from "../../UI/Newsletter/newsletter";
import Footer from "../../UI/Footer/footer";

const Post = props => {

    const router = useRouter();

    return(
        <>
            <Navbar/>
            <PostPage posts={props.posts} postId={router.query.postId} constants={props.constants} />
            <Newsletter news={props.constants.news} />
            <Footer/>
        </>
    )
}

export async function getStaticProps() {

    const posts = await axios.get('/posts');
    const constants = await axios.get('/constants');

    return {
        props: {
            posts: posts.data.map(post => {
                const date = new Date(post.createdAt);
                return{
                    ...post,
                    owner: post.owner.firstName + ' ' + post.owner.lastName,
                    category: post.category.name,
                    about: post.owner.about,
                    createdAt: date.toLocaleString('en-US', {year: 'numeric', month: 'long', day: 'numeric' })
                }
            }),
            constants: constants.data
        },
        revalidate: 10
    }
}

export async function getStaticPaths() {
    const posts = await axios.get('/posts');

    const paths = posts.data.map(post => {
        return {params: {postId: '' + post._id}}
    });

    return {
        paths: paths,
        fallback: false
    }
}

export default withWidth(Post);