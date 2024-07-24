import React from 'react';
import styles from '../app/page.module.css';

const cloudinaryFetchUrl = (
  imageUrl: string,
  transformations: string
): string => {
  const cloud_name: string | undefined = process.env.CLOUDINARY_CLOUD_NAME;

  const encodedImageUrl: string = encodeURIComponent(imageUrl);
  return `https://res.cloudinary.com/${cloud_name}/image/fetch/${transformations}/${encodedImageUrl}`;
};
interface ImageComponentProps {
  src: string;
  alt: string;
  transformations: string;
}

const ImageComponent: React.FC<ImageComponentProps> = ({
  src,
  alt,
  transformations,
}) => {
  const imageUrl = cloudinaryFetchUrl(src, transformations);
  return (
    <img
      className={styles.img}
      src={imageUrl}
      alt={alt}
    />
  );
};

export default ImageComponent;
