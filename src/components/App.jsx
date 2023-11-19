import { Searchbar } from './searchbar/searchbar';
import { Component } from 'react';
import { ImageGallery } from './imagegallery/imagegallery';
import { Loader } from './loader';
import { Button } from './button/button';
import { Modal } from './modal/modal';
import Notiflix from 'notiflix';
import React from 'react';

import { fetchImages } from './image-api';

export class App extends Component {
  end = React.createRef(null);
  state = {
    imageItems: [],
    isLoading: false,
    error: false,
    page: 1,
    value: '',
    largeImageUrl: null,
    total: 0,
  };

  searchImage = value => {
    this.setState({ imageItems: [], value: value, page: 1 });
  };

  loadMoreImages = e => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };

  openModal = newUrl => {
    this.setState({ largeImageUrl: newUrl });
  };

  closeModal = () => {
    this.setState({ largeImageUrl: null });
  };

  scrollToBottom = () => {
    this.end.scrollIntoView({ behavior: 'smooth' });
  };

  async componentDidUpdate(prevProps, prevState) {
    if (
      this.state.value !== prevState.value ||
      this.state.page !== prevState.page
    ) {
      try {
        this.setState({ isLoading: true });
        const images = await fetchImages(this.state.value, this.state.page);
        this.setState(prevState => ({
          imageItems: [...prevState.imageItems, ...images],
        }));

        setTimeout(() => this.scrollToBottom());
      } catch (error) {
        Notiflix.Notify.failure(error.message);
      } finally {
        this.setState({ isLoading: false });
      }
    }
  }

  render() {
    const { imageItems, isLoading, largeImageUrl } = this.state;

    return (
      <>
        <Searchbar onSubmit={this.searchImage} />

        {isLoading && <Loader />}

        {!!imageItems.length && (
          <ImageGallery onOpenModal={this.openModal} list={imageItems} />
        )}

        {imageItems.length % 12 === 0 && !!imageItems.length && (
          <Button onClick={this.loadMoreImages} />
        )}

        {largeImageUrl && (
          <Modal onClick={this.closeModal} largeImageUrl={largeImageUrl} />
        )}

        <div
          ref={el => {
            this.end = el;
          }}
        />
      </>
    );
  }
}
