import { useContext, React } from "react";
import { context } from "../useContext";
import Image from "../Components/images";
import {getClass} from '../Utils/getClass'



function Photos() {

    const { photos } = useContext(context);

    const imageElement = photos.map((img, index) => (
        <Image key={img.id} img={img} className={getClass(index)} />
    ))
      
    

  return (
    <main className="photos">
     {imageElement}
    </main>
  );
}

export default Photos;
