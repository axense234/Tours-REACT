// React
import React, { useState } from "react";
// Tours
import { tours } from "./data";
// CSS
import "./index.css";
// Components
import Loading from "./Loading";
import TourOffer from "./TourOffer";
// Hooks
import useGetTours from "./useGetTours";

const App = () => {
  const [newTours, setNewTours] = useState(tours);
  const [isLoading, setIsLoading] = useState(true);

  useGetTours(setNewTours, setIsLoading, tours);

  if (newTours.length < 1) {
    return (
      <div className="no-tours-container">
        <h1>No Tours Left</h1>
        <button type="button" onClick={() => document.location.reload()}>
          Refresh
        </button>
      </div>
    );
  }

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="main-container">
      <header className="main-container__title">
        <h1>Our Tours</h1>
        <hr />
      </header>
      <main className="main-container__tours">
        {newTours.map((tour) => {
          const { tourImg, tourName, tourCost, tourDescriptionFull, id } = tour;
          return (
            <section className="main-container__tour" key={id}>
              <TourOffer
                img={tourImg}
                name={tourName}
                cost={tourCost}
                description={tourDescriptionFull}
              />
              <button
                type="button"
                onClick={() =>
                  setNewTours(
                    newTours.filter((tour) => {
                      return tour.id !== id;
                    })
                  )
                }
              >
                Not Interested
              </button>
            </section>
          );
        })}
      </main>
    </div>
  );
};

export default App;
