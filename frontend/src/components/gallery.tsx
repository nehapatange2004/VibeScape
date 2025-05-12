// import React from "react";

import {useEffect } from "react";
import Search from "./Search";
import ImagesLayout from "./imageslayout";
import { img as imageContext} from "../wrapper/imageContext.tsx";
const Gallery = () => {
  const { setQuery, queried } = imageContext();
  const img = (
    <div className="search-gallery">
      <Search setSearchQuery={setQuery} />
      <ImagesLayout  />
    </div>
  );
  useEffect(() => {
    console.log(queried);
  }, [queried]);
  return img;
};

export default Gallery;
