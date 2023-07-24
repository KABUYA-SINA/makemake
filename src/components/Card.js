import '../sass/pages/_card.scss';
import { Link } from 'react-router-dom';
import '../sass/base/_card-typo.scss'


function Card ( {id, image, alt, title } ){

    return (
        <div key={id} className='card-realisation--boxes'>
            <Link to={``} className='link-card'>
                <img src={image} alt={alt} />
                <span className='hover-card'>{title}</span>
            </Link>
        </div>
    )
}

export default Card;