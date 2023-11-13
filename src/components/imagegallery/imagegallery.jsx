import { ImageGalleryItem } from '../imagegalleryitem/imagegalleryitem';
import { ImageList } from './imagegallery-styled';

export const ImageGallery = ({ list, onOpenModal }) => {
  return (
    <ImageList>
      {list.map(item => (
        <ImageGalleryItem
              url={item.webformatURL}
              alt={item.tag}
              key={item.id}
              onClick={ () => onOpenModal(item.largeImageURL)  }
        />
      ))}
    </ImageList>
  );
};
