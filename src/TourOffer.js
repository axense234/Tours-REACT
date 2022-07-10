import { useState } from "react";

export const TourOffer = (props) => {
  const { img, name, cost, description } = props;
  const [show, setShow] = useState(false);
  return (
    <>
      <img src={img} alt='' />
      <div className='flex-container-1'>
        <h5 id='name'>{name}</h5>
        <p id='cost'>{cost}</p>
      </div>
      <div className='flex-container-2'>
        <p id='description'>
          {show ? description : description.slice(0, 240)}
          <button id='show-button' onClick={() => setShow(!show)}>
            {show ? "Show less" : "Show more"}
          </button>
        </p>
      </div>
    </>
  );
};
