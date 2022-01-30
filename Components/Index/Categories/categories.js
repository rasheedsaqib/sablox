import styles from './categories.module.scss';

const Categories = props => {

    const categories = [{_id: '001', name: 'All Categories'}, ...props.categories];
    const {selected, setSelected} = props;

    return (
        <div className={styles.categories}>
            {categories.map(category => {
                return (
                    <p key={category._id}
                       className={category._id === selected ? styles.active : null}
                       onClick={() => setSelected(category._id)}>
                        {category.name}
                    </p>
                )
            })}
        </div>
    )
}

export default Categories;