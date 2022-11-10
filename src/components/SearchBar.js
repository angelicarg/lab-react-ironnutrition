import { Row, Divider, Button, Input } from 'antd';

function SearchBar({ search, setSearch }) {
  function handleChange(e) {
    setSearch(e.target.value);
  }
  return (
    <div>
      <Divider>Searh Bar</Divider>
      <label>Search</label>
      <Input type="text" value={search} onChange={handleChange} />
    </div>
  );
}

export default SearchBar;
