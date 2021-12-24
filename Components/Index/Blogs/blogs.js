import styles from './blogs.module.scss';
import Sidebar from "../../../UI/Sidebar/sidebar";
import Post from "./Post/post";

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
            <Sidebar posts={props.posts} />
        </div>
    )
}

export default Blogs;