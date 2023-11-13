import { Overlay } from './modal-styled';
import { ModalWindow } from './modal-styled';

export const Modal = ({ onClick, largeImageUrl }) => {
  return (
    <Overlay onClick={onClick}>
      <ModalWindow>
        <img src={largeImageUrl} alt="" />
      </ModalWindow>
    </Overlay>
  );
};
