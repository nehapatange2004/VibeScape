// import React from "react";
import { useState } from "react";
// import Search from "./Search";
import "../App.css";
import { img as imageContext } from "../wrapper/imageContext";
import { Link } from "react-router-dom";
import { Blurhash } from "react-blurhash";
import DownloadImage from "./downloadImage";




export default function ImagesLayout() {
  const { images, setImgIndex } = imageContext();
  const [imageLoading, setImageLoading] = useState(true);
  console.log("images in imglayout: ", images);
  try{

    if (images.length === 0) {
    return null;
  }
  return (
    <div className="image-container">
      {images.map((item: any, index: number) => (
        <div
          key={index}
          className="actual-image"
          
        >
          <Link
            to="/dashboard/image-details"
            onClick={() => setImgIndex(index)}
          >
           

            {imageLoading && (
              <>
                <Blurhash
                  className="blurhash-remove"
                  hash={images[index].blur_hash}
                  height="100%"
                  width="100%"
                  resolutionY={64}
                  resolutionX={64}
                  style={{
                    transition: "opacity 4s ease-in-out",
                    opacity: !imageLoading ? 0 : 1,
                  }}
                />
                {/* glass effect */}
                <div className="glass-effect"></div>
              </>
            )}

            <img
              src={`${item.urls.regular}`}
              className=""
              alt={`index ${index}`}
              onLoad={() => {
                setTimeout(
                  () => {
                    setImageLoading(false);
                  },

                  0
                );
              }}
              style={{
                transition: "opacity 3s ease-in-out",
                opacity: imageLoading ? 0 : 1,
              }}
            />

            <div
              className={
                "image-options d-flex flex-column justify-content-between align-items-end p-2 "
              }
            >
              
                <span
                  className={"d-flex justify-content-center align-items-center"}
                >
                  <DownloadImage />
                </span>
              
              <div>
                <div
                  className={
                    "like-hearts p-2 d-flex flex-column justify-content-center alight-items-center"
                  }
                >
                  <i
                    className="fa-solid fa-heart fs-5 text"
                    style={{ color: "rgb(255, 56, 56)" }}
                  ></i>
                  <div className="fs-6 text text-light">{`${item.likes}`}</div>
                </div>
              </div>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
  } catch(err) {
    console.log("Error in the imageslayout while getting images: ", err);
  }

  
}
