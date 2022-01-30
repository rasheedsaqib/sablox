import styles from './comments.module.scss';
import Comment from "./Comment/comment";

const Comments = props => {

    return(
        <div className={styles.comments}>
            <h1 style={{margin: '1rem 0'}}>Comments</h1>

            {props.comments.map((comment, index) => {
                return (
                    <div key={comment._id}>
                        <Comment text={comment.content} name={comment.user.firstName + ' ' + comment.user.lastName} date={comment.createdAt} />
                        {index !== props.comments.length-1 ? <hr className={styles.hr} /> : null}
                    </div>
                );
            })}

        </div>
    )
}

export default Comments;