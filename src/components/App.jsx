import { Searchbar } from './searchbar/searchbar';
import { Component } from 'react';
import { ImageGallery } from './imagegallery/imagegallery';
import { Loader } from './loader';
import { Button } from './button/button';
import { Modal } from './modal/modal';
import Notiflix from 'notiflix';

import { fetchImages } from './image-api';

export class App extends Component {
  state = {
    imageItems: [],
    isLoading: false,
    error: false,
    page: 1,
    value: '',
    largeImageUrl: null,
    total: 0,
  };

  searchImage = async e => {
    e.preventDefault();
  
    const value = e.target[1].value;
      

    try {
      this.setState({ isLoading: true, imageItems: [] });
      const images = await fetchImages(value, 1);

      this.setState({
        imageItems: images,
        value: value,
        page: 2,
      });
    } catch (error) {
      Notiflix.Notify.failure(error.message);
    } finally {
      this.setState({ isLoading: false });
    }
  };

  loadMoreImages = async e => {
    const value = this.state.value;
    try {
      this.setState({ isLoading: true });
      const images = await fetchImages(value, this.state.page);
      this.setState(prevState => ({
        imageItems: [...prevState.imageItems, ...images],
        isLoading: false,
        page: this.state.page + 1,
      }));
    } catch (error) {
      Notiflix.Notify.failure(error.message);
    } finally {
      this.setState({ isLoading: false });
    }
  };

  openModal = newUrl => {
    this.setState({ largeImageUrl: newUrl });
  };
  closeModal = () => {
    this.setState({ largeImageUrl: null });
  };

  render() {
    const { imageItems, isLoading, largeImageUrl } = this.state;
    return (
      <div>
        <Searchbar onSubmit={this.searchImage} />

        {isLoading ? (
          <Loader />
        ) : (
          <ImageGallery onOpenModal={this.openModal} list={imageItems} />
        )}
        {imageItems.length % 12 === 0 && !!imageItems.length && (
          <Button onClick={this.loadMoreImages} />
        )}

        {largeImageUrl && (
          <Modal onClick={this.closeModal} largeImageUrl={largeImageUrl} />
        )}
      </div>
    );
  }
}
