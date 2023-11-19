import { Overlay } from './modal-styled';
import { ModalWindow } from './modal-styled';
import { Component } from 'react';

export class Modal extends Component {

  escFunction(event) {
    if (event.key === 'Escape') {
      this.props.onClick();
    }
  }

  componentDidMount() {
    document.addEventListener('keydown', this.escFunction.bind(this), false);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.escFunction.bind(this), false);
  }

  onOverlayClick(e) {
    if (e.currentTarget === e.target) {
      this.props.onClick()
    }
}

  render() {
    const { largeImageUrl } = this.props;
    

    return (
      <Overlay onClick={this.onOverlayClick.bind(this)}>
        <ModalWindow>
          <img src={largeImageUrl} alt="" />
        </ModalWindow>
      </Overlay>
    );
  }
}
