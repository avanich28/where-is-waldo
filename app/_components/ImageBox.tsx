import Image from "next/image";

const defaultStyles = {
  primary: "object-center object-cover",
};

function ImageBox({
  src,
  alt,
  quality = 100,
  type = "primary",
  addClassName = "",
}) {
  return (
    <Image
      src={src}
      alt={alt}
      fill
      quality={quality}
      sizes="(max-width: 700px) 100vw,(max-width: 1024px) 70vw, 40vw"
      placeholder="blur"
      className={`${defaultStyles[type]} ${addClassName}`}
    />
  );
}

export default ImageBox;
