import styles from './post.module.scss';
import Ads from "../../UI/Sidebar/ad";
import Newsletter from "../../UI/Sidebar/newsleteer";
import Socials from "../../UI/Sidebar/socials";
import TopPosts from "../../UI/Sidebar/topPosts";
import Link from "next/link";
import Comment from "./Comments/Comment/comment";
import Comments from "./Comments/comments";
import AddComment from "./AddComment/addComment";

const Post = props => {

    const post = props.posts.find(post => '' + post._id === props.postId);

    return(
        <>
            <Link href='/'><a className={styles.back}><div><i className="fas fa-chevron-left" /></div> Back to Blog </a></Link>
            <div className={styles.post}>
                <div className={styles.content}>
                    <img src={post.image} alt='Blog Post' />

                    <h1>{post.title}</h1>

                    <p>{post.description}</p>

                    <hr />

                    <h2>New Features</h2>
                    <p>{post.description}</p>

                    <h2>APIs</h2>
                    <p>{post.description}</p>
                    <p>{post.description}</p>
                    <p>{post.description}</p>

                    <h2>Power of our Apps</h2>
                    <p>{post.description}</p>
                    <p>{post.description}</p>

                    <img src={post.image} alt='Blog Post' />

                    <h2>Lead Generation</h2>
                    <p>{post.description}</p>

                    <h2>My Pro Tip</h2>
                    <p className={styles.quote}>{post.description}</p>

                    <h2>Wrapping it up</h2>
                    <p>{post.description}</p>

                    <hr />

                    <div className={styles.about}>
                        <div className={styles.upper}>
                            <img src='/admin.jpg' alt='Admin' />
                            <div className={styles.text}>
                                <p>About the author</p>
                                <h2>Hussain Ahmad</h2>
                            </div>
                        </div>

                        <p>{post.description}</p>
                    </div>

                    <hr />

                    <Comments />

                    <hr />

                    <AddComment />

                </div>
                <div style={{marginTop: '-1.2rem'}}>
                    <Ads />
                    <Newsletter />
                    <Socials />
                    <Ads />
                    <TopPosts posts={props.posts} />
                </div>
            </div>
        </>
    )
}

export default Post;