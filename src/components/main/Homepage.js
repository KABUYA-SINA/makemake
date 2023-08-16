import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ErrorData from '../../pages/ErrorData';
import { ErrorBoundary } from 'react-error-boundary';
import { getHomeImages } from '../../services/imageRealisation';
import Loader from '../LoaderData';
import '../../sass/pages/main/_homepage.scss';
import '../../sass/base/_homepage-typo.scss';


const Homepage = () => {

    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() =>{
        setIsLoading(true)
        getHomeImages().then((res) =>{
            setData(res.data)
            setIsLoading(false)
        })
    }, [])

    const imagesHome = Object.values(data)

    return (
        <main className='main-homepage'>
            <div className="exception-homepage">
                <span className='exception-element'>Créer une image de marque et univers</span>
                <span className='exception-element'>graphique uniques et <span className='exception-img'>mémorables</span></span>
            </div>
            <ErrorBoundary FallbackComponent={ErrorData} onReset={() => {}}>
                { isLoading ?
                    (<Loader data-tested='loader' />)
                    :
                    (
                        <>
                            <section className='first-element__homepage'>
                                <div className="first-element__image">
                                    <img src={imagesHome[0]?.image} alt={imagesHome[0]?.alt} />
                                </div>
                                <div className="first-element__text">
                                    <h2>Le studio</h2>
                                    <div className="more-text--homepage">
                                        <span className='more-text-span'>Vous souhaitez créer ou faire évoluer votre identité de marque, mettre en lumière votre activité ou produits et/ou concevoir des supports de com ?</span>
                                        <p>Le studio Makémaké, basé à Vienne, spécialisé en design graphique papier et digital, vous accompagne dans l’élaboration de votre projet de votre logo, carte de visite, plaquette, à la création de votre site web et/ou de votre présence sur les réseaux sociaux. </p>
                                        <p>Créateur d’identité de marque globale, nous révélons votre univers et vos valeurs, afin de les retranscrire sur des supports de communication adaptés. </p>
                                    </div>
                                    <div className='last-child__first-element'>
                                        <Link to={process.env.REACT_APP_API_ENDPOINT_S}>
                                            L'histoire du studio
                                        </Link>
                                    </div>
                                </div>
                            </section>
                            <section className='second-element__homepage'>
                                <div className="second-element__homepage--images">
                                    <div className="second-element__first--image">
                                        <Link to={process.env.REACT_APP_API_ENDPOINT_SM}>
                                            <div className='second-element__all--text'>
                                                <p>Marque Produit</p>
                                                <p>Packaging</p>
                                                <p>Illustration</p>
                                            </div>
                                            <div className="second-element__all--image">
                                                <img src={imagesHome[1]?.image} alt={imagesHome[1]?.alt} />
                                            </div>
                                        </Link>
                                        <p className='second-element__title'>Les Marmots</p>
                                    </div>
                                    <div className="second-element__first--image">
                                        <Link to={process.env.REACT_APP_API_ENDPOINT_SK}>
                                            <div className='second-element__all--text'>
                                                <p>Marque Produit</p>
                                                <p>Packaging</p>
                                                <p>Illustration</p>
                                            </div>
                                            <div className="second-element__all--image">
                                                <img src={imagesHome[2]?.image} alt={imagesHome[2]?.alt} />
                                            </div>
                                        </Link>
                                        <p className='second-element__title'>Koya</p>
                                    </div>
                                    <div className="second-element__first--image">
                                        <Link to={process.env.REACT_APP_API_ENDPOINT_T}>
                                            <div className='second-element__all--text'>
                                                <p>Marque Produit</p>
                                                <p>Packaging</p>
                                                <p>Illustration</p>
                                            </div>
                                            <div className="second-element__all--image">
                                                <img src={imagesHome[3]?.image} alt={imagesHome[3]?.alt} />
                                            </div>
                                        </Link>
                                        <p className='second-element__title'>Ville de Grenoble</p>
                                    </div>
                                    <div className="second-element__first--image">
                                        <Link to={process.env.REACT_APP_API_ENDPOINT_CS}>
                                            <div className='second-element__all--text'>
                                                <p>Marque Produit</p>
                                                <p>Packaging</p>
                                                <p>Illustration</p>
                                            </div>
                                            <div className="second-element__all--image">
                                                <img src={imagesHome[4]?.image} alt={imagesHome[4]?.alt} />
                                            </div>
                                        </Link>
                                        <p className='second-element__title'>Caviste 75cl</p>
                                    </div>
                                </div>
                                <div className='last-child__section-two'>
                                    <Link to={process.env.REACT_APP_API_ENDPOINT_RR}>
                                        Toutes les réalisations
                                    </Link>
                                </div>
                            </section>
                            <section className='third-element__homepage'>
                                <h2>Expertises</h2>
                                <div className="third-element__homepage--images">
                                    <img src={imagesHome[5]?.image} alt={imagesHome[5]?.alt} />
                                </div>
                                <div className='last-child__section-three'>
                                    <Link to={process.env.REACT_APP_API_ENDPOINT_EX}>
                                        découvrez-les
                                    </Link>
                                </div>
                            </section>
                            <section className='fourth-element__homepage'>
                                <div className="fourth-element__homepage--images">
                                    <img src={imagesHome[6]?.image} alt={imagesHome[6]?.alt} />
                                </div>
                            </section>
                        </>
                    )
                }
            </ErrorBoundary>
        </main>
    )
}

export default Homepage