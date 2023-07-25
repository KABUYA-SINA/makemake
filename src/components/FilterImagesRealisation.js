import React, { useState } from 'react';
import DatasImagesRealisation from '../data-image/DatasImagesRealisation';
import Inputs from './input/Input';
import Card from './Card';
import ErrorData from '../pages/ErrorData';
import { ErrorBoundary } from 'react-error-boundary';
import '../sass/base/filter-typo.scss';
import '../sass/pages/filter.scss';

const FilterImagesRealisation = () => {

    const [data, setData] = useState(DatasImagesRealisation);
    const [radioValue, setRadioValue] = useState('Tout')
    const [buttonRadio, setButtonRadio] = useState(data.length)

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

    return (
        <div className='filter-realisation'>
            <ul className='filter-realisation--elements'>
                <fieldset>
                    {input.map((i) => (
                        <Inputs
                            key={i.id}
                            {...i}
                            value={i.name}
                            name={'iRadio'}
                            className="form-input"
                            onChange={(e) => setRadioValue(e.target.id)}
                        />
                    ))}
                </fieldset>
            </ul>
            <ul className='filter-realisation--images'>
                <ErrorBoundary FallbackComponent={ErrorData} onReset={() => {}}>
                    {
                        data
                        .filter((image) => image.element.limit.includes(radioValue))
                        .slice(0, buttonRadio)
                        .map((carte, index) => (
                            <Card key={index} image={carte.image} alt={carte.alt} title={carte.title}/>
                        ))
                    }
                </ErrorBoundary>
            </ul>
        </div>
    )
}

export default FilterImagesRealisation