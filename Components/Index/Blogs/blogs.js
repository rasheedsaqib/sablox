import styles from './blogs.module.scss';
import Post from "./Post/post";
import Ads from "../../../UI/Sidebar/ad";
import Newsletter from "../../../UI/Sidebar/newsleteer";
import Socials from "../../../UI/Sidebar/socials";
import TopPosts from "../../../UI/Sidebar/topPosts";

const Blogs = props => {
    return(
        <div className={styles.blogs}>
            <div>
                <div className={styles.allBlogs}>
                    {props.posts.map(post => {
                        return (
                            <Post
                                key={post._id}
                                post={post}
                            />
                        )
                    })}
                </div>
            </div>
            <div style={{marginTop: '-1.2rem'}}>
                <Ads />
                <Newsletter />
                <Socials />
                <Ads />
                <TopPosts posts={props.posts} />
            </div>
        </div>
    )
}

export default Blogs;