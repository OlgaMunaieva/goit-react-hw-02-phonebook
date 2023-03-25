const Filter = ({ onChange }) => {
  const handleChange = event => {
    onChange(event.target.value);
  };
  return (
    <>
      <p>Find contacts by name</p>
      <input onChange={handleChange} type="search" name="filter" id="" />
    </>
  );
};

export default Filter;
