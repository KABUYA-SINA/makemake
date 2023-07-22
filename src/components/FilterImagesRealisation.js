import React, { useState } from 'react';
import DatasImagesRealisation from '../data-image/DatasImagesRealisation';
import Inputs from './input/Input';
import '../sass/base/filter-typo.scss';
import '../sass/pages/filter.scss';

const FilterImagesRealisation = () => {

    const [data, setData] = useState(DatasImagesRealisation);

    const input =[
        {
            id: 1,
            type: 'radio',
            name: 'Tout',
            label: 'Tout'
        },
        {
            id: 2,
            type: 'radio',
            name: 'Design papier',
            label: 'Design papier'
        },
        {
            id: 3,
            type: 'radio',
            name: "Graphisme d'espace",
            label: "Graphisme d'espace"
        },
        {
            id: 4,
            type: 'radio',
            name: 'Identité de marque',
            label: 'Identité de marque'
        },
        {
            id: 5,
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
                        <Inputs key={i.id} {...i} value={i.name} className="form-input"/>
                    ))}
                </fieldset>
            </ul>
            <ul>

            </ul>
        </div>
    )
}

export default FilterImagesRealisation