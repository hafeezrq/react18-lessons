import ImageShow from './ImageShow';
import './ImageList.css';

const ImageList = ({ images }) => {
  const renderedImages = images.map(image => {
    return <ImageShow image={image} key={image.id} />;
  });
  return (
    <div className='col-span-6 grid grid-cols-6 gap-x-2 mt-4 grid-flow-dense'>
      {renderedImages}
    </div>
  );
};

export default ImageList;
