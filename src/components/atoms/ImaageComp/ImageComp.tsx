import Image from 'next/image'
 
type ImageProps={
    src:string,
    width:number,
    height:number,
    alt:string
}
export default function ImageComp({
    src,
    width,
    height,
    alt
}:ImageProps) {
  return (
    <Image
      src={src}
      width={width}
      height={height}
    alt={alt}
    
    />
  )
}