import Image from 'next/image';
import React from 'react';

const ImageWrapper = ({ src, alt, width, height, styles }) => {
  return (
    <div>
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className={styles}
      />
    </div>
  );
};

export default ImageWrapper;
