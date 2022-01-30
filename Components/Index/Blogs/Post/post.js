import styles from './post.module.scss';
import Link from "next/link";

const Post = props => {

    const post = props.post;

    return(
        <Link href={`/posts/${post._id}`}><a className={styles.post}>
            <div className={styles.image} style={{backgroundImage: "url('" + post.image + "')"}} />
            <p className={styles.tag}>{post.category.name}</p>
            <h2>{post.title.substr(0,50)}..</h2>
            <div className={styles.owner}>
                <p>{post.owner}</p>
                <p>.</p>
                <p>{post.date}</p>
            </div>
        </a></Link>
    )
}

export default Post;