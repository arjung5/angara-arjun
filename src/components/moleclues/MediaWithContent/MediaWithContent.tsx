import { ReactNode } from "react";
import Image from "next/image";

type MediaProps = {
  type: string;
  imageSrc?: any;
  altText?: string;
  iconId?: string;
  addClasses?:string;
  imageHeight?:number;
  imageWidth?:number;
};
type ContentProps = {
  elementType: ReactNode;
  classValue: string;
  data: string;
};

type MediaWithContenProp = {
  media: MediaProps;
  content?: ContentProps[];
  children?: ReactNode;
};

const MediaWithContent = ({
  media,
  content,
  children,
}: MediaWithContenProp) => {
  const renderMedia = (media: MediaProps) => {
    const { type, imageSrc, altText,addClasses,imageHeight,imageWidth } = media;
    switch (type) {
      case "image":
        return <Image src={imageSrc as string}   layout="resposive" height={imageHeight || 800} width={imageWidth || 1000} className={addClasses} alt={altText as string} />;
    }
  };

  return (
    <div className="cell small-12 medium-6 large-4 light z-depth-1 hvr-underline-reveal">
      {renderMedia(media)}
      {children}
    </div>
  );
};
export default MediaWithContent;
