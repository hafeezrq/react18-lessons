const ImageShow = ({ image }) => {
  return (
    <>
      <img
        className='w-full mb-2'
        src={image.urls.small}
        alt={image.alt_description}
      />
    </>
  );
};

export default ImageShow;
