
import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import { getOnerealisationImage } from '../../services/imageRealisation';
import Header from '../../components/Header';
import Heading from '../../components/realisations/Heading';
import Cards from '../../components/realisations/Cards';
import Footer from '../../components/Footer';
import { ErrorBoundary } from 'react-error-boundary';
import LoaderData from '../../components/LoaderData';
import ErrorData from '../ErrorData';
import '../../sass/base/_base.scss';
import '../../sass/pages/realisation/_single.scss';


const Single = () => {

    const { id } = useParams()
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        setIsLoading(true)
        getOnerealisationImage(id).then((res) => {
            setData(res.data)
            setIsLoading(false)
        })
    }, [id])

    const text = data.heading
    const imageRealisation = data.pictures
    const zeroChild = imageRealisation?.slice(0, 1)
    const firstChild = imageRealisation?.slice(1, 4)
    const secondChild = imageRealisation?.slice(4, 6)
    const thirdChild = imageRealisation?.slice(6, 7)

    return (
        <React.Fragment>
            <Header />
            <main className='main-single'>
                <ErrorBoundary FallbackComponent={ErrorData} onReset={() => { }}>
                    {isLoading ?
                        <LoaderData data-testid='loader' />
                        :
                        <>
                            <div className="banner-single">
                                {
                                    zeroChild?.map((image, id) => (
                                        <Cards key={id} id={id} image={image.image} alt={image.alt} title={image.alt} />
                                    ))
                                }
                            </div>
                            <div className="separator-single">
                                <Heading
                                    title={text?.title}
                                    span={text?.span}
                                    text={text?.text}
                                    secondText={text?.secondText}
                                />
                                <section className='image-single'>
                                    <div className="image-single--first">
                                        {
                                            firstChild?.map((image, id) => (
                                                <Cards key={id} id={id} image={image.image} alt={image.alt} title={image.alt} />
                                            ))
                                        }
                                    </div>
                                    <div className="image-single--second">
                                        {
                                            secondChild?.map((image, id) => (
                                                <Cards key={id} id={id} image={image.image} alt={image.alt} title={image.alt} />
                                            ))
                                        }
                                    </div>
                                    <div className="image-single--third">
                                        {
                                            thirdChild?.map((image, id) => (
                                                <Cards key={id} id={id} image={image.image} alt={image.alt} title={image.alt} />
                                            ))
                                        }
                                    </div>
                                </section>
                            </div>
                        </>
                    }
                </ErrorBoundary>
            </main>
            <Footer />
        </React.Fragment>
    )
}

export default Single