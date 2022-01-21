import Image from "next/image";
import { useContext } from "react";
import CONFIG from "../../../../utils/config/config";
import { MovieContext } from "../../../../utils/config/context";

const ImageHeader = () => {
  const [detailMovie, setDetailMovie] = useContext(MovieContext)
  return (
    <div className="container-image">
      <Image 
        src={CONFIG.BASE_IMAGE_URL_500 + detailMovie.backdrop_path}
        className="inside-img" 
        layout='fill' 
        />
    </div>
  )
};

export default ImageHeader;
