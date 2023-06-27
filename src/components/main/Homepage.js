import React from 'react';
import '../../sass/pages/main/_homepage.scss';
import FirstImage from '../../images/first_img_homepage.webp'
import { Link } from 'react-router-dom';

const Homepage = () => {
  return (
    <main className='main-homepage'>
        <div className="exception-homepage">
            <span className='exception-element'>Créer une image de marque et univers</span>
            <span className='exception-element'>graphique uniques et <span className='exception-img'>mémorables</span></span>
        </div>
        <section className='first-element__homepage'>
            <div className="first-element__image">
                <img src={FirstImage} alt="observation de l'éclipse" />
            </div>
            <div className="first-element__text">
                <h2>Le studio</h2>
                <div className="more-text--homepage">
                    <span className='more-text-span'>Vous souhaitez créer ou faire évoluer votre identité de marque, mettre en lumière votre activité ou produits et/ou concevoir des supports de com ?</span>
                    <p>Le studio Makémaké, basé à Vienne, spécialisé en design graphique papier et digital, vous accompagne dans l’élaboration de votre projet de votre logo, carte de visite, plaquette, à la création de votre site web et/ou de votre présence sur les réseaux sociaux. </p>
                    <p>Créateur d’identité de marque globale, nous révélons votre univers et vos valeurs, afin de les retranscrire sur des supports de communication adaptés. </p>
                </div>
                <div className='last-child__first-element'>
                    <Link to={process.env.REACT_APP_API_ENDPOINT_ONE}>
                        L'histoire du studio
                    </Link>
                </div>
            </div>
        </section>

    </main>
  )
}

export default Homepage