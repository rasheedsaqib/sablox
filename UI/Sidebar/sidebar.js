import Link from "next/link";
import styles from './sidebar.module.scss';
import {useState} from "react";

const Sidebar = props => {

    const [socials, setSocials] = useState([
        {classes: 'fab fa-twitter', color: '#00acee'},
        {classes: 'fab fa-instagram', color: '#F77737'},
    ]);

    return(
        <div className={styles.sidebar}>

            <div className={styles.content}>
                <p className={styles.title} style={{marginTop: 0}}>Advertisement</p>
                <div className={styles.ads}>
                    <p>Ads here</p>
                </div>
            </div>

            <div className={styles.content}>
                <p className={styles.title}>Newsletter</p>
                <div className={styles.newsletter}>
                    <input type='email' placeholder='Email' />
                    <button>Subscribe</button>
                </div>
            </div>

            <div className={styles.content}>
                <p className={styles.title}>Follow us</p>
                <div className={styles.socials}>
                    <div className={styles.social}>
                        <span> <i className="fab fa-twitter" /> </span>
                    </div>
                    <div className={styles.social}>
                        <span> <i className="fab fa-instagram" /> </span>
                    </div>
                    <div className={styles.social}>
                        <span> <i className="fab fa-linkedin-in" /> </span>
                    </div>
                </div>
            </div>

            <div className={styles.content}>
                <p className={styles.title}>Advertisement</p>
                <div className={styles.ads}>
                    <p>Ads here</p>
                </div>
            </div>

            <div className={styles.content}>
                <p className={styles.title}>Top Posts</p>
                <div className={styles.topPosts}>
                    {props.posts.slice(0,3).map(post => (
                        <Link href={`/posts/${post._id}`} key={post._id}><a className={styles.post}>
                            <div className={styles.image} style={{backgroundImage: "url('" + post.image + "')"}} />
                            <div className={styles.text}>
                                <p className={styles.tag}>{post.tag}</p>
                                <h3>{post.title}</h3>
                                <div className={styles.owner}>
                                    <p>{post.owner}</p>
                                    <p>.</p>
                                    <p>{post.createdAt}</p>
                                </div>
                            </div>
                        </a></Link>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Sidebar;