import { Link } from "react-router-dom";

const Card = (props) => {
  const { title, imgUrl, id } = props;

  return (
    <Link to={{ pathname: "/rental", search: `?id=${id}` }}>
      <li className="container__card card">
        <h1 className="card__title">{title}</h1>
        <img src={imgUrl} alt={title} className="card__image"></img>
      </li>
    </Link>
  );
};

export default Card;
