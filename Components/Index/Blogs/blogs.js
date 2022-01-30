import styles from './blogs.module.scss';
import Post from "./Post/post";
import Ads from "../../../UI/Sidebar/ad";
import Newsletter from "../../../UI/Sidebar/newsleteer";
import Socials from "../../../UI/Sidebar/socials";
import TopPosts from "../../../UI/Sidebar/topPosts";

const Blogs = props => {

    const sortedPost = props.posts.sort((post1, post2) => {
        if ((new Date(post1.createdAt)) > (new Date(post2.createdAt))) {
            return -1;
        } else if ((new Date(post1.createdAt)) < (new Date(post2.createdAt))) {
            return 1;
        }
        return 0;
    });

    return (
        <div className={styles.blogs}>
            <div>
                {sortedPost.length === 0 ? (
                    <p style={{textAlign: 'center', margin: '2rem 0'}}>No posts found.</p>
                ) : (
                    <div className={styles.allBlogs}>
                        {sortedPost.map(post => (<Post key={post._id} post={post} />))}
                    </div>
                )}

            </div>
            <div style={{marginTop: '-1.2rem'}}>
                <Ads/>
                <Newsletter/>
                <Socials/>
                <Ads/>
                <TopPosts posts={props.posts}/>
            </div>
        </div>
    )
}

export default Blogs;