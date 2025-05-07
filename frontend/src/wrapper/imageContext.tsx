import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

interface ImageType {
  queried: string;
  setQuery: React.Dispatch<React.SetStateAction<string>>;
  imgIndex: number;
  setImgIndex: React.Dispatch<React.SetStateAction<number>>;
  images: any[];
  setImages: React.Dispatch<React.SetStateAction<any[]>>;
}

const ImgContext = createContext<ImageType | null>(null);

const ImgProvider = ({ children }: React.PropsWithChildren<{}>) => {
  const [queried, setQuery] = useState("aesthetic");
  const [images, setImages] = useState<any[]>([]);
  const [imgIndex, setImgIndex] = useState(0);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const res = await axios.get("http://localhost:5000/dashboard", {
          params: { query: queried },
        });
        const data = await res.data;
        console.log("Data fecthed from the server: ", data);
        setImages(Array.isArray(data) ? data : [data]);
        // setImages(res.data);
      } catch (err) {
        console.log("Error in fetching: ", err);
      }
    };

    fetchImages();
  }, [queried]);

  return (
    <ImgContext.Provider
      value={{
        queried,
        setQuery,
        images,
        setImages,

        imgIndex,
        setImgIndex,
      }}
    >
      {children}
    </ImgContext.Provider>
  );
};
export const img = () => useContext<any>(ImgContext);
export default ImgProvider;
