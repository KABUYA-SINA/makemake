import React from 'react';
import FirstImageStudio from '../../images/studio_img.webp';
import FullArrows from '../arrows/FullArrows';
import SecondImageStudio from '../../images/studio_img_two.webp';
import '../../sass/pages/main/_studiopage.scss';
import '../../sass/base/_studiopage-typo.scss'

const Studiopage = () => {
  return (
    <main className='main-studiopage'>
        <section className="first-element__studiopage">
            <div className="first-element__image--studio">
                <img src={FirstImageStudio} alt='pyramide' />
            </div>
            <div className="first-element__text--studio">
                <h2>esprit mytique</h2>
                <div className="more-text--studiopage">
                  <span className="more-text-span--studio">Makémaké, est le nom du dieu à l’origine de la création sur les Îles de Pâques. L’empreinte créative de Manon Moulin, fondatrice du studio, s’inspire des mythologies et cultures du monde.</span>
                  <p>Spécialisé en design graphique, le studio Makémaké vous accompagne dans la définition de votre ADN, la création d’identité de marque et la conception de supports de communication 360° (papier et digital).</p>
                  <p>Le studio s’entoure d’une équipe d’experts aux profils éclectiques, afin de proposer et façonner une identité singulière, sur-mesure et adaptées au besoins de votre projet.</p>
                </div>
            </div>
        </section>
        <section className="second-element__studiopage">
          <button className='second-element--btn'>
            <span className="btn-line">
              recevoir le book du studio
            </span>
          </button>
          <FullArrows title={'Identité de marque'} />
          <FullArrows title={'Design papier & packaging'} />
          <FullArrows title={'Web design & réseaux sociaux'} />
          <FullArrows title={'Graphisme d’espace'} />
        </section>
        <section className="third-element__studiopage">
          <h2>Leitmotiv</h2>
          <div className="third-element__studiopage--images">
            <img src={SecondImageStudio} alt='Vue sur la lune' />
          </div>
        </section>
        <section className="fourth-element__studiopage"></section>
        <section className="fith-element__studiopage"></section>

    </main>
  )
}

export default Studiopage