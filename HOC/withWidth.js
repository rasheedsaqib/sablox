import styles from './withWidth.module.scss';

const withWidth = (WrappedComponent, css) => {
    return props => (
        <div style={{...css, width: '100%'}}>
            <div className={styles.width}>
                <WrappedComponent {...props} />
            </div>
        </div>
    )
}

export default withWidth;