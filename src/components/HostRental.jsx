const HostRental = (props) => {
  const { name, picture } = props;
  return (
    <div className="hostRental host__rental">
      <h4 className="hostRental__name">{name}</h4>
      <img className="hostRental__picture" src={picture} alt={name} />
    </div>
  );
};

export default HostRental;
