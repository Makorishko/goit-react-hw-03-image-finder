import { Overlay } from './modal-styled';
import { ModalWindow } from './modal-styled';
import { Component } from 'react';

export class Modal extends Component {
  constructor(props) {
    super(props);
    this.escFunction = this.escFunction.bind(this);
    this.onOverlaylick = this.onOverlaylick.bind(this);
  }

  escFunction(event) {
    if (event.key === 'Escape') {
      this.props.onClick();
    }
  }

  componentDidMount() {
    document.addEventListener('keydown', this.escFunction, false);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.escFunction, false);
  }

  onOverlaylick(e) {
    if (e.currentTarget === e.target) {
      this.props.onClick()
    }
}

  render() {
    const {  largeImageUrl } = this.props;

    return (
      <Overlay onClick={this.onOverlaylick}>
        <ModalWindow>
          <img src={largeImageUrl} alt="" />
        </ModalWindow>
      </Overlay>
    );
  }
}
