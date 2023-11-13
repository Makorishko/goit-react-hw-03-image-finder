import { LoadButton } from './button-styled';
import { ButtonWrapper } from './button-styled';

export const Button = ({ onClick }) => {
  return (
    <ButtonWrapper>
      <LoadButton type="button" onClick={onClick}>
        Load more
      </LoadButton>
    </ButtonWrapper>
  );
};
