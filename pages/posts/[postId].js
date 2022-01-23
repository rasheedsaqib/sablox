import {useRouter} from "next/router";
import withWidth from '../../HOC/withWidth';
import {default as PostPage} from "../../Components/Post/post";
import axios from "axios";

const Post = props => {

    const router = useRouter();

    return(
        <>
            <PostPage posts={props.posts} postId={router.query.postId} />
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

export async function getStaticPaths() {
    const posts = await axios.get('http://localhost:3000/api/posts');

    const paths = posts.data.map(post => {
        return {params: {postId: '' + post._id}}
    });

    return {
        paths: paths,
        fallback: true
    }
}

export default withWidth(Post);