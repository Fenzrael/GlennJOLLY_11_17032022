import Card from "./Card";

const ContainerCard = (props) => {
  const { cards } = props;
  return (
    <ul className="container">
      {cards.map((card) => {
        return (
          <Card
            key={card.id}
            title={card.title}
            imgUrl={card.cover}
            id={card.id}
          />
        );
      })}
    </ul>
  );
};

export default ContainerCard;
