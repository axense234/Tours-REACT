import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
// Tours
import { tours } from "./tourObjects";
// CSS
import "./index.css";
// TourOffer
import { TourOffer } from "./TourOffer";

const MainApp = () => {
  const [newTours, setNewTours] = useState(tours);
  const [isLoading, setIsLoading] = useState(true);
  const [remainingTours, setRemainingTours] = useState(true);
  useEffect(() => {
    setTimeout(
      fetch(tours)
        .then(() => {
          setIsLoading(false);
        })
        .catch((error) => console.log(error)),
      2000
    );
  }, []);

  useEffect(() => {
    if (newTours.length === 0) {
      setRemainingTours(false);
    }
  }, [newTours]);

  if (remainingTours === false) {
    return (
      <>
        <div className='flex-container-3'>
          <h2>No Tours Left</h2>
          <button
            id='refresh-button'
            onClick={() => document.location.reload()}
          >
            Refresh
          </button>
        </div>
      </>
    );
  }

  if (isLoading === false) {
    return (
      <>
        <section id='main-app'>
          <h1>Our Tours</h1>
          <hr />
          {newTours.map((loop) => {
            const { tourImg, tourName, tourCost, tourDescriptionFull, id } =
              loop;
            return (
              <section id='tourObject' key={id}>
                <React.Fragment key={id}>
                  <TourOffer
                    img={tourImg}
                    name={tourName}
                    cost={tourCost}
                    description={tourDescriptionFull}
                  ></TourOffer>
                  <button
                    key={new Date().getTime().toString()}
                    className='not-interested'
                    onClick={() =>
                      setNewTours(
                        newTours.filter((thing) => {
                          return thing.id !== id;
                        })
                      )
                    }
                  >
                    Not Interested
                  </button>
                </React.Fragment>
              </section>
            );
          })}
        </section>
      </>
    );
  }

  return (
    <>
      <section id='loading-section'>
        <div id='loading'>
          Loading
          <span id='first'>.</span>
          <span id='second'>.</span>
          <span id='third'>.</span>
        </div>
        <p id='please-wait'>Please wait</p>
      </section>
    </>
  );
};
ReactDOM.render(<MainApp></MainApp>, document.getElementById("root"));
