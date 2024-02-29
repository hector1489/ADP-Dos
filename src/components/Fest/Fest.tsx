import festin from '../../assets/img/festin2024secondVersion.jpeg';
import './Fest.css';

const Fest = () => {
  return (
    <div className='fest-container d-flex flex-column justify-content-center'>
      <div className='text-center'>
        <h3>No te pierdas el Festin sin Piedra 2024 <span className='text-success'>.</span></h3>
        <p>Y comienza a ser parte de todas nuestras actividades <span className='text-success fw-bold'>! .</span></p>
      </div>
      <div className='d-flex justify-content-center p-3'>
        <img src={festin} alt="festin" className='fest-image' />
      </div>
    </div>
  );
}

export default Fest;
