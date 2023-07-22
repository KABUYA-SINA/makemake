import React from 'react';
import FirstImageExpertise from '../../images/expertise/expertise_img_one.webp';
import SecondImageExpertise from '../../images/expertise/expertise_img_two.webp';
import ThirdImageExpertise from '../../images/expertise/expertise_img-three.webp';
import FourthImageExpertise from '../../images/expertise/expertise_img_four.webp';
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
            <span className='title-expertise__span'>Identite</span>
            <span className='title-expertise__span'> De Marque</span>
          </div>
          <div className="more-text--expertisepage">
            <span className="more-text-span--expertise">Démarquez-vous et existez pleinement dans votre domaine d’expertise.</span>
            <p>La création d’identité visuelle, c’est traduire l’essence d’une marque à travers un récit graphique inspirant, unique et sensé.</p>
            <p>Pour cela, plusieurs étapes indissociables sont mises en œuvre : exploration du positionnement, analyse de votre vision et identification des objectifs, valeurs et cibles… Ensuite, nous construisons votre univers graphique : charte graphique, logo, éléments visuels … </p>
          </div>
        </div>
      </section>
      <section className='second-element__expertisepage'>
        <div className="second-element__image--expertise">
          <img src={SecondImageExpertise} alt='multiple images' />
        </div>
        <div className="second-element__text--expertise">
          <h2>Design print</h2>
          <div className="more-text--expertisepage">
            <span className="more-text-span--expertise">Posez vos messages sur papier.</span>
            <p>Le papier est un support sensible qui s’inscrit dans le temps et marque les esprits. Pour tout support de communication à utilisation durable, pour des occasions exceptionnelles ou pour une édition spéciale, nous sommes force de proposition sur les solutions les plus adaptées, tout en respectant votre univers.</p>
            <p>Notre studio aime mettre les mains dans l’encre et s’entoure de partenaires imprimeurs aux techniques artisanales et responsables : choix du papier et finition originale… En clair, nous gérons votre projet de A à Z, de la conception graphique à l’impression.</p>
          </div>
        </div>
      </section>
      <section className='third-element__expertisepage'>
        <div className="third-element__image--expertise">
          <img src={ThirdImageExpertise} alt='ordinateur & mobile' />
        </div>
        <div className="third-element__text--expertise">
          <h2>Web Design</h2>
          <div className="more-text--expertisepage">
            <span className="more-text-span--expertise">Pensez votre présence en ligne !</span>
            <p>Une identité doit prendre en compte les enjeux digitaux. Les usages actuels nous invitent à construire une présence numérique, soit par la création d’un site web, la réalisation d’application mobile et/ou par l’animation de votre activité sur les réseaux sociaux.</p>
            <p>En ce sens, il est important de penser l’identité visuelle dans son entièreté et de lui donner vie via le digital. Nous vous accompagnons dans la réflexion de l’architecture et de l’expérience utilisateurs pour votre site web ou pour vos réseaux sociaux, afin d’optimiser la lisibilité de votre identité graphique et votre visibilité digitale.</p>
          </div>
        </div>
      </section>
      <section className='fourth-element__expertisepage'>
        <div className="fourth-element__image--expertise">
          <img src={FourthImageExpertise} alt='deux hommes portant une télévision' />
        </div>
        <div className="fourth-element__text--expertise">
          <div className="title-epxertise">
            <span className='title-expertise__span'>Graphisme</span>
            <span className='title-expertise__span'> D'espace</span>
          </div>
          <div className="more-text--expertisepage">
            <span className="more-text-span--expertise">Donnez une autre dimension à votre projet, en vous appropriant l’espace !</span>
            <p>La communication de votre projet ne s’arrête pas aux supports papiers et digitaux. Elle passe aussi par l’appropriation graphique et sensible, de l’espace occupé.</p>
            <p>Nous vous proposons d’habiller votre intérieur, à l’image de votre univers, grâce aux éléments de la charte graphique (typos, couleurs ou matériaux). Le graphisme mural rend votre espace professionnel ou lieu d’exposition unique et mémorable, pour une vraie expérience immersive.</p>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Expertises;