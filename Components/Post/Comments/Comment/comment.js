import styles from './comment.module.scss';

const Comment = props => {

    const replies = Array.apply('' + Math.random(), Array(Math.floor(Math.random() * 3)));

    return(
        <div className={styles.comment}>
            <div className={styles.name}>
                <img src='/admin.jpg' alt='Admin' />
                <div className={styles.text}>
                    <h2>Hussain Ahmad</h2>
                    <p>December 12, 2021</p>
                </div>
            </div>

            <p className={styles.content}>{props.text}</p>
            <p className={styles.reply}>Add reply</p>

            {replies.length !== 0 ?
                <div className={styles.replies}>
                    {replies.map(e => (
                        <div key={e}>
                            <div className={styles.name}>
                                <img src='/admin.jpg' alt='Admin' />
                                <div className={styles.text}>
                                    <h2>Hussain Ahmad</h2>
                                    <p>December 12, 2021</p>
                                </div>
                            </div>

                            <p className={styles.content}>{props.text}</p>
                        </div>
                    ))}
                </div>
            : null}
        </div>
    )
}

export default Comment;