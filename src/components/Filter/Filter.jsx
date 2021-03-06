import { StyledLabel, StyledImput } from './Filter.styled';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { filterContact } from 'redux/contactSlice';

export const Filter = () => {
  const dispatch = useDispatch();
  const inputHandler = e => {
    const { value } = e.currentTarget;
    dispatch(filterContact(value));
  };
  return (
    <StyledLabel>
      Find my contacts by name
      <StyledImput type="text" name="filter" onChange={inputHandler} />
    </StyledLabel>
  );
};

Filter.propTypes = {
  value: PropTypes.string,
};
