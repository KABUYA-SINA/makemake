import FirstImageLoader from '../images/loader/KrisCartelHouse.webp';
import '../sass/pages/_loader.scss';

const Loader = () => {

  return (
    <div className='main-loading'>
      <img src={FirstImageLoader} alt="Loading..." />
    </div>
  )
}

export default Loader