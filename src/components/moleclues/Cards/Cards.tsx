import { ReactNode } from "react";
import MediaWithContent from "../MediaWithContent/MediaWithContent";

type CardProps={
    children?:ReactNode,
    imageSrc?:string
}

const Cards = ({
    children,
    imageSrc
}:CardProps) => {
  return (
    <div className="cell small-12 medium-6 large-3 text-center light hvr-fade">
      <MediaWithContent media={{
        type: "image",
        imageSrc: imageSrc,
        addClasses: "m-t-40 m-b-20",
        imageHeight:80,
        imageWidth:80
      }}>
      <div className="grid-x">
        <div className="cell small-12 medium-12 large-8 large-offset-2">
          {children}
        </div>
      </div>
      </MediaWithContent>
      
    </div>
  );
};

export default Cards;
