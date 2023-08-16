import React from 'react';
import Collapse from '../Collapse';
import Vector from '../../images/studio/collapse_img.webp';
import FirstImageStudio from '../../images/studio/studio_img.webp';
import SecondImageStudio from '../../images/studio/studio_img_two.webp';
import ThirdImageStudio from '../../images/gif/studio_third_img.gif';
import FullArrows from '../arrows/FullArrows';
import DragAndDrop from '../DragAndDrop';
import ErrorData from '../../pages/ErrorData';
import Btn from '../input/btn';
import { ErrorBoundary } from 'react-error-boundary';
import '../../sass/pages/main/_studiopage.scss';
import '../../sass/base/_studiopage-typo.scss';

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
        <Btn title={'recevoir le book du studio'} link={process.env.REACT_APP_END_KRIS}/>
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
      <section className="fourth-element__studiopage">
        <div className="fourth-element__studiopage--first">
          <h2>méthodo</h2>
          <p>Notre équipe met en place une méthodologie de travail fondée sur l’échange et l’inspiration collective entre tous les acteurs du projet.</p>
          <div className="fourth-element__studiopage--third">
            <div className="fourth-element__studiopage--third--img">
                <img src={ThirdImageStudio} alt="gif de l'agence" />
            </div>
            <div className="fourth-element--collapse">
              <Collapse collapseImage={Vector} title={'Se rencontrer'} text={'Identification de vos besoins, vos attentes et/ou problématiques de communication — Apprenons à nous connaître et échangeons sur votre projet afin de construire une collaboration fondée sur la confiance et la transparence. Nous investiguons votre univers, valeur ajoutée et territoire d’expertise pour imaginer et construire un univers graphique qui vous ressemble.'}/>
              <Collapse title={'Collaborer'} text={'Proposition d’une stratégie de communication clairement identifiée – Nous formulons une réponse claire et pertinente afin de répondre à vos besoins, tout en veillant au respect de votre budget.'}/>
              <Collapse title={'Créer'} text={'Élaboration d’une communication globale et cohérente — Notre studio met en place un vocabulaire graphique unique et sensé. Nous faisons vivre vos messages grâce à des éléments graphiques qui composent votre univers et que nous aurons imaginés et validés ensemble. '}/>
              <Collapse title={'Exister'} text={'Un accompagnement durable pour l’appropriation de votre communication – Et après ? Notre équipe aux profils stratégiques, créatifs et opérationnels s’engage à vous donner les meilleurs conseils afin que vous puissiez vous approprier votre image de marque et vos nouveaux supports de communication.'}/>
            </div>
          </div>
        </div>
      </section>
      <section className="fith-element__studiopage">
        <h2>Atelier de curiosité</h2>
        <ErrorBoundary FallbackComponent={ErrorData} onReset={() => {}}>
          <DragAndDrop />
        </ErrorBoundary>
      </section>
    </main>
  )
}

export default Studiopage