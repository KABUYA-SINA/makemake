import React from 'react';
import Filter from '../FilterImagesRealisation';
import ErrorData from '../../pages/ErrorData';
import { ErrorBoundary } from 'react-error-boundary';
import '../../sass/pages/main/_realisations.scss';
import '../../sass/base/_realisation-typo.scss';

const Realisation = () => {
  return (
    <main className='main-realisationpage'>
      <div className="exception-realisationpage">
        <span className='exception-element'>Les rencontres sont des récits que l’on façonne,</span>
        <span className='exception-element'> des valeurs illustrées et  <span className='exception-img'>inspirations</span>  croisées</span>
      </div>
      <ErrorBoundary FallbackComponent={ErrorData} onReset={() => {}}>
          <Filter />
      </ErrorBoundary>
    </main>
  )
}

export default Realisation;