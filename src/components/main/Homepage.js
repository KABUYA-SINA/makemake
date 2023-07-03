import React from 'react';
import { Link } from 'react-router-dom';
import FirstImage from '../../images/first_img_homepage.webp';
import SecondImage from '../../images/home_one.webp';
import ThridImage from '../../images/home_two.webp';
import FourthImage from '../../images/home_three.webp';
import FithImage from '../../images/home_four.webp';
import SixthImage from '../../images/home_five.webp';
import SevenImage from '../../images/home_six.webp';
import '../../sass/pages/main/_homepage.scss';
import '../../sass/base/_homepage-typo.scss';


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
            <section className='second-element__homepage'>
                <div className="second-element__homepage--images">
                    <div className="second-element__first--image">
                        <Link to={process.env.REACT_APP_API_ENDPOINT_TWO}>
                            <div className='second-element__all--text'>
                                <p>Marque Produit</p>
                                <p>Packaging</p>
                                <p>Illustration</p>
                            </div>
                            <div className="second-element__all--image">
                                <img src={SecondImage} alt='Les Marmots' />
                            </div>
                        </Link>
                        <p className='second-element__title'>Les Marmots</p>
                    </div>
                    <div className="second-element__first--image">
                        <Link to={process.env.REACT_APP_API_ENDPOINT_THREE}>
                            <div className='second-element__all--text'>
                                <p>Marque Produit</p>
                                <p>Packaging</p>
                                <p>Illustration</p>
                            </div>
                            <div className="second-element__all--image">
                                <img src={ThridImage} alt='Koya' />
                            </div>
                        </Link>
                        <p className='second-element__title'>Koya</p>
                    </div>
                    <div className="second-element__first--image">
                        <Link to={process.env.REACT_APP_API_ENDPOINT_FOUR}>
                            <div className='second-element__all--text'>
                                <p>Marque Produit</p>
                                <p>Packaging</p>
                                <p>Illustration</p>
                            </div>
                            <div className="second-element__all--image">
                                <img src={FourthImage} alt='Ville de Genoble' />
                            </div>
                        </Link>
                        <p className='second-element__title'>Ville de Grenoble</p>
                    </div>
                    <div className="second-element__first--image">
                        <Link to={process.env.REACT_APP_API_ENDPOINT_FIVE}>
                            <div className='second-element__all--text'>
                                <p>Marque Produit</p>
                                <p>Packaging</p>
                                <p>Illustration</p>
                            </div>
                            <div className="second-element__all--image">
                                <img src={FithImage} alt='Caviste 75cl' />
                            </div>
                        </Link>
                        <p className='second-element__title'>Caviste 75cl</p>
                    </div>
                </div>
                <div className='last-child__section-two'>
                    <Link to={process.env.REACT_APP_API_ENDPOINT_SIX}>
                        Toutes les réalisations
                    </Link>
                </div>
            </section>
            <section className='third-element__homepage'>
                <h2>Expertises</h2>
                <div className="third-element__homepage--images">
                    <img src={SixthImage} alt='cosmonaute' />
                </div>
                <div className='last-child__section-three'>
                    <Link to={process.env.REACT_APP_API_ENDPOINT_SEVEN}>
                        découvrez-les
                    </Link>
                </div>
            </section>
            <section className='fourth-element__homepage'>
                <div className="fourth-element__homepage--images">
                    <img src={SevenImage} alt='les gens qui sourient' />
                </div>
            </section>
        </main>
    )
}

export default Homepage