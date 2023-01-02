const ImageShow = ({ image }) => {
  return (
    <div>
      <img
        className='api-img'
        src={image.urls.small}
        alt={image.alt_description}
      />
    </div>
  );
};

export default ImageShow;
