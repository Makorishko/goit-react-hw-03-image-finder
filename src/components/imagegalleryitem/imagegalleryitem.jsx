import { GalleryItem } from './imagegalleryitem-styled';
import { ImageItem } from './imagegalleryitem-styled';

export const ImageGalleryItem = ({ url, alt, onClick }) => {
  return (
    <GalleryItem onClick={onClick}>
      <ImageItem src={url} alt={alt} />
    </GalleryItem>
  );
};
