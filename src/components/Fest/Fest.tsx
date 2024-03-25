import festin from '../../assets/img/festin2024.jpeg';
import './Fest.css';

const Fest = () => {
  return (
    <div className='fest-container d-flex flex-column justify-content-center'>
      <div className='text-center'>
        <h3><span className='text-success'>"Festin sin Piedra"</span> 2024 <span className='text-warning'>.</span></h3>
        <p>Se parte de todas nuestras actividades <span className='text-success fw-bold'>!</span> <span className='text-warning'>.</span></p>
      </div>
      <div className='d-flex justify-content-center p-3'>
        <img src={festin} alt="festin" className='fest-image' />
      </div>
    </div>
  );
}

export default Fest;
