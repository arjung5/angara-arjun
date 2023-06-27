import Image from "next/image";

type ImageProps = {
  imageSrc: any;
  altText?: string;
  addClasses?: string;
  imageHeight?: number;
  imageWidth?: number;
};

export default function ImageComp({
  imageSrc,
  imageWidth,
  imageHeight,
  altText,
  addClasses,
}: ImageProps) {
  return (
    <Image
      src={imageSrc as string}
      layout="resposive"
      height={imageHeight || 800}
      width={imageWidth || 1000}
      className={addClasses}
      alt={altText as string}
    />
  );
}
