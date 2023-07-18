import React from 'react';
import FirstImageExpertise from '../../images/expertise/expertise_img_one.webp';
import '../../sass/pages/main/_expertisepage.scss';
import '../../sass/base/_expertise-typo.scss';


const Expertises = () => {
  return (
    <main className='main-expertisepage'>
        <section className='first-element__expertisepage'>
            <div className="first-element__image--expertise">
                <img src={FirstImageExpertise} alt='relaxation' />
            </div>
            <div className="first-element__text--expertise">
                <div className="title-epxertise">
                    <span className='title-expertise__span'>Identité</span>
                    <span className='title-expertise__span'> De Marque</span>
                </div>
                <div className="more-text--expertisepage">
                  <span className="more-text-span--expertise">Démarquez-vous et existez pleinement dans votre domaine d’expertise.</span>
                  <p>La création d’identité visuelle, c’est traduire l’essence d’une marque à travers un récit graphique inspirant, unique et sensé.</p>
                  <p>Pour cela, plusieurs étapes indissociables sont mises en œuvre : exploration du positionnement, analyse de votre vision et identification des objectifs, valeurs et cibles… Ensuite, nous construisons votre univers graphique : charte graphique, logo, éléments visuels … </p>
                </div>
            </div>
        </section>
    </main>
  )
}

export default Expertises;