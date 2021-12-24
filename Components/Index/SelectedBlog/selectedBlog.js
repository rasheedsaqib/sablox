import styles from './selectedBlog.module.scss';

const SelectedBlog = props => {
    return (
        <div className={styles.selectedBlog}>
            <p className={styles.upperTitle}>OUR BLOG</p>
            <h1 className={styles.upperLine}>Insight and advice <br/>
                from our expert team.</h1>

            <div className={styles.blog}>

                <div className={styles.image}>
                    <div className={styles.layer} />
                    <img src='/thumbnail.jpg' alt='Blog Image'/>
                </div>

                <div className={styles.text}>
                    <p className={styles.tag}>Development</p>
                    <h2 className={styles.title}>
                        Lorem ipsum dolor sit Amet, consectetur
                    </h2>
                    <p className={styles.description}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam Lorem ipsum
                        dolor sit amet, consectetur adipiscing dolore magna aliqua. Ut enim ad minim veniam Lorem ipsum
                        dolor sit amet, consectetur adipiscing</p>

                    <div className={styles.owner}>
                        <p>Hussain Ahmad</p>
                        <p>.</p>
                        <p>December 9, 2021</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SelectedBlog;