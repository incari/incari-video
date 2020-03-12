import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Search from "../components/Search";
import Categories from "../components/Categories";
import Carousel from "../components/Carousel";
import CarouselItem from "../components/CarouselItem";
import Footer from "../components/Footer";

import "../assets/styles/App.scss";

const App = () => {
  const [videos, setVideos] = useState({
    myList: [],
    trends: [],
    originals: []
  });

  useEffect(() => {
    fetch("http://localhost:3000/initialState")
      .then(response => response.json())
      .then(data => setVideos(data));
  }, []);

  return (
    <div className="App">
      <Header></Header>
      <Search></Search>

      {videos.myList.length > 0 && (
        <Categories title="Mi Lista">
          <Carousel>
            <CarouselItem />
          </Carousel>
        </Categories>
      )}

      <Categories title="Tendencias">
        <Carousel>
          <CarouselItem />
        </Carousel>
      </Categories>

      <Categories title="Originales de Incari Video">
        <Carousel>
          <CarouselItem />
        </Carousel>
      </Categories>
      <Footer></Footer>
    </div>
  );
};

export default App;
