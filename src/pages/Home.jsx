import { useEffect, useState } from "react";
import axios from "axios";
import Header from "../components/Header";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import ContainerCards from "../components/ContainerCards";

const Home = () => {
  // Creation hook State des données json
  const [data, setData] = useState([]);
  // Creation hook Effect (appel axios rendu 1 fois( tableau vide))
  useEffect(() => {
    axios.get("./rental.json").then((res) => setData(res.data));
  }, []);

  // si on veut creer un loader
  /* if(data === []){
    return <div>en cours de chargement</div>
  } */

  return (
    <>
      <Header />
      <Banner />
      <ContainerCards cards={data} />
      <Footer />
    </>
  );
};

export default Home;
