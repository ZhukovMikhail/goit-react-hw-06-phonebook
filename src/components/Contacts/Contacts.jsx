import { StyledContList, StyledItem, StyledButton } from './Contacts.styled';
import { useSelector, useDispatch } from 'react-redux';
import { deleteContact, getContacts, getFilter } from 'redux/contactSlice';
import PropTypes from 'prop-types';

export const Contacts = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);

  const handleDelete = e => {
    const chengedContacts = contacts.filter(
      contact => contact.id !== e.currentTarget.parentElement.id
    );
    dispatch(deleteContact(chengedContacts));
  };

  const filteredContacts = contacts.filter(contact => {
    return contact.name
      .toLocaleLowerCase()
      .includes(filter.toLocaleLowerCase());
  });

  const shownContacts = filter !== '' ? filteredContacts : contacts;

  return (
    <StyledContList>
      {shownContacts.map(contact => {
        return (
          <StyledItem key={contact.id} id={contact.id}>
            <div>
              <span>{contact.name}</span>
              <span>{contact.number}</span>
            </div>
            <StyledButton type="button" onClick={handleDelete}>
              delete
            </StyledButton>
          </StyledItem>
        );
      })}
    </StyledContList>
  );
};

Contacts.prototype = {
  filteredContacts: PropTypes.array,
  contacts: PropTypes.array,
};
