import './Tags.scss'

function Tags({ listeTags }) {
    return (
        <div className="logement__tags">
            {
                listeTags.map(
                    (tag, index) => <button key={'tag-' + index} className='logement__tags__btn'> {tag}</button>
                )
            }
        </div>
    )

}

export default Tags