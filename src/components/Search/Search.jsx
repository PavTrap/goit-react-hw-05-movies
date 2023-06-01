import { useState } from 'react';
// import PropTypes from 'prop-types';
import { useSearchParams } from 'react-router-dom';
// import { Form, Input } from './Search.module.jsx';
// import { DebounceInput } from 'react-debounce-input';

export const Search = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const searchQuery = searchParams.get('query') ?? '';

  const [, setQuery] = useState('');

  const handleChange = event => {
    const pageQuery = event.target.value;
    setQuery(pageQuery);
    if (pageQuery === '') {
      return setSearchParams({});
    } else {
      setSearchParams({ query: pageQuery });
    }
  };
  

  return (
    <form
      onSubmit={event => {
        event.preventDefault();
      }}
    >
      <input
        placeholder={'input search keywords'}
      //   element={input}
        minLength={3}
      //   debounceTimeout={500}
        onChange={handleChange}
        value={searchQuery}
      />
		<button type='submit'>search</button>
    </form>
  );
}
export default Search