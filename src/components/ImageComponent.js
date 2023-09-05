import React from 'react';

const ImageComponent = ({ imageUrl, altText,hieght,width }) => {
  return (
    <div className="image-container">
      <img src={imageUrl} alt={altText}  height = {hieght} width ={ width} />
    </div>
  );
};

export default ImageComponent;