import { Box, Button, Card, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { useState } from "react";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";
import { img as imagesContext } from "../wrapper/imageContext";
import { createElement } from "@emotion/react";
import {capitalizeFirstLetterOfWord} from "../utilityFunctions/stringmanuplation.tsx";
import DownloadImage from "./downloadImage";

const ImageDetails = () => {
  const { images, imgIndex, setImgIndex } = imagesContext();
  const [imageLoading, setImageLoading] = useState(true);
  console.log("Inside the image details: ", images);
  return (
    <Box sx={{ zIndex: 10 }}>
      {/* for wide screen */}

      <Box
        sx={{
          width: "100vw",
          height: "80vh",
          // backgroundColor: "yellow",
          flexGrow: 1,
          display: { xs: "none", md: "flex" },
          justifyContent: "center",
          gap: "30px",
          
        }}
      >
        <Box
          component="section"
          sx={{
            // p: 1,
            border: "1px solid rgb(214, 158, 136)",
            boxShadow: "1px 1px 1px rgb(230, 171, 144);",
            backgroundBlendMode: "color",
            borderRadius: "10px",
            width: "92vw",
            height: "86vh",
            display: "flex",
            // backgroundColor: "greenyellow",
            justifyContent: "space-around",
            alignItems: "center",
            // gap:"10px"
            paddingTop:"10px",
            paddingBottom: "10px",
          }}
        >
          <Box
            style={{
              height: "100%",
              width: "100%",
              paddingInline:"8px",
              // boxShadow: "1px 67px 30px rgb(77, 59, 51);",
              // backgroundColor: "red"
              
            }}
            className="d-flex justify-content-center align-center"
          >
            {images[imgIndex] && (
              <img
                src={images[imgIndex].urls.regular}
                key={imgIndex}
                className={`fade-in ${!imageLoading ? "loaded" : ""}`}
                alt="image-opened"
                onLoad={() => {
                  setTimeout(
                    () => {
                      setImageLoading(false);
                    },

                    1
                  );
                }}
                style={{
                  maxHeight: "100%",
                  maxWidth: "100%",
                  borderRadius: "15px",
                  zIndex: 5,
                  // border: "0.5px solid rgb(255, 215, 193)",
                  boxShadow: `0px 1px 3px ${images[imgIndex].breadcrumbs.color || "rgb(158, 122, 90)"}`,
                  // transition: "opacity 0.3s ease-in-out",
                  // opacity: imageLoading?0:1
                }}
              />
            )}
          </Box>

          {/* <div
            style={{ backgroundColor: "rgb(232, 166, 137)", height: "98%", width: "1px" }}
          /> */}
          <Box
            sx={{
              height: "100%",
              width: "40%",
              backgroundColor: "rgba(255, 156, 86, 0.24)",
              border: "0.5px solid pink",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-evenly",
              borderRadius:"150px 10px 10px 150px",
              boxShadow: "1px 0px 1px rgb(251, 172, 135);",
              padding:"20px",
            }}
          >
            <h5 style={{zIndex:5}}>{capitalizeFirstLetterOfWord({ textString: `${images[imgIndex].alt_description}` })}</h5>
            <DownloadImage />
            <Button variant="contained" sx={{borderRadius:"9999px", backgroundColor:"rgb(170, 5, 170)", zIndex:5,
              '&:hover': {
                backgroundColor:"rgb(140, 2, 140)",
              },
              transition: "all 0.2s ease-in-out"
            }}>
              Save to My Board
            </Button>
            <Typography sx={{zIndex:5, color:"rgb(85, 85, 85)",}}>
            - Photo by {" "}
                {images[imgIndex].user.first_name}{" "}
                {images[imgIndex].user.last_name}
               {" "} on Unsplash
            </Typography>
          </Box>
        </Box>
        
        {/* < and > buttons */}
        <Box
          sx={{
            position: "absolute",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            height: "80vh",
            width: "98vw",
          }}
        >
          <Button
            sx={{
              // backgroundColor: "rgba(239, 93, 255, 0.41)",
              // borderRadius: 10,
              backgroundColor: "rgba(138, 73, 0, 0.41)",
              borderRadius: 9999,
              minWidth: "0",
              padding: "4px",
              zIndex: 5,
            }}
            disabled={imgIndex === 0}
            onClick={() => {
              setImageLoading(true);
              console.log("Click even for back imgIndex: ", imgIndex);
              setImgIndex((prev: number) => prev - 1);
            }}
          >
            <ArrowBackIosIcon sx={{ color: "white", fontSize: 30 }} />
          </Button>
          <Button
            sx={{
              // backgroundColor: "rgba(239, 93, 255, 0.41)",
              // borderRadius: 10,
              backgroundColor: "rgba(138, 73, 0, 0.41)",
              borderRadius: 9999,
              minWidth: "0",
              padding: "4px",
              zIndex:5
            }}
            disabled={imgIndex === images.length - 1}
            onClick={() => {
              setImageLoading(true);
              console.log("Click even for forward imgIndex: ", imgIndex);
              setImgIndex((prev: number) => prev + 1);
            }}
          >
            <ArrowForwardIosRoundedIcon sx={{ color: "white", fontSize: 30 }} />
          </Button>
        </Box>
      </Box>

      {/* for phones or small screen */}
      <Box
        sx={{
          flexGrow: 1,
          display: { xs: "flex", md: "none" },
          justifyContent: "center",
          gap: "30px",
        }}
      >
        {/* <Box
          component="section"
          sx={{
            p: 2,
            border: "3px double grey",
            borderColor: "rgb(218, 110, 67)",
            borderRadius: "10px",
            width: "95vw",
            height: "80vh",
            placeSelf: "center",
          }}
        >
          This Box renders as an HTML section element.
        </Box> */}
        <Box
          component="section"
          sx={{
            position: "relative",
            p: 2,
            // border: "1px solid rgb(214, 158, 136)",
            boxShadow: "1px 1px 1px rgb(230, 171, 144);",
            // backgroundBlendMode: "color",
            borderRadius: "10px",
            width: "96vw",
            height: "75vh",
            display: "flex",
            // flexDirection: "column",
            justifyContent: "space-around",
            alignItems: "center",
            gap: "3px",
          }}
        >
          <Box
            style={{
              width: "100%",
              flexGrow: 1,
              // backgroundColor: "red"
            }}
          >
            {images[imgIndex] && (
              <img
                src={images[imgIndex].urls.regular}
                key={imgIndex}
                className={`fade-in ${!imageLoading ? "loaded" : ""}`}
                alt="image-opened"
                onLoad={() => {
                  setTimeout(
                    () => {
                      setImageLoading(false);
                    },

                    0
                  );
                }}
                style={{
                  maxHeight: "100%",
                  maxWidth: "100%",
                  borderRadius: "15px",
                  zIndex: 5,
                  // transition: "opacity 0.3s ease-in-out",
                  // opacity: imageLoading?0:1
                }}
              />
            )}

            <Box
              sx={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                // height: "98%",
                // width: "90%",
                // backgroundColor: "blue",
                // border: "3px double green",
                // display: "flex",
                // flexDirection: "column",
                // justifyContent: "space-between",
              }}
            >
              <h5 style={{zIndex:5}}>{images[imgIndex].alt_description}</h5>
              <DownloadImage />
              <Typography>
                Photo by {" "}
                {images[imgIndex].user.first_name}{" "}
                {images[imgIndex].user.last_name}
                
              </Typography>
            </Box>
          </Box>

          {/* <div
            style={{ backgroundColor: "black", height: "98%", width: "1px" }}
          /> */}
        </Box>
        {/* < and > buttons */}
        <Box
          sx={{
            position: "absolute",
            display: "flex",

            justifyContent: "space-between",
            alignItems: "center",
            // backgroundColor:"green",
            height: "76vh",
            width: "95vw",
          }}
        >
          <Button
            sx={{
              backgroundColor: "rgba(138, 73, 0, 0.41)",
              borderRadius: 9999,
              minWidth: "0",
              padding: "4px",
              
            }}
            disabled={imgIndex === 0}
            disableElevation={imgIndex === 0}
            onClick={() => {
              setImageLoading(true);
              setImgIndex((prev: number) => prev - 1);
            }}
          >
            <ArrowBackIosIcon sx={{ color: "white", fontSize: 30 }} />
          </Button>
          <Button
            sx={{
              backgroundColor: "rgba(138, 73, 0, 0.41)",
              borderRadius: 9999,
              minWidth: "0",
              padding: "4px",
            }}
            disabled={imgIndex === images.length - 1}
            onClick={() => {
              setImageLoading(true);
              setImgIndex((prev: number) => prev + 1);
            }}
          >
            <ArrowForwardIosRoundedIcon sx={{ color: "white", fontSize: 30 }} />
          </Button>
        </Box>
        {/* < and > buttons */}
        {/* <Box
          sx={{
            position: "absolute",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            height: "80vh",
            width: "89vw",
          }}
        >
          <Box
            sx={{
              backgroundColor: "rgba(239, 93, 255, 0.56)",
              borderRadius: 10,
            }}
          >
            <ArrowBackIosIcon sx={{ color: "white", fontSize: 30 }} />
          </Box>
          <Box
            sx={{
              backgroundColor: "rgba(239, 93, 255, 0.56)",
              borderRadius: 10,
            }}
          >
            <ArrowForwardIosRoundedIcon sx={{ color: "white", fontSize: 30 }} />
          </Box>
        </Box> */}
      </Box>
    </Box>
  );
};

export default ImageDetails;
