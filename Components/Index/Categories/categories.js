import styles from './categories.module.scss';
import {useState} from "react";

const Categories = props => {

    const [categories, setCategories] = useState(['All Categories', 'Category 1', 'Category 2', 'Category 3', 'Category 4', 'Category 5', 'Category 6', 'Category 7']);
    const [selected, setSelected] = useState(0);

    return (
        <div className={styles.categories}>
            {categories.map((category, index) => {
                return (
                    <p key={index}
                       className={index == selected ? styles.active : null}
                    onClick={() => setSelected(index)}>
                        {category}
                    </p>
                )
            })}
        </div>
    )
}

export default Categories;