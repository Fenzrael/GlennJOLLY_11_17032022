const TagsRental = (props) => {
  const { tags } = props;
  return (
    <div className="location__tags block">
      {tags.map((el) => {
        return (
          <span className="block__tag" key={el}>
            {el}
          </span>
        );
      })}
    </div>
  );
};

export default TagsRental;
