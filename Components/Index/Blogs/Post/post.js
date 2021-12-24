import styles from './post.module.scss';
import Link from "next/link";

const Post = props => {

    const post = props.post;

    return(
        <Link href={`/posts/${post._id}`}><a className={styles.post}>
            <div className={styles.image} style={{backgroundImage: "url('" + post.image + "')"}} />
            <p className={styles.tag}>{post.tag}</p>
            <h2>{post.title}</h2>
            <div className={styles.owner}>
                <p>{post.owner}</p>
                <p>.</p>
                <p>{post.createdAt}</p>
            </div>
        </a></Link>
    )
}

export default Post;