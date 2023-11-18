import { Header } from './searchbar-styled';
import { SearchForm } from './searchbar-styled';
import { SearchFormButton } from './searchbar-styled';
import { SearchFormInput } from './searchbar-styled';

export const Searchbar = ({ onSubmit }) => {
  const handleSubmit = e => { 
    e.preventDefault();
    const value = e.target[1].value;
    onSubmit(value);

  }
  return (
    <Header>
      <SearchForm onSubmit={handleSubmit}>
        <SearchFormButton type="submit">
          <svg viewBox="0 0 1024 1024" version="1.1">
            <path
              d="M1013.9 975.4L747.3 708.8c66.3-75.3 106.9-173.7 106.9-281.7C854.2 191.6 662.6 0 427.1 0S0 191.6 0 427.1s191.6 427.1 427.1 427.1c107.1 0 204.8-39.9 279.9-105.2l266.6 266.6c5.6 5.6 12.8 8.3 20.1 8.3s14.6-2.8 20.1-8.3c11.2-11.1 11.2-29.1 0.1-40.2z m-957-548.3C56.9 223 223 56.9 427.1 56.9S797.3 223 797.3 427.1 631.2 797.3 427.1 797.3 56.9 631.2 56.9 427.1z"
              fill="#838383"
            />
          </svg>
          
        </SearchFormButton>

        <SearchFormInput
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </SearchForm>
    </Header>
  );
};
