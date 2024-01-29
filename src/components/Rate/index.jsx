import './Rate.scss'
import gris from '../../assets/icons/star-gris.png'
import orange from '../../assets/icons/star-orange.png'


function Rate({ rating }) {
    const star_gris = (<img src={gris} alt='star gris' />)
    const star_orange = (<img src={orange} alt='star orange' />)
    const rating_level = [1, 2, 3, 4, 5];

    return (
        <div className='logement__rate'>
            {
                rating_level.map(
                    (level, index) =>
                        <span key={'rating' + index}>
                            {rating >= level ? star_orange : star_gris}
                        </span>
                )
            }
        </div>
    )

}

export default Rate