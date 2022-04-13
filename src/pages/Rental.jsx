import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import Accordion from "../components/Accordion";
import Carousel from "../components/Carousel";
import Footer from "../components/Footer";
import Header from "../components/Header";

const Rental = () => {
  const [data, setData] = useState([]);
  const location = useLocation();
  const currentId = location.search.slice(4);

  useEffect(() => {
    axios.get("./rental.json").then((res) => setData(res.data));
  }, []);
  console.log(data);

  // Le point d'interrogation est une courte ternaire permettant de voir si les donnees du useEffect sont arrivees si oui cela lance le find sinon ccela attends les donnees
  const currentData = data?.find((data) => data.id === currentId);
  console.log(currentData);

  return (
    <>
      <Header />
      {currentData && (
        <>
          <Carousel pictures={currentData.pictures} />
          <div className="rental">
            <Accordion
              title="Description"
              content={currentData.description}
              className="rental__description"
            />
            <Accordion
              title="Équipements"
              content={currentData.equipments.map((el) => {
                return <span key={currentData.id + el}>{el}</span>;
              })}
              className="rental__equipments"
            />
          </div>
        </>
      )}
      <Footer />
    </>
  );
};

export default Rental;
