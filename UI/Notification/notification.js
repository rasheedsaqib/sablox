import styles from './notification.module.scss';
import {useEffect, useState} from "react";
import axios from "../../util/axios";

const Notification = () => {

    const [news, setNews] = useState('');

    useEffect(() => {
        axios.get('/constants')
            .then(res => {
                setNews(res.data.news);
            })
            .catch(err => {
                console.log(err);
            })
    })

    return(
        <div className={styles.notification}>
            <p>{news}</p>
        </div>
    )
}

export default Notification;