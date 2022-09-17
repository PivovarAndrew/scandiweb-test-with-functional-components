import classnames from 'classnames'

function TextAttribute({ attribute, selectedAttribute, handleClick, styles }) {
    return (
        <>
            <div className={classnames(styles.container,
                attribute.id === selectedAttribute.id && styles.active)}
                onClick={() => handleClick(attribute)}
            >
                {attribute.value}
            </div>
        </>
    )
}

export default TextAttribute;
