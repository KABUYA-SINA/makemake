import React, { useState } from 'react';
import Inputs from './input/Input';
import Card from './Card';
import ErrorData from '../pages/ErrorData';
import { ErrorBoundary } from 'react-error-boundary';
import { useFetch } from '../services/useFetch';
import Loader from './Loader';
import '../sass/base/filter-typo.scss';
import '../sass/pages/filter.scss';

const FilterImagesRealisation = () => {

    const { data, isLoading, error } = useFetch(process.env.REACT_APP_API_REALISATION);
    const imageRealisation = data

    const [radioValue, setRadioValue] = useState('Tout')
    const [buttonRadio, setButtonRadio] = useState(imageRealisation.length)

    const input =[
        {
            id: "Tout",
            type: 'radio',
            name: 'Tout',
            label: 'Tout',
        },
        {
            id: "Design papier",
            type: 'radio',
            name: 'Design papier',
            label: 'Design papier'
        },
        {
            id: "Graphisme d'espace",
            type: 'radio',
            name: "Graphisme d'espace",
            label: "Graphisme d'espace"
        },
        {
            id: "Identité de marque",
            type: 'radio',
            name: 'Identité de marque',
            label: 'Identité de marque'
        },
        {
            id: "Web design",
            type: 'radio',
            name: 'Web design',
            label: 'Web design'
        }
    ]

    if(error)return <ErrorData />;

    return (
        <>
            { isLoading ?
                (<Loader data-testid="loader" />)
                :
                (<div className='filter-realisation'>
                    <ul className='filter-realisation--elements'>
                        <fieldset>
                            {input.map((i) => (
                                <Inputs
                                    key={i.id}
                                    {...i}
                                    value={i.name}
                                    name={'iRadio'}
                                    className="form-input"
                                    checked={i.id === radioValue}
                                    onChange={(e) => setRadioValue(e.target.id)}
                                />
                            ))}
                        </fieldset>
                    </ul>
                    <ul className='filter-realisation--images'>
                        <ErrorBoundary FallbackComponent={ErrorData} onReset={() => {}}>
                            {
                                imageRealisation
                                .filter((image) => image.element.limit.includes(radioValue))
                                .slice(0, buttonRadio)
                                .map((carte, index) => (
                                    <Card key={index} image={carte.image} alt={carte.alt} title={carte.title}/>
                                ))
                            }
                        </ErrorBoundary>
                    </ul>
                </div>)

            }
        </>
    )
}

export default FilterImagesRealisation