import StarRed from "./StarRed";
import StarWhite from "./StarWhite";

const Rate = (props) => {
  const rate = [1, 2, 3, 4, 5];
  const { rating } = props;
  return (
    <div className="containerRating">
      {rate.map((number) => {
        /* parseInt convertit chaîne en nombre */
        /* ternaire verifiant grace au map si chaque nombre du tableau rate est <= a la propriété rating du json, si oui on invoque une etoile rouge si non on invoque une etoile blanche */
        return number <= parseInt(rating, 10) ? (
          <StarRed className="star" alt="star_red" key={number} />
        ) : (
          <StarWhite className="star" alt="star_white" key={number} />
        );
      })}
    </div>
  );
};

export default Rate;
