import styles from './addComment.module.scss';
import axios from "../../../util/axios";
import {toast} from "react-toastify";
import {useContext} from "react";
import AuthContext from "../../../store/AuthContext";

const AddComment = props => {

    const {token} = useContext(AuthContext);

    const onSubmit = e => {
        e.preventDefault();
        if(e.target.elements.comment.value.length === 0){
            toast.warn('Please enter a comment.');
        }else {
            axios.post('/comment', {postId: props.id, content: e.target.elements.comment.value}, {headers: { Authorization: token }})
                .then(res => {
                    if(res.status === 201){
                        toast.success('Comment added successfully!');
                    }
                })
        }
    }

    return(
        <form onSubmit={e =>  onSubmit(e)} className={styles.addComment}>
            <h1 style={{margin: '1rem 0'}}>Leave a Comment</h1>
            <textarea name='comment' placeholder='Add you comment' />
            <button className={styles.post}>Post</button>
        </form>
    )
}

export default AddComment;