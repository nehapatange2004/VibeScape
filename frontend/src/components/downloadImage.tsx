import { Button } from '@mui/material';
import React from 'react'
import {img as imgContext} from "../wrapper/imageContext.tsx";
interface downloadImageProp{
    imgIndex: number
}
const downloadImage = () => {
    const {images, imgIndex, API_KEY} = imgContext();
  return (
    <Button
              sx={{ zIndex: 5, borderRadius: "20px" }}
              variant="contained"
              onClick={async () => {
                // console.log("Download triggered");
                // const downloadURL = images[imgIndex].urls.full;
        
                // const link = document.createElement('a');
                // link.href = downloadURL;
                // link.download = 'vibeImage.jpg';
                // link.click();
                try {
                  console.log("Download triggered");
            
                  // const imageUrl = images[imgIndex].links.download;
                  const downloadResponse = await fetch(`https://api.unsplash.com/photos/${images[imgIndex].id}/download?client_id=${API_KEY}`)
                  // 1. Fetch the image
                  const downloadResponseJson = await downloadResponse.json();
                  const response = await fetch(downloadResponseJson.url);
                  console.log("The respopse of fecth for download: ", downloadResponse)
                  console.log("The respopse of fecth for download: ", downloadResponseJson)
                  console.log("The respopse of fecth for download: ", response)
                  const blob = await response.blob();
                  
                  // 2. Create a Blob URL
                  const blobUrl = window.URL.createObjectURL(blob);
            
                  // 3. Create a link and trigger download
                  const downloadTime = new Date().toLocaleTimeString();
                  const link = document.createElement('a');
                  link.href = blobUrl;
                  link.download = `${downloadTime}_vibeScapeImg.jpg`;
                  document.body.appendChild(link);
                  link.click();
                  document.body.removeChild(link);
            
                  // 4. Clean up the blob URL
                  window.URL.revokeObjectURL(blobUrl);
            
                  console.log("Download successful");
                } catch (error) {
                  console.error("Error while downloading:", error);
                }
                
              }}
            >
              Download
            </Button>
  )
}

export default downloadImage