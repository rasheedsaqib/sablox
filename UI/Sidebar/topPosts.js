import styles from './sidebar.module.scss';
import Link from "next/link";

const TopPosts = props => {
    return(
        <div className={styles.content}>
            <p className={styles.title}>Top Posts</p>
            <div className={styles.topPosts}>
                {props.posts.slice(0,3).map(post => (
                    <Link href={`/posts/${post._id}`} key={post._id}><a className={styles.post}>
                        <div className={styles.image} style={{backgroundImage: "url('" + post.image + "')"}} />
                        <div className={styles.text}>
                            <p className={styles.tag}>{post.category.name}</p>
                            <h3>{post.title.substr(0,35) + '..'}</h3>
                            <div className={styles.owner}>
                                <p>{post.owner}</p>
                                <p>.</p>
                                <p>{post.date}</p>
                            </div>
                        </div>
                    </a></Link>
                ))}
            </div>
        </div>
    )
}

export default TopPosts;