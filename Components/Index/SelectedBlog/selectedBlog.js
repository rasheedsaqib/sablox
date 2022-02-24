import styles from './selectedBlog.module.scss';
import Link from "next/link";

const SelectedBlog = props => {

    const post = posts.sort((a,b) => (a.views < b.views) ?  -1 : 1).at(-1);

    return (
        <div className={styles.selectedBlog}>
            <p className={styles.upperTitle}>OUR BLOG</p>
            <h1 className={styles.upperLine}>Insight and advice <br/>
                from our expert team.</h1>

            <Link href={`/posts/${post._id}`}><a>
                <div className={styles.blog}>

                    <div className={styles.image}>
                        <div className={styles.layer}/>
                        <img src={post.image} alt='Blog Image'/>
                    </div>

                    <div className={styles.text}>
                        <p className={styles.tag}>{post.category.name}</p>
                        <h2 className={styles.title}>
                            {post.title}
                        </h2>
                        <p className={styles.description}>{post.slug.substr(0,180)}</p>

                        <div className={styles.owner}>
                            <p>{post.owner}</p>
                            <p>.</p>
                            <p>{post.date}</p>
                        </div>
                    </div>
                </div>
            </a></Link>
        </div>
    )
}

export default SelectedBlog;