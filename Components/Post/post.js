import styles from './post.module.scss';
import Ads from "../../UI/Sidebar/ad";
import Newsletter from "../../UI/Sidebar/newsleteer";
import Socials from "../../UI/Sidebar/socials";
import TopPosts from "../../UI/Sidebar/topPosts";
import Link from "next/link";
import Comments from "./Comments/comments";
import AddComment from "./AddComment/addComment";
import {useContext, useEffect} from "react";
import AuthContext from "../../store/AuthContext";
import ReactMarkdown from "react-markdown";

const Post = props => {

    const {isAuth} = useContext(AuthContext);

    const post = props.posts.find(post => '' + post._id === props.postId);

    return(
        <>
            <Link href='/'><a className={styles.back}><div><i className="fas fa-chevron-left" /></div> Back to Blog </a></Link>
            <div className={styles.post}>
                <div className={styles.content}>
                    <img src={post.image} alt='Blog Post' />
                    <p className={styles.tag}>{post.category}</p>

                    <h1 className={styles.title}>{post.title}</h1>

                    <p>{post.slug}</p>

                    <hr />

                    <ReactMarkdown>{post.description}</ReactMarkdown>

                    <hr />

                    <div className={styles.about}>
                        <div className={styles.upper}>
                            <img src='/admin.jpg' alt='Admin' />
                            <div className={styles.text}>
                                <p>About the author</p>
                                <h2>{post.owner}</h2>
                            </div>
                        </div>

                        <p>{post.about}</p>
                    </div>

                    <hr />

                    {post.comments.length !== 0 && (
                        <>
                            <Comments comments={post.comments} />
                            <hr />
                        </>
                    )}

                    {isAuth ? <AddComment id={post._id} /> :
                        (
                            <>
                                <Link href='/signin'><a className={styles.link}>Sign in</a></Link>
                                <p style={{display: 'inline'}}> to post a comment.</p>
                            </>
                        )
                    }

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