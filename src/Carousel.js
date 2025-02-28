import { useState } from "react";
import "./Carousel.css";
import Card from "./Card";


/** Carousel: displays images and arrows to navigate through them
 * 
 * Props:
 * - photos: array of {src, caption} objects
 * - title: string describing the collection of images
 * 
 * State:
 * - currCardIdx: integer for current card index
 * 
 * App --> Carousel --> Card
 */
function Carousel({ photos, title }) {
  const [currCardIdx, setCurrCardIdx] = useState(0);

  const currCard = photos[currCardIdx];
  const total = photos.length;

  //Increments currCardIdx state by 1
  function goForward() {
    setCurrCardIdx(currCardIdx + 1);
  }

  //Decreases currCardIdx state by 1
  function goBackward() {
    setCurrCardIdx(currCardIdx - 1);
  }

  function handleLeftArrow() {
    if (currCardIdx === 0) {
      return null
    } else {
      return <i
        className="bi bi-arrow-left-circle"
        onClick={goBackward}
      />
    }
  }

  function handleRightArrow() {
    if (currCardIdx === total - 1) {
      return null
    } else {
      return <i
        className="bi bi-arrow-right-circle"
        onClick={goForward}
      />
    }
  }

  return (
    <div className="Carousel">
      <h1>{title}</h1>
      <div className="Carousel-main">
        {handleLeftArrow()}
        <Card
          caption={currCard.caption}
          src={currCard.src}
          currNum={currCardIdx + 1}
          totalNum={total}
        />
        {handleRightArrow()}
      </div>
    </div>
  );
}

export default Carousel;