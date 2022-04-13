import { useState } from "react";
import ChevronLeft from "./ChevronLeft";
import ChevronRight from "./ChevronRight";

const Carousel = (props) => {
  const { pictures } = props;
  const [currentPictureIndex, setCurrentPictureIndex] = useState(0);

  const onClickNext = () => {
    const index =
      currentPictureIndex === pictures.length - 1 ? 0 : currentPictureIndex + 1;
    setCurrentPictureIndex(index);
  };
  const onClickPrevious = () => {
    const index =
      currentPictureIndex === 0 ? pictures.length - 1 : currentPictureIndex - 1;
    setCurrentPictureIndex(index);
  };

  return (
    <div className="carousel">
      <ChevronLeft className="carousel__left" onClick={onClickPrevious} />
      <img
        src={pictures[currentPictureIndex]}
        alt=""
        className="carousel__image"
      />
      <ChevronRight className="carousel__right" onClick={onClickNext} />
    </div>
  );
};

export default Carousel;
