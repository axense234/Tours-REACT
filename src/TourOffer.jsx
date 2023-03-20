// React
import { useState } from "react";

const TourOffer = ({ img, name, cost, description }) => {
  const [show, setShow] = useState(false);

  return (
    <section className='tour-offer-container'>
      <img src={img} alt={name} />
      <div className='tour-offer-container__title'>
        <h2>{name}</h2>
        <p>{cost}</p>
      </div>
      <div className='tour-offer-container__info'>
        <p>
          {show ? description : description.slice(0, 240)}
          <button type='button' onClick={() => setShow(!show)}>
            {show ? "Show less" : "Show more"}
          </button>
        </p>
      </div>
    </section>
  );
};

export default TourOffer;
