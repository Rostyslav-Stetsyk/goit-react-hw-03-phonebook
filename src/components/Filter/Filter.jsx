import { FilterForm } from './Filter.styled';

export const Filter = ({ onChange }) => {
  return (
    <FilterForm>
      <label htmlFor="find">Find contacts by name:</label>
      <input type="text" name="find" onChange={e => onChange(e.target.value)} />
    </FilterForm>
  );
};
