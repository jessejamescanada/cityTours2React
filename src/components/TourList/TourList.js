import React, {useState} from "react";
import "./Tourlist.scss";

export default function TourList({ item, handleDeleteTour }) {
  const [showInfo, setShowInfo] = useState(false)

  const { id, city, img, name, info } = item;

  const handleInfo = () => {
    setShowInfo(!showInfo)
  }
  return (
    <article className="tour">
      <div className="img-container">
        <img src={img} alt="of the tour" />
        <span className="close-btn">
          <i className="fas fa-window-close" onClick={() => handleDeleteTour(id)}></i>
        </span>
      </div>
      <div className="tour-info">
        <h3>{city}</h3>
        <h4>{name}</h4>
        <h5>
          info{" "}
          <span>
            <i className="fas fa-caret-square-down" onClick={handleInfo}></i>
          </span>
        </h5>
        {showInfo && <p>{info}</p>}
        
      </div>
    </article>
  );
}
