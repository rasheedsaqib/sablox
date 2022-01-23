import styles from './addComment.module.scss';

const AddComment = props => {
    return(
        <div className={styles.addComment}>
            <h1>Leave a Comment</h1>
            <textarea name='comment' placeholder='Add you comment' />
            <button className={styles.post}>Post</button>
        </div>
    )
}

export default AddComment;